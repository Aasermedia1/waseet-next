import Head from "next/head"
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
      <Head>
        <title>وسيط — الموظف الذكي للواتس</title>
        <meta
          name="description"
          content="وسيط مساعدك الذكي في الرد على العملاء وزيادة مبيعاتك على الواتساب."
        />
      </Head>

      <main dir="rtl" className="font-cairo bg-white text-gray-800">

        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION */}
        <Hero />

        {/* PROBLEMS / CHALLENGES */}
        <ProblemsSection />

        {/* FEATURES / ACCORDION */}
        <FeaturesSection />

        {/* TRUST SECTION */}
        <TrustSection />

        {/* SUCCESS STORIES (STATS) */}
        <SuccessStories />

        {/* TESTIMONIALS CAROUSEL */}
        <section className="py-20 bg-gray-50">
          <div className="text-center mb-8 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              آراء عملائنا
            </h2>
            <p className="text-gray-700 text-lg">
              أراء عملائنا، أصحاب بيزنس مصريين
            </p>
          </div>

          <div className="px-4">
            <TestimonialsCarousel />
          </div>
        </section>

      </main>
    </>
  )
}
