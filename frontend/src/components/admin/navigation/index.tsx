import DesktopList from './desktop';
import Toggle from './toggle';
import MobileList from './mobile';
import paths from '@/config/constants/paths';
import { getCookies, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

function NavSection() {
  const router = useRouter();

  const logout = () => {
    const allCookies = getCookies();
    if (allCookies) {
      Object.keys(allCookies).forEach((key) => {
        deleteCookie(key);
      });
    }
    router.replace(paths.home);
  };

  return (
    <header className="flex justify-end items-center px-5 py-5 min-h-[10vh]">
      {/* desktop */}
      <DesktopList logout={logout}></DesktopList>

      {/* toggle */}
      <Toggle></Toggle>

      {/* mobile - hidden by default */}
      <MobileList logout={logout}></MobileList>
    </header>
  );
}

export default NavSection;
