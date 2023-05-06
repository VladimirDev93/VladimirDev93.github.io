import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Header from 'components/header/Header';
import layoutStyle from './styles/layout.module.css';

import './styles/globals.css';

const inter = Inter({
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={layoutStyle.container}>
          <Header />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Vladimir Jovanovic | Software Engineer',
  description: 'Software Engineer, nature and cat lover, amateur astronomer.',
  keywords:
    'software engineer, software engineer serbia, software engineer kikinda, kikinda, reactjs developer, nextjs developer',
};
