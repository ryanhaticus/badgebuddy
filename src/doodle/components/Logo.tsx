import Image from 'next/image';
import Link from 'next/link';

import doodleConfig from '@/doodle/config';
interface ILogoProps {
  href?: string;
  className?: string;
}

const Logo = ({ href, className }: ILogoProps) => {
  const { srText, altText, path, width, height } = doodleConfig.components.logo;

  return (
    <Link href={href ?? '/'}>
      <a>
        <span className='sr-only'>{srText}</span>
        <div className={className}>
          <Image src={path} alt={altText} width={width} height={height} />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
