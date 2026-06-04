import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import Footer from "@/components/cards/Footer";
import Heading from "@/components/ui/Heading";
import Header from "@/components/ui/NavHeader";
import { AccentProvider } from "@/context/AccentContext";
import { ThemeProvider } from "@/context/ThemeContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackSound1",
  description: "BlackSound1's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AccentProvider>
          <ThemeProvider>
            <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
              <main className="flex-1 px-0 pb-8 md:px-5">
                <div className="mx-auto max-w-6xl space-y-12 px-0 md:space-y-16 md:px-4">
                  <Header />
                  {children}
                  <Footer />
                  <SpeedInsights />
                </div>
              </main>
            </div>
          </ThemeProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
