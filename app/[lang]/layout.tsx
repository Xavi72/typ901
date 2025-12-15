import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/molecules/header/header";
import Footer from "@/components/molecules/footer/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
      <body className={`${dmSans.className} antialiased scroll-smooth `}>
        <Header params={params} />
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}
