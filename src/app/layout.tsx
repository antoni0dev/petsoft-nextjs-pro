import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PetSoft - Pet daycare software',
  description: 'An app that cares about your pet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-sm text-zinc-900 bg-[#e5e8ec] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
