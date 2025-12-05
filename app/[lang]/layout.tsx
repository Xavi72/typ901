import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/molecules/header/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typ901 Use case",
  description: "Made with love by codekickers",
};

export default function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased scroll-smooth `}>
        <Header params={params} />
        {children}
      </body>
    </html>
  );
}
