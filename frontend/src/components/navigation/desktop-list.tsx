import paths from '@/app/paths';
import { Link } from '@heroui/react';

function DesktopList() {
  return (
    <ul className='hidden sm:flex gap-5 font-bold'>
      <li className='hover:text-gray-500 transition-colors duration-300 cursor-pointer'>
        <Link href={paths.work}>Works</Link>
      </li>
      <li className='hover:text-gray-500 transition-colors duration-300 cursor-pointer'>
        <Link href={paths.blog}>Blog</Link>
      </li>
      <li className='hover:text-gray-500 transition-colors duration-300 cursor-pointer'>
        <Link href={paths.home}>Contact</Link>
      </li>
    </ul>
  );
}

export default DesktopList;
