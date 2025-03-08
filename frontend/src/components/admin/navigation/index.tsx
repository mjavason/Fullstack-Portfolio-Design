import paths from '@/config/constants/paths';
import Link from 'next/link';

function AdminNavBar() {
  return (
    <nav className="bg-white text-[#C8CACB] flex justify-between items-center shadow-md px-10">
      <div className="flex items-center justify-between">
        <ul className="flex gap-10">
          <Link href={paths.adminDashboard}>
            <li className="py-5 cursor-pointer hover:text-[#469DFF] border-b-8 border-transparent hover:border-[#469DFF]">
              Overview
            </li>
          </Link>
          <Link href={paths.adminPosts}>
            <li className="py-5 cursor-pointer hover:text-[#469DFF] border-b-8 border-transparent hover:border-[#469DFF]">
              Posts
            </li>
          </Link>
          <Link href={paths.adminWorks}>
            <li className="py-5 cursor-pointer hover:text-[#469DFF] border-b-8 border-transparent hover:border-[#469DFF]">
              Projects
            </li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex gap-5">
        <div>
          <i className="fas fa-search cursor-pointer text-[#646D7D]"></i>
        </div>
        <span>|</span>
        <div>
          <i className="far fa-comments cursor-pointer text-[#646D7D]"></i>
        </div>
        <span>|</span>
        <div>
          <i className="far fa-bell cursor-pointer text-[#646D7D]"></i>
        </div>
        <span>|</span>
        <div className="flex gap-5 justify-center items-center">
          <i className="far far fa-user-circle cursor-pointer"></i>
          <p className="cursor-pointer">
            Vallendito
            <i className="fas fa-chevron-down"></i>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
