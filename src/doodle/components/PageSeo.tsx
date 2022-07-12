import { NextSeo } from 'next-seo';

interface IPageSeoProps {
  title?: string;
  description?: string;
}

const PageSeo = ({ title, description }: IPageSeoProps) => {
  return <NextSeo title={title} description={description} />;
};

export default PageSeo;
