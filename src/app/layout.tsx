
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as per previous fix
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

// Removed direct assignment to geistSans and geistMono as they are already imported with these names.
// const geistSans = GeistSans; // This line is redundant
// const geistMono = GeistMono; // This line is redundant

export const metadata: Metadata = {
  title: 'OpenSource Hub | Innovative Development Solutions',
  description: 'OpenSource Hub offers top-tier web development, system development, blockchain, and Web3 services. Lease laptops and get AI-powered Web3 advice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
