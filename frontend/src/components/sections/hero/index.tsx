import ProfileDescription from './profile-description';
import ProfileImage from './profile-image';

function HeroSection() {
  return (
    <section className='px-5 lg:px-36 py-10 flex items-center min-h-[90vh]'>
      <div className='flex flex-col lg:flex-row gap-14 lg:gap-36 text-center lg:text-left'>
        {/* profile description */}
        <ProfileDescription></ProfileDescription>

        {/* profile image */}
        <ProfileImage></ProfileImage>
      </div>
    </section>
  );
}

export default HeroSection;
