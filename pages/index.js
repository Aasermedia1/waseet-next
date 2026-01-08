import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";
import SuccessStories from "../components/SuccessStories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <SuccessStories />
      {/* Next sections… */}
    </>
  );
}
import TrustSection from "../components/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <TrustSection />
      {/* next sections… */}
    </>
  );
}
