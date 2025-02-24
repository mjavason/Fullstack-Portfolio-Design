import paths from '@/app/paths';
import Link from 'next/link';

function MobileList() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="hidden peer" />
      <ul className="fixed top-0 left-0 h-screen w-1/3 bg-gray-600 shadow-lg transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-center items-start p-5 space-y-4 font-bold sm:hidden z-50">
        <li className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer">
          <Link className="text-white hover:text-button-primary" href={paths.work}>
            Work
          </Link>
        </li>
        <li className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer">
          <Link className="text-white hover:text-button-primary" href={paths.blog}>
            Blog
          </Link>
        </li>
        <li className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer">
          <Link className="text-white hover:text-button-primary" href={paths.home}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MobileList;
