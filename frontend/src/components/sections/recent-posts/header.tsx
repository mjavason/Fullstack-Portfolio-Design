import paths from '@/config/constants/paths';
import Link from 'next/link';

function RecentPostsSectionHeader() {
  return (
    <div className="flex justify-center md:justify-between my-5 text-[#21243D]">
      <span className="text-2xl">Recent Posts</span>
      <Link
        href={paths.blog}
        className="hidden md:inline text-[#00A8CC] hover:underline text-lg cursor-pointer"
      >
        View all
      </Link>
    </div>
  );
}

export default RecentPostsSectionHeader;
