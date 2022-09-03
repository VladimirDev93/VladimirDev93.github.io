import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vladimir Jovanovic | Software Engineer</title>
        <meta name="description" content="Software Engineer, nature and cat lover, amateur astronomer."/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
