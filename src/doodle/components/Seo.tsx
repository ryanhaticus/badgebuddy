import { DefaultSeo } from 'next-seo';

import doodleConfig from '@/doodle/config';

const Seo = () => {
  const { titleTemplate, default: defaults } = doodleConfig.components.seo;

  const { title, description } = defaults;

  return (
    <>
      <DefaultSeo
        titleTemplate={titleTemplate}
        title={title}
        description={description}
      />
    </>
  );
};

export default Seo;
