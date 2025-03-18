import type { Metadata } from 'next';
import { sourceCodePro400 } from '../styles/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'benxgao.com | Ben Gao',
  description: 'Ben Gao is a software engineer based in Auckland, New Zealand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={sourceCodePro400.className}>
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
