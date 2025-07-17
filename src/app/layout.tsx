import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalBackground from "@/components/ui/GlobalBackground";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Shuttles - Premium Transport Services",
  description: "Safe, Reliable, and Efficient solutions for your travel and delivery needs in Cape Town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}