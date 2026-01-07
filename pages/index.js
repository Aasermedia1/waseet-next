import Navbar from '../components/Navbar';
// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import ImageFeatures from '../components/ImageFeatures';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Other sections coming here */}
      </main>
    </>
  );
}
  return (
    <>
      <Head>
        <title>وسيط — موظف مبيعاتك الذكي على واتس</title>
        <meta name="description" content="وفّر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7 على واتساب بيزنس." />
      </Head>

      <div className="font-arabic text-gray-800">
        <Navbar />
        <Hero />
        <Problems />
        <Features />
        <ImageFeatures />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
}
