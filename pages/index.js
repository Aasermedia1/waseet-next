import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"
import TestimonialsCarousel from "../components/TestimonialsCarousel"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems / Challenges Section */}
      <ProblemsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Success Stories (Stats) */}
      <SuccessStories />

      {/* Testimonials Carousel */}
      <div className="mt-16 px-4">
        <TestimonialsCarousel />
      </div>
    </>
  )
}
