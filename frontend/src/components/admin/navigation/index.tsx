'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { deleteCookie, getCookies } from 'cookies-next';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';

function AdminNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = async () => {
    const allCookies = getCookies();
    if (allCookies) {
      Object.keys(allCookies).forEach((key) => {
        deleteCookie(key);
      });
    }
    router.replace(paths.adminLogin);
  };

  useEffect(() => {
    if (pathname) setActivePath(pathname);
  }, [pathname]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white text-primary shadow-sm px-10">
      <NavbarBrand>
        <p className="font-bold text-inherit">Admin Panel</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {[
          { name: 'Overview', path: paths.adminDashboard },
          { name: 'Posts', path: paths.adminPosts },
          { name: 'Projects', path: paths.adminWorks },
        ].map((item) => (
          <NavbarItem key={item.path} isActive={activePath === item.path}>
            <Link
              href={item.path}
              className={`py-5 cursor-pointer border-b-8 transition-all duration-300 ${activePath === item.path ? 'text-accent-primary border-accent-primary font-semibold' : 'border-transparent hover:text-accent-primary hover:border-accent-primary'}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" onClick={logout} color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {[
          { name: 'Overview', path: paths.adminDashboard },
          { name: 'Posts', path: paths.adminPosts },
          { name: 'Projects', path: paths.adminWorks },
          { name: 'Logout', action: logout },
        ].map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.path ? (
              <Link href={item.path} className="w-full text-lg">
                {item.name}
              </Link>
            ) : (
              <button onClick={item.action} className="w-full text-lg text-red-500">
                {item.name}
              </button>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default AdminNavBar;
