import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      <link href="../static/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="../static/css/all.css" rel="stylesheet"/>
	<link rel="shortcut icon" href="../static/images/favicon.png"/>
	<link href="/static/css/style.css" rel="stylesheet"/>
   </Head>
      <Component {...pageProps} />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'>
      </Script>

    </>
  );
}
