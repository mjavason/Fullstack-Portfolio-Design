import { Image } from '@heroui/react';

function NavToggle() {
  return (
    <label className='sm:hidden cursor-pointer' htmlFor='nav-toggle'>
      <Image src='/images/menu.png' alt='Menu' />
    </label>
  );
}

export default NavToggle;
