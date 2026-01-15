import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";
import TrustSection from "../components/TrustSection";
import SuccessStories from "../components/SuccessStories";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <>
      {/* — NAVIGATION — */}
      <Navbar />

      {/* — HERO — */}
      <Hero />

      {/* — PROBLEMS SECTION — */}
      <ProblemsSection />

      {/* — FEATURES (المميزات) — */}
      <FeaturesSection />

      {/* — TRUST SECTION — */}
      <TrustSection />

      {/* — SUCCESS STORIES (قصص نجاح) — */}
      <SuccessStories />

      {/* — TESTIMONIALS (آراء عملائنا) — */}
      <TestimonialsSection />

      {/* — FAQ (الأسئلة الشائعة) — */}
      <FAQSection />

      {/* — PRICING (الأسعار) — */}
      <PricingSection />
    </>
  );
}
