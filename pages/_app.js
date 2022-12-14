import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" /> <link rel="stylesheet" href="../static/all.css"/>
    
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      <link href="https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro" rel="stylesheet"></link>
   </Head>
   
      <Component {...pageProps} />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'>
      </Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/brain.js/2.0.0-beta.1/brain-browser.js" integrity="sha512-bI0AOBSlsQUR/VlZhVj6PuYqjQFO4YTD6Fpw2UBEGC+QkZWLiDgiFZpDefJFnS+ptTjiwZS30VsaF5vJtkQCGw==" crossOrigin="anonymous" referrerpolicy="no-referrer"></Script>
    </>
  );
}
