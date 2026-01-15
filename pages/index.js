import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"
import TestimonialsSection from "../components/TestimonialsSection"
import FAQSection from "../components/FAQSection"
import PricingSection from "../components/PricingSection"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero / Welcome */}
      <Hero />

      {/* Problems / Challenges */}
      <ProblemsSection />

      {/* Features / المميزات */}
      <FeaturesSection />

      {/* Trust / ليه تثق في وسيط */}
      <TrustSection />

      {/* Success Stories / قصص نجاح */}
      <SuccessStories />

      {/* Testimonials / آراء عملائنا */}
      <TestimonialsSection />

      {/* FAQ / الأسئلة الشائعة */}
      <FAQSection />

      {/* Pricing / الأسعار */}
      <PricingSection />

    </>
  )
}
