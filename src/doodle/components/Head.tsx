import NextHead from 'next/head';

import doodleConfig from '@/doodle/config';

const Head = () => {
  const { path, type } = doodleConfig.components.head.favicon;

  return (
    <NextHead>
      <link rel='icon' href={path} type={type} />
    </NextHead>
  );
};

export default Head;
