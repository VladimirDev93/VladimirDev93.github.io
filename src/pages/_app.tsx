import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vladimir Jovanovic | Software Engineer</title>
        <meta name="description" content="Software Engineer, nature and cat lover, amateur astronomer."/>
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
