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

      {/* Hero / Welcome */}
      <Hero />

      {/* Problems / Challenges */}
      <ProblemsSection />

      {/* Features (Accordion + Image) */}
      <FeaturesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Testimonials / Client Reviews */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Success Stories / Stats */}
      <SuccessStories />
    </>
  )
}
