import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Features Section (Accordion + Image) */}
      <FeaturesSection />

      {/* Trust Section (Stats) */}
      <TrustSection />

      {/* Success Stories Section (Testimonials, etc.) */}
      <SuccessStories />
    </>
  )
}
