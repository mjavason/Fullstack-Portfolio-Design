import FeaturedWorksSection from '@/components/sections/featured-works';
import HeroSection from '@/components/sections/hero';
import RecentPostsSection from '@/components/sections/recent-posts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </>
  );
}
