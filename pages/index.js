import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import FeaturesSection from "../components/FeaturesSection";
import ImageFeatureBlock from "../components/ImageFeatureBlock";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import BuiltByAaser from "../components/BuiltByAaser";
import FAQSection from "../components/FAQSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط | موظف مبيعاتك الذكي على الواتس</title>
        <meta
          name="description"
          content="وسيط — موظف مبيعات ذكي يرد على رسائل العملاء على واتساب 24/7، يجيب على الأسئلة، يقترح المنتجات ويؤكد الطلبات تلقائياً."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="font-sans">
        <Navbar />
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <ImageFeatureBlock />
        <StatsSection />
        <Testimonials />
        <PricingSection />
        <BuiltByAaser />
        <FAQSection />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
