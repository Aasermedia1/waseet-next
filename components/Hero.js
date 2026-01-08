import { useEffect, useState } from "react";

const messages = [
  "أهلاً يا فندم 👋 تحب تسأل عن إيه؟",
  "عايز أعرف سعر المنتج ده… وفيه خصم؟",
  "تمام يا فندم ✅ السعر 249 جنيه. تحب أخدلك قطعتين وفيه خصم 10%؟",
  "الشحن كام لمدينة نصر؟",
  "الشحن لمدينة نصر 45 جنيه 🚚 تحب الدفع عند الاستلام؟",
  "أيوه",
  "من فضلك يا فندم الاسم + العنوان بالتفصيل + رقم الموبايل؟"
];

export default function Hero() {
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let idx = 0;
    function next() {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setShown((prev) => [...prev, messages[idx]]);
        idx++;
        if (idx < messages.length) {
          setTimeout(next, 1000);
        }
      }, 1200);
    }
    next();
  }, []);

  return (
    <section id="home" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">

        {/* Chat Widget (LEFT on desktop) */}
        <div className="order-2 lg:order-1 mx-auto w-full max-w-lg">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="bg-green-600 text-white py-2 text-center font-bold text-lg">
              متصل الآن — وسيط
            </div>

            {/* Chat Body */}
            <div className="h-[420px] p-4 overflow-auto flex flex-col gap-3">
              {shown.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    i % 2 === 0
                      ? "self-start bg-gray-200 text-gray-800"
                      : "self-end bg-green-100 text-gray-800"
                  }`}
                >
                  {msg}
                </div>
              ))}
              {typing && (
                <div className="self-start bg-gray-200 px-3 py-2 rounded-lg inline-flex">
                  <span className="dot"></span>
                  <span className="dot delay-200"></span>
                  <span className="dot delay-400"></span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="border-t border-gray-200 p-3">
              <input
                type="text"
                placeholder="اكتب رسالتك…"
                className="w-full border rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Hero Text + Buttons (RIGHT on desktop) */}
        <div className="text-right order-1 lg:order-2">
          <div className="text-sm text-green-600 font-semibold mb-2">
            وكيل مبيعات ذكي للواتساب
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            وسيط — موظف مبيعاتك الذكي على الواتس
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7 …
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#trial"
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              ابدأ تجربتك المجانية
            </a>
            <a
              href="#how"
              className="border border-green-600 text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition"
            >
              شوف بيشتغل إزاي
            </a>
          </div>

          {/* Benefits */}
          <ul className="space-y-2 text-gray-800 font-semibold">
            <li>✓ لهجة مصرية بطلاقة</li>
            <li>✓ تحويل لموظف حقيقي</li>
            <li>✓ مناسب للـSME</li>
          </ul>
        </div>

      </div>

      {/* Typing dots animation */}
      <style jsx>{`
        .dot {
          width: 6px;
          height: 6px;
          margin-right: 3px;
          background: #999;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.4s infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
