import Head from "next/head";

import FirebaseProvider from "../src/context/firebase";
import "normalize.css";
import { GlobalStyles } from "../global-styles";
import { Layout } from "../src/containers";

export default function App({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Head>
        <title>Pet House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}
