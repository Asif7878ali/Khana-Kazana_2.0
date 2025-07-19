import MainLayout from "@/components/layouts/MainLayout";
import { CalltoAction, Features, HeroSection, PopularCategories, SpecialOffer, Testimonials } from "../lib/HomePageHelper";


export default function Home() {

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
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
