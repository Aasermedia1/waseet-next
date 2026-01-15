import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import TestimonialsSection from "../components/TestimonialsSection"
import PricingSection from "../components/PricingSection"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Problems (مشاكل تواجهك) */}
      <ProblemsSection />

      {/* Features (المميزات) */}
      <FeaturesSection />

      {/* Trust Section (ليه تثق في وسيط) */}
      <TrustSection />

      {/* Testimonials (آراء عملائنا) */}
      <TestimonialsSection />

      {/* Pricing (الأسعار) */}
      <PricingSection />

      {/* Success Stories (قصص نجاح) */}
      <SuccessStories />
    </>
  )
}
