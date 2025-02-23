import DesktopList from './desktop-list';
import Toggle from './toggle';
import MobileList from './mobile-list';

function NavSection() {
  return (
    <header className='flex justify-end align-middle px-10 py-5 min-h-[10vh]'>
      {/* desktop */}
      <DesktopList></DesktopList>

      {/* toggle */}
      <Toggle></Toggle>

      {/* mobile - hidden by default */}
      <MobileList></MobileList>
    </header>
  );
}

export default NavSection;
