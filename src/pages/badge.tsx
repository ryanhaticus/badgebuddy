import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { classNames } from '@/doodle/helpers/tailwindcss';

library.add(fas, far, fab);

const Badge = () => {
  const router = useRouter();
  const {
    set = 'solid',
    icon = 'certificate',
    text = 'BadgeBuddy',
    scheme = 'dark',
    rounded = 'true',
    padding = 'some',
    size = 'medium',
    gap = 'some',
  } = router.query;

  // set = brands, solid
  // icon = react, rectangle
  // size = small, medium, large
  // scheme = light, dark, red, blue, green, yellow, orange, purple, pink, indigo, gray, black, white
  // rounded = true, false
  // padding = none, some, more, most
  // gap = none, some, more, most

  const badgeClasses = () =>
    classNames(
      'flex justify-center items-center',
      gap === 'some' && 'gap-x-3',
      gap === 'more' && 'gap-x-4',
      gap === 'most' && 'gap-x-6',
      padding === 'some' && 'py-1 px-6',
      padding === 'more' && 'py-2 px-8',
      padding === 'most' && 'py-3 px-10',
      scheme === 'light' && 'bg-gray-100 text-gray-800',
      scheme === 'dark' && 'bg-gray-800 text-gray-100',
      scheme === 'red' && 'bg-red-500 text-white',
      scheme === 'blue' && 'bg-blue-500 text-white',
      scheme === 'green' && 'bg-green-500 text-white',
      scheme === 'yellow' && 'bg-yellow-500 text-white',
      scheme === 'orange' && 'bg-orange-500 text-white',
      scheme === 'purple' && 'bg-purple-500 text-white',
      scheme === 'pink' && 'bg-pink-500 text-white',
      scheme === 'indigo' && 'bg-indigo-500 text-white',
      scheme === 'gray' && 'bg-gray-500 text-white',
      scheme === 'black' && 'bg-black text-white',
      scheme === 'white' && 'bg-white text-black',
      rounded === 'true' && 'rounded-full',
    );

  const iconClasses = () =>
    classNames(
      size === 'small' && 'h-5 w-5',
      size === 'medium' && 'h-6 w-6',
      size === 'large' && 'h-7 w-7',
    );

  const textClasses = () =>
    classNames(
      size === 'small' && 'text-sm',
      size === 'medium' && 'text-md',
      size === 'large' && 'text-lg',
    );

  return (
    <div className='flex'>
      <div id='badge' className={badgeClasses()}>
        <FontAwesomeIcon
          className={iconClasses()}
          icon={`fa-${set} fa-${icon}` as unknown as IconProp}
        />
        <span className={classNames('font-semibold', textClasses())}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Badge;
