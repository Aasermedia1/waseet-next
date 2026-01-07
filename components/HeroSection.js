import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const messages = [
    "عميل: عندك المقاس الكبير؟",
    "وسيط: نعم، موجود! تحب أضيفه للطلب؟",
    "عميل: نعم رجاءً، شكراً.",
    "وسيط: الطلب اتسجل! 😉",
    "عميل: شكرا",
    "عميل: تكلفة الشحن للإسماعيلية؟",
    "وسيط: الشحن حيكون 50 جنيه ي فندم",
  ];
  const [displayed, setDisplayed] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const nextMessage = () => {
      if (i >= messages.length) return;
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setDisplayed((prev) => [...prev, messages[i]]);
        i++;
        setTimeout(nextMessage, 1400);
      }, 900);
    };
    nextMessage();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        {/* Left - Image with chat overlay */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/new-phone.png"
            alt="وسيط chat demo"
            width={400}
            height={800}
          />
          <div className="absolute top-24 left-1/4 w-2/3 h-3/4 overflow-hidden">
            <div className="bg-white rounded-lg shadow-lg p-3 space-y-1">
              {displayed.map((msg, idx) => (
                <div
                  key={idx}
                  className={
                    msg.startsWith("وسيط")
                      ? "bg-green-100 text-green-800 rounded-lg px-3 py-1 self-start"
                      : "bg-gray-100 text-gray-800 rounded-lg px-3 py-1 self-end"
                  }
                >
                  {msg}
                </div>
              ))}
              {typing && (
                <div className="flex gap-1">
                  <span className="dot animate-pulse">.</span>
                  <span className="dot animate-pulse">.</span>
                  <span className="dot animate-pulse">.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right - Text content */}
        <div className="w-full lg:w-1/2 text-right">
          <h1 className="text-3xl font-bold mb-4">
            وسيط — موظف مبيعاتك الذكي على الواتس
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7...
          </p>

          <div className="flex gap-4 mb-4">
            <a
              href="#pricing"
              className="bg-green-600 text-white px-5 py-2 rounded-md font-bold hover:bg-green-700 transition"
            >
              ابدأ تجربتك المجانية
            </a>
            <a
              href="#how-it-works"
              className="border border-green-600 text-green-600 px-5 py-2 rounded-md font-bold hover:bg-green-50 transition"
            >
              شوف بيشتغل إزاي
            </a>
          </div>

          <ul className="space-y-2 text-gray-800">
            <li>✔️ لهجة مصرية بطلاقة</li>
            <li>✔️ تحويل لموظف حقيقي</li>
            <li>✔️ مناسب للـSME</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
