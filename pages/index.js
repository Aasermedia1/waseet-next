import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"
import TestimonialsSection from "../components/TestimonialsSection"
import PricingSection from "../components/PricingSection"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Problems */}
      <ProblemsSection />

      {/* Features */}
      <FeaturesSection />

      {/* Trust */}
      <TrustSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />
    </>
  )
}
