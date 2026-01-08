import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProblemsSection from '@/components/ProblemsSection'
import BenefitsSection from '@/components/BenefitsSection'
import SuccessStoriesSection from '@/components/SuccessStoriesSection'

export default function Home() {
  return (
    <div dir="rtl">
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <BenefitsSection />
      <SuccessStoriesSection />
    </div>
  )
}
