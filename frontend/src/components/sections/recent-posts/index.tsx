import RecentPostsSectionHeader from './header';
import RecentPosts from './posts';

function RecentPostsSection() {
  return (
    <section className='px-5 md:px-36 py-10 bg-[#EDF7FA] text-[#21243D] min-h-[90vh] flex flex-col justify-start gap-5'>
      {/* recent posts section header */}
      <RecentPostsSectionHeader></RecentPostsSectionHeader>

      {/* recent posts */}
      <RecentPosts></RecentPosts>
    </section>
  );
}

export default RecentPostsSection;
