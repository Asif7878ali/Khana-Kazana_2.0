import MainLayout from "@/components/layouts/MainLayout";
import { CalltoAction, FeatureDishes, Features, HeroSection, PopularCategories, SpecialOffer, Testimonials } from "../lib/HomePageHelper";


export default function Home() {

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <HeroSection/>
        <PopularCategories/>
        <FeatureDishes/>
        <SpecialOffer />
        <Testimonials/>
        <CalltoAction/>
        <Features/>
      </div>
    </MainLayout>
  );
}
