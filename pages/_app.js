import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* ✅ Load Cairo and Tajawal from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;800&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Tajawal', 'Cairo', sans-serif;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
