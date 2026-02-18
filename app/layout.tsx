import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';

import { AccentProvider } from '@/context/AccentContext';
import { ColorCheckboxProvider } from '@/context/ColorCheckboxContext';
import { ThemeProvider } from '@/context/ThemeContext';

import Header from '@/components/ui/NavHeader';
import Footer from '@/components/ui/Footer';
import ThemeDropdown from '@/components/ui/ThemeDropdown';
import VariantDropdown from '@/components/ui/VariantDropdown';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BlackSound1',
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
          <ColorCheckboxProvider>
            <ThemeProvider>
              <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
                <main className="flex-1 px-0 pb-8 md:px-5">
                  <div className="mx-auto max-w-6xl space-y-12 px-0 md:space-y-16 md:px-4">
                    <Header />
                    <Link href="/">
                      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
                        BlackSound1
                      </h1>
                    </Link>
                    {children}
                    <Footer />
                    <SpeedInsights />
                  </div>
                </main>
                <button
                  data-drawer-target="default-sidebar"
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  type="button"
                  className="text-heading bg-transparent hover:text-accent transition-colors duration-200 font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 inline-flex sm:hidden"
                >
                  {/* <span className="sr-only">Open sidebar</span> */}
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="var(--text)" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                  </svg>
                </button>
                <aside
                  id="default-sidebar"
                  className="font-mono fixed top-0 right-0 z-40 w-32 transition-transform sm:translate-x-0"
                  aria-label="Sidebar"
                >
                  <div className="px-3 py-4  bg-neutral-primary-soft">
                    <div className="grid grid-cols-1 space-y-50">
                      <span>
                        <div className="sidebar-text">Theme</div>
                        <ThemeDropdown />
                      </span>
                      <span className="lg:mt-6">
                        <div className="sidebar-text">Variant</div>
                        <VariantDropdown />
                      </span>
                    </div>
                  </div>
                </aside>
              </div>
            </ThemeProvider>
          </ColorCheckboxProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
