import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full min-h-screen" id="parent">
      <Head>
        <title>Falconhacks</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
