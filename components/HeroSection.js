// components/Hero.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const messages = [
    "عميل: عندك المقاس الكبير؟",
    "وسيط: نعم، موجود! تحب أضيفه للطلب؟",
    "عميل: نعم رجاءً، شكراً.",
    "وسيط: الطلب اتسجل! 😉",
    "عميل: شكراً",
    "عميل: تكلفة الشحن للإسماعيلية؟",
    "وسيط: الشحن حيكون 50 جنيه ي فندم",
  ];

  const [displayed, setDisplayed] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    function next() {
      if (i >= messages.length) return;
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setDisplayed((prev) => [...prev, messages[i]]);
        i++;
        setTimeout(next, 1500);
      }, 900);
    }
    next();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Phone + Chat */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-[500px]">
            <Image
              src="/new-phone.png"
              layout="fill"
              objectFit="contain"
              alt="Hero Chat Demo"
            />
            <div className="absolute top-20 left-4 right-4 h-3/4 overflow-hidden">
              <div className="flex flex-col space-y-2">
                {displayed.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] px-3 py-1 rounded-lg text-sm ${
                      msg.startsWith("وسيط") ? "bg-green-100 self-start" : "bg-gray-100 self-end"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
                {typing && (
                  <div className="flex gap-1 ml-1">
                    <span className="dot animate-bounce">.</span>
                    <span className="dot animate-bounce delay-150">.</span>
                    <span className="dot animate-bounce delay-300">.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:w-1/2 text-right">
          <h1 className="text-4xl font-bold mb-4">✨ الحل الأول في مصر</h1>
          <h2 className="text-3xl font-bold mb-4">
            وسيط — موظف مبيعاتك الذكي علي الواتس
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7 على واتساب بيزنس.
            بيرد على العملاء، يعرض المنتجات، ويأكد الطلبات تلقائيًا بدون تدخّل منك.
          </p>

          <div className="flex gap-4 mb-6 flex-wrap">
            <a href="#pricing" className="bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition">
              ابدأ تجربتك المجانية
            </a>
            <a href="#how-it-works" className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-50 transition">
              شوف بيشتغل إزاي
            </a>
          </div>

          <ul className="space-y-2 text-gray-800 list-disc list-inside">
            <li>✔️ لهجة مصرية بطلاقة</li>
            <li>✔️ تحويل لموظف حقيقي</li>
            <li>✔️ مناسب للـSME</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
