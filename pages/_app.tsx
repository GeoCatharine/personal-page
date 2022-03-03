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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comforter&family=Inspiration&family=Space+Mono&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta name="title" content="Victoria Valentine - Personal Website" />
        <meta name="description" content="Front-end developer personal portfolio" />
        <meta name="keywords" content="personal, portfolio, front-end, developer, developing" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Victoria Nahornakova"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://victoriavalentine.netlify.app/" />
        <meta property="og:title" content="Victoria Valentine - Personal Website" />
        <meta property="og:description" content="Front-end developer personal portfolio" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://victoriavalentine.netlify.app/" />
        <meta property="twitter:title" content="Victoria Valentine - Personal Website" />
        <meta property="twitter:description" content="Front-end developer personal portfolio" />
        <meta property="twitter:image" content=""></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
