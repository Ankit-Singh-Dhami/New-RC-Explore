import { Cards } from "./_components/Cards";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import { Pointers } from "./_components/Pointers";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Cards />
      <Pointers />
      <Footer />
    </>
  );
};

export default Page;
