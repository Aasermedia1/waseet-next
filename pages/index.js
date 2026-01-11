import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import ClientsReviews from "../components/ClientsReviews"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <ProblemsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Clients Reviews Carousel */}
      <ClientsReviews />

      {/* Success Stories / Stats */}
      <SuccessStories />
    </>
  )
}
