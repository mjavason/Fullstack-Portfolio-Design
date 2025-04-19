import { Image } from '@heroui/react';

function ProfileImage() {
  return (
    <div className="order-1 lg:order-2 flex flex-col items-center">
      <div className="overflow-hidden w-full md:w-auto aspect-square rounded-full shadow-[-5px_13px_5px_#EDF7FA]">
        <Image
          className="object-contain rounded-full"
          src="/images/Ellipse 1.png"
          alt="Picture of John"
          isZoomed
          removeWrapper
        />
      </div>
    </div>
  );
}

export default ProfileImage;
