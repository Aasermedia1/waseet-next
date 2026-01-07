// components/FAQSection.js

import { useState } from 'react';

const faqs = [
  {
    question: 'هل في وقت معين بيشتغل وسيط؟',
    answer: 'وسيط بيشتغل 24/7 بدون توقف.',
  },
  {
    question: 'هل بيشتغل مع الإنستجرام؟',
    answer: 'نعم، وسيط بيتكامل مع إنستجرام كمان.',
  },
  {
    question: 'هل في دعم فني؟',
    answer: 'أكيد، في دعم فني على مدار الساعة.',
  },
  {
    question: 'هل لازم يكون عندي موقع؟',
    answer: 'مش لازم، تقدر تستخدم وسيط مباشرة مع الواتساب.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md p-4">
            <button
              className="w-full text-right font-medium"
              onClick={() => toggle(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
