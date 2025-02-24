import paths from '@/app/paths';
import { Link } from '@heroui/react';

function DesktopList() {
  return (
    <ul className="hidden sm:flex gap-10 font-bold">
      <li className="transition-colors duration-300 cursor-pointer">
        <Link className="text-2xl hover:text-button-primary" href={paths.work}>
          Works
        </Link>
      </li>
      <li className="transition-colors duration-300 cursor-pointer">
        <Link className="text-2xl hover:text-button-primary" href={paths.blog}>
          Blog
        </Link>
      </li>
      <li className="transition-colors duration-300 cursor-pointer">
        <Link className="text-2xl hover:text-button-primary" href={paths.home}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default DesktopList;
