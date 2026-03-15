import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PurposeSection from '@/components/sections/PurposeSection';
import CoursesSection from '@/components/sections/CoursesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PurposeSection />
        <CoursesSection />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  );
}
