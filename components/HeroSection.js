// components/HeroSection.js
import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between py-20 px-8">
      {/* Left Side: Animated WhatsApp Chat */}
      <div className="relative max-w-sm mx-auto animate-fadeIn">
        <div className="chat-window">
          <div className="message">
            <p className="font-bold text-sm">عميل:</p>
            <p>عندك المقاس الكبير؟</p>
          </div>
          <div className="message">
            <p className="font-bold text-sm">وسيط:</p>
            <p>نعم، موجود! تحب أضيفه للطلب؟</p>
          </div>
          <div className="message">
            <p className="font-bold text-sm">عميل:</p>
            <p>نعم رجاءً، شكراً.</p>
          </div>
          <div className="message">
            <p className="font-bold text-sm">وسيط:</p>
            <p>الطلب اتسجل! 😉</p>
          </div>
        </div>
      </div>

      {/* Right Side: Headline, Subheading, and Buttons */}
      <div className="text-right max-w-lg">
        <h1 className="text-4xl font-bold text-primary mb-4">وسيط — موظف مبيعاتك الذكي علي الواتس</h1>
        <p className="text-xl mb-6">
          وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7...
        </p>
        <div className="space-x-4">
          <button className="cta-button">ابدأ تجربتك المجانية</button>
          <button className="cta-button">شوف بيشتغل إزاي</button>
        </div>
        <div className="mt-8">
          <ul className="list-disc pl-5">
            <li>لهجة مصرية بطلاقة</li>
            <li>تحويل لموظف حقيقي</li>
            <li>مناسب للـSME</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
