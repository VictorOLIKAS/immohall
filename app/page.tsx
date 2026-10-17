import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OffMarketBanner from '@/components/OffMarketBanner';
import Categories from '@/components/Categories';
import HomeListings from '@/components/HomeListings';
import FeaturedListings from '@/components/FeaturedListings';
import ProjectChoice from '@/components/ProjectChoice';
import AlertCTA from '@/components/AlertCTA';
import ProSpace from '@/components/ProSpace';
import Blog from '@/components/Blog';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <OffMarketBanner />
        <Categories />
        <HomeListings />
        <FeaturedListings />
        <ProjectChoice />
        <AlertCTA />
        <ProSpace />
        <Blog />
        <Stats />
      </main>
      <Footer />
    </>
  );
}