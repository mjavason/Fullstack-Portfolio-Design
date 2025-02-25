import { Image } from '@heroui/react';

function ProfileImage() {
  return (
    <div className="order-1 lg:order-2 flex flex-col items-center">
      <Image
        className="object-contain w-2/3 lg:w-full m-auto rounded-full lg:flex-1 shadow-[-5px_13px_5px_#EDF7FA]"
        src="/images/Ellipse 1.png"
        alt="Picture of John"
        isZoomed
        removeWrapper
      />
      <div className="hidden lg:block lg:flex-1"></div>
    </div>
  );
}

export default ProfileImage;
