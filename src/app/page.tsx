import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"
import SliderImages from "@/components/SliderImages";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <Cards />
    <SliderImages />
   </div>
  );
}
