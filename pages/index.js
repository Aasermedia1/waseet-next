// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import FeaturesSection from '../components/FeaturesSection';
import ImageFeatureBlock from '../components/ImageFeatureBlock';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط — موظف مبيعاتك الذكي على الواتس</title>
        <meta name="description" content="وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7 على واتساب." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="font-sans text-gray-800">
        <Navbar />
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <ImageFeatureBlock />
        <StatsSection />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
