import '@/styles/tailwindcss/directives.css';

import Seo from '@/doodle/components/Seo';
import Head from '@/doodle/components/Head';

const DoodleApp = ({ Component, pageProps }) => {
  return (
    <>
      <Seo />
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default DoodleApp;
