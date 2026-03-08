import { RealEstateHeader } from "../components/realestate/RealEstateHeader";
import { RealEstateHero } from "../components/realestate/RealEstateHero";
import { FeaturedProperties } from "../components/realestate/FeaturedProperties";
import { RealEstateServices } from "../components/realestate/RealEstateServices";
import { RealEstateStats } from "../components/realestate/RealEstateStats";
import { RealEstateTestimonials } from "../components/realestate/RealEstateTestimonials";
import { RealEstateContact } from "../components/realestate/RealEstateContact";
import { RealEstateFooter } from "../components/realestate/RealEstateFooter";
import { Toaster } from "../components/ui/sonner";
import { Button } from "../components/ui/button";
import { Dumbbell } from "lucide-react";
import { useNavigate } from "react-router";

export function RealEstateHomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      
      <RealEstateHeader />
      <RealEstateHero />
      <FeaturedProperties />
      <RealEstateServices />
      <RealEstateStats />
      <RealEstateTestimonials />
      <RealEstateContact />
      <RealEstateFooter />
      <Toaster position="top-right" richColors />
    </div>
  );
}