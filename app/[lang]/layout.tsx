import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Cookies from "@/components/molecules/cookiesBanner/cookies";
import Header from "@/components/molecules/header/header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Analytics } from "@vercel/analytics/react";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typ901 Use case",
  description: "Porsche classics expert",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang}>
      <body className={`${dmSans.className} antialiased scroll-smooth `}>
        <ProtectedRoute>
          <Header params={resolvedParams} />
          {children}
          <Cookies params={resolvedParams} />
        </ProtectedRoute>
        <Analytics />
      </body>
    </html>
  );
}
