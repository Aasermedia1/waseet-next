import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState([]);
  const [typing, setTyping] = useState(false);

  const messages = [
    "وسيط: نعم موجود، أرسل لي رقمه لو سمحت؟",
    "العميل: هل المنتج الذي طلبته متاح؟",
    "وسيط: طبعاً، الطلب جاهز للشحن اليوم.",
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < messages.length) {
        setTyping(true);
        setTimeout(() => {
          setDisplayed((prev) => [...prev, messages[index]]);
          index++;
          setTyping(false);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-white overflow-hidden text-right">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
              وسيط — موظف مبيعاتك الذكي<br />على الواتس
            </h1>
            <p className="text-gray-600 mb-6">
              وفر وقتك وزود مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7...
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow">
                ابدأ تجربتك المجانية
              </button>
              <button className="border border-green-600 text-green-600 font-semibold py-2 px-6 rounded">
                شوفه يشتغل ازاي
              </button>
            </div>
            <ul className="text-sm text-gray-700 mt-6 space-y-1">
              <li>✔️ ردود سريعة وبالنيابة عنك</li>
              <li>✔️ تحويل المحادثات لمبيعات</li>
              <li>✔️ مناسب لـ SMEs</li>
            </ul>
          </div>

          {/* Chat Animation */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
            <div className="w-[320px] mx-auto h-[500px] bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col p-4 space-y-2 overflow-hidden">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">WhatsApp Chat</span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {displayed.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm shadow ${
                      typeof msg === "string" && msg.startsWith("وسيط")
                        ? "bg-green-100 self-start"
                        : "bg-gray-100 self-end"
                    }`}
                  >
                    {typeof msg === "string" ? msg : ""}
                  </div>
                ))}
                {typing && (
                  <div className="bg-green-100 self-start px-3 py-2 rounded-lg w-fit flex gap-1">
                    <span className="dot animate-bounce">.</span>
                    <span className="dot animate-bounce delay-150">.</span>
                    <span className="dot animate-bounce delay-300">.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
