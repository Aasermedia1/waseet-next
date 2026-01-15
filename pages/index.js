import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";
import TrustSection from "../components/TrustSection";
import SuccessStories from "../components/SuccessStories";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PROBLEMS SECTION */}
      <ProblemsSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* TRUST SECTION */}
      <TrustSection />

      {/* ✅ PRICING SECTION */}
      <PricingSection />

      {/* SUCCESS STORIES (قصص نجاح) */}
      <SuccessStories />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FAQSection />
    </>
  );
}
