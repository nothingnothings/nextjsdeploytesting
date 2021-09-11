import '../styles/globals.css';

import Head from 'next/head';

import Layout from '../components/Layout/Layout';


import NotificationContext, { NotificationContextProvider } from '../store/notification-context';


function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      // <Head></Head>
      <NotificationContextProvider>
      <Layout>
        <Head>
        <title>Next Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Component {...pageProps} />
      </Layout>
      </NotificationContextProvider>
  );
}

export default MyApp;
