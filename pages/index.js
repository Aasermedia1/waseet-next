// pages/index.js
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط — موقع موظف المبيعات الذكي</title>
        <meta name="description" content="أفضل حل لتطوير عملك بذكاء صناعي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white">
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </>
  )
}
