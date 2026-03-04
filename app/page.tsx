import { Cards } from "./_components/Cards";
import Events from "./_components/Memories";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import { Pointers } from "./_components/Pointers";
import Memories from "./_components/Memories";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Memories />
      <Cards />
      <Pointers />
      <Footer />
    </>
  );
};

export default Page;
