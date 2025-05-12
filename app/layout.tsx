import './globals.css';
import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather'
});

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    }
  ],
  variable: '--font-satoshi'
});

export const metadata: Metadata = {
  title: 'CredMantra - Digital Credentials Verification Platform',
  description: 'Secure, efficient, and reliable digital credentials verification platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${satoshi.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}