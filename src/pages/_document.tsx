import doodleConfig from '@/doodle/config';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  const { language } = doodleConfig.next.document;

  return (
    <Html className='h-full scroll-smooth antialiased' lang={language}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
