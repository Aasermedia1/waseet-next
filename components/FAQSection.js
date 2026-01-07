// components/FAQ.js
import { useState } from 'react';

const faqs = [
  {
    q: 'هل في وقت معين بيشتغل وسيط؟',
    a: 'وسيط يشتغل 24/7 على مدار الساعة بدون توقف.',
  },
  {
    q: 'هل وسيط آمن؟',
    a: 'نعم، وسيط نظام آمن ويضمن حماية بياناتك.',
  },
  {
    q: 'هل يحتاج تدريب؟',
    a: 'لا، وسيط سهل الاستخدام بدون أي خبرة تقنية.',
  },
  {
    q: 'هل في دعم فني؟',
    a: 'نعم، فريق الدعم الفني جاهز يساعدك دائمًا.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 bg-white text-right">
      <h2 className="text-2xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
      <div className="container mx-auto px-4 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <p className="font-semibold">{faq.q}</p>
            {openIndex === i && (
              <p className="mt-2 text-gray-700">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
