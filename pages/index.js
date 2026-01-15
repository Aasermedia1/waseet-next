import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"
import TestimonialsSection from "../components/TestimonialsSection"
import FAQSection from "../components/FAQSection"
import PricingSection from "../components/PricingSection"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems / Challenges Section */}
      <ProblemsSection />

      {/* Features Section (Accordion + Image) */}
      <FeaturesSection />

      {/* Trust Section (ليه تثق في وسيط) */}
      <TrustSection />

      {/* Success Stories (قصص نجاح) */}
      <SuccessStories />

      {/* Testimonials / Client Reviews (آراء عملائنا) */}
      <TestimonialsSection />

      {/* FAQ Section (الأسئلة الشائعة) */}
      <FAQSection />

      {/* Pricing Section (الأسعار) */}
      <PricingSection />

    </>
  )
}
