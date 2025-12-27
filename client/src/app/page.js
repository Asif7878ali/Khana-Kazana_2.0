import MainLayout from "@/components/layouts/MainLayout";
import { CalltoAction, Features, HeroSection, PopularCategories, SpecialOffer, Testimonials } from "../lib/HomePageHelper";


export default function Home() {

  return (
    <MainLayout>
      <div id="LandingPage">
        <HeroSection/>
        <PopularCategories/>
        <SpecialOffer />
        <Testimonials/>
        <CalltoAction/>
        <Features/>
      </div>
    </MainLayout>
  );
}
