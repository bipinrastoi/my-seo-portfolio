import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frontend Developer & Technical SEO Specialist',
    template: '%s | Portfolio',
  },
  description: 'Specializing in high-performance Next.js apps, Core Web Vitals, and AEO/GEO indexing strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* suppressHydrationWarning prevents browser extensions like Grammarly from throwing dev overlay errors */}
      <body 
        suppressHydrationWarning 
        className="min-h-screen bg-[#F9FAFB] text-gray-900 antialiased flex flex-col justify-between selection:bg-indigo-500 selection:text-white"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}