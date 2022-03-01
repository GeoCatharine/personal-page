import '../styles/globals.scss'
import { Layout } from 'antd'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FunctionComponent, useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const MyApp: FunctionComponent<AppProps> = ({Component, pageProps}) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <Head>
        <title>Victoria Valentine</title>
        <meta name="description" content="Personal/portofilo page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comforter&family=Inspiration&family=Space+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
