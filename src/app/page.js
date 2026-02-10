import HeroSection from "./Components/HearoSection/Hero";
import ServicesSection from "./Components/HomeServices/HomeServices";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import DeliveryPartnerSection from "./Components/DeliveryPartnerSec/DeliveryPartner";
import TrustedStatsSection from "./Components/StateSec/StateSection";
import ProvenProcessSection from "./Components/ProvenProcessSec/ProvenProcess";
import TechStackSection from "./Components/TechStack/TechStack";
import TestimonialsSection from "./Components/Testimonial/TestimonialSec";
import CTASection from "./Components/CTA/CTAsec";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ServicesSection/>
    <IndustriesSection/>
    <DeliveryPartnerSection/>
    <TrustedStatsSection/>
    <ProvenProcessSection/>
    // <TechStackSection/>
    <TestimonialsSection/>
    <CTASection/>
    </>
  );
}
