import Image from 'next/image';

function NavToggle() {
  return (
    <label className="md:hidden cursor-pointer " htmlFor="nav-toggle">
      <Image className="rounded-none" src="/images/menu.png" alt="Menu" fill loading="lazy" />
    </label>
  );
}

export default NavToggle;
