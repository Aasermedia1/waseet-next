import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";
import TrustSection from "../components/TrustSection";
import PricingSection from "../components/PricingSection";
import SuccessStories from "../components/SuccessStories";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Problems / Challenges */}
      <ProblemsSection />

      {/* Features / المميزات */}
      <FeaturesSection />

      {/* Trust Section / ليه تثق في وسيط */}
      <TrustSection />

      {/* Pricing / الأسعار */}
      <PricingSection />

      {/* Success Stories / قصص نجاح */}
      <SuccessStories />

      {/* Testimonials / آراء عملائنا */}
      <TestimonialsSection />

      {/* FAQ / الأسئلة الشائعة */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
