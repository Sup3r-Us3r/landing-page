import './styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing page - Trabalho 4º Semestre',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
