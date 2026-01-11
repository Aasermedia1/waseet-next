import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import ClientsReviews from "../components/ClientsReviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <TrustSection />

      {/* Clients Reviews Carousel */}
      <ClientsReviews />

      <SuccessStories />
    </>
  );
}

import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems / Challenges Section */}
      <ProblemsSection />

      {/* Features: Accordion + Image */}
      <FeaturesSection />

      {/* Trust Section: ليه تثق في وسيط */}
      <TrustSection />

      {/* Success Stories / Stats */}
      <SuccessStories />
    </>
  )
}
