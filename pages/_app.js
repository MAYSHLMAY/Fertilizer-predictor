import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
   
   </Head>
      <Component {...pageProps} />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'>
      </Script>

    </>
  );
}
