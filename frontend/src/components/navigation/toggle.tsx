import Image from 'next/image';

function NavToggle() {
  return (
    <label className="md:hidden cursor-pointer " htmlFor="nav-toggle">
      <Image
        className="rounded-none"
        src="/images/menu.png"
        alt="Menu"
        width={32}
        height={32}
        loading="lazy"
      />
    </label>
  );
}

export default NavToggle;
