import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/header';
import { BYekanFont } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Telewebion | تلوبیون',
  description: 'Telewebion App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BYekanFont.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
