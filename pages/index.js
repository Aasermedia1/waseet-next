import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      {/* …other sections */}
    </>
  );
}
