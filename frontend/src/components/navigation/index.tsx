import DesktopList from './desktop';
import Toggle from './toggle';
import MobileList from './mobile';

function NavSection() {
  return (
    <header className="flex justify-end items-center px-5 py-5 min-h-[10vh]">
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
