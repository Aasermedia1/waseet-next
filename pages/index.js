import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection.js from "../components/FeaturesSection"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Success Stories Section */}
      <SuccessStories />
    </>
  )
}
