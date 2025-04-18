'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { Input } from '@heroui/react';
import SearchIcon from '@/components/admin/icons/search-icon';
import { debounceSetter } from '@/utils/debounce';
import { useAppDispatch } from '@/redux/hooks';
import { setSearchValue } from '@/redux/slices/search-slice';

interface AdminNavbarProps {
  logout: () => void;
}

function AdminNavbar({ logout }: AdminNavbarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  //if a search value exists in the params, use it as search
  const queryFromURL = searchParams.get('q') || '';
  dispatch(setSearchValue({ value: queryFromURL }));

  const params = new URLSearchParams(searchParams.toString());
  const debouncedSetInput = debounceSetter((input: string) => {
    dispatch(setSearchValue({ value: input }));
    params.set('q', input);
    router.push(`?${params.toString()}`, { scroll: false });
  }, 700);

  return (
    <div className="w-full flex justify-between">
      <Input
        placeholder="Enter keyword to search"
        startContent={<SearchIcon className="text-primary pointer-events-none" />}
        type="text"
        className="max-w-[75%] md:max-w-[35%]"
        variant="bordered"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          debouncedSetInput(e.target.value);
        }}
      />

      <ul className="hidden md:flex gap-10 font-bold">
        {[
          { name: 'Overview', path: paths.adminDashboard },
          { name: 'Posts', path: paths.adminPosts },
          { name: 'Projects', path: paths.adminWorks },
          { name: 'Logout', action: logout },
        ].map((item, index) => (
          <li key={index} className="transition-colors duration-300 cursor-pointer">
            {item.path ? (
              <Link
                key={item.path}
                href={item.path}
                className={`text-2xl ${
                  pathname === item.path
                    ? 'text-accent-primary font-semibold'
                    : 'hover:text-accent-primary'
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <button key={index} onClick={item.action} className="text-2xl">
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNavbar;
