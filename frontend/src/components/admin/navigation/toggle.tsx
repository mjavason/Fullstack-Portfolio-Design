import { Image } from '@heroui/react';

function NavToggle() {
  return (
    <label className="sm:hidden cursor-pointer " htmlFor="nav-toggle">
      <Image className="rounded-none" removeWrapper src="/images/menu.png" alt="Menu" />
    </label>
  );
}

export default NavToggle;
