import Head from 'next/head';
import store from 'store';
import { Provider } from 'react-redux';

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
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>
      </>
   );
}

export default MyApp;
