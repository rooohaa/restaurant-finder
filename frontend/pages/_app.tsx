import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link
               href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
               rel="stylesheet"
            />
            <title>Restaurant Finder</title>
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
