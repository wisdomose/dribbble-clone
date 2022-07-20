import Head from "next/head";
import "styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Dribbble - Discover the World’s Top Designers &amp; Creative
          Professionals
        </title>
        <meta name="description" content="Find Top Designers &amp; Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide."></meta>
        <link href="https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico" rel="icon"></link>
        <link href="https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png" sizes="192x192" rel="icon"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
