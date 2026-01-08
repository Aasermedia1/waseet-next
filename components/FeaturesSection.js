import { useState } from "react";

const featuresData = [
  {
    title: "ردود تلقائية ذكية",
    icon: "💬",
    bullets: [
      "وسيط بيرد على عملائك بالعربي المصري الطبيعي، كأنك انت اللي بترد بنفسك",
      "رد فوري على كل الرسائل",
      "فهم اللهجة المصرية",
      "إجابات دقيقة ومخصصة",
    ],
  },
  {
    title: "إدارة الطلبات",
    icon: "📦",
    bullets: [
      "استقبال وتنظيم الطلبات تلقائيًا مع تأكيد التفاصيل وحساب التكلفة",
      "تأكيد الطلبات تلقائيًا",
      "حساب الأسعار والتوصيل",
      "تتبع حالة الطلب",
    ],
  },
  {
    title: "متاح 24/7",
    icon: "🕒",
    bullets: [
      "عملائك يقدروا يتواصلوا معاك في أي وقت، حتى لو انت نايم أو مشغول",
      "لا يوجد أوقات عمل",
      "رد فوري في أي وقت",
      "ما تخسرش أي عميل",
    ],
  },
  {
    title: "تقارير وإحصائيات",
    icon: "📊",
    bullets: [
      "متابعة أداء مبيعاتك وفهم عملائك أكثر من خلال تقارير تفصيلية",
      "عدد الرسائل والطلبات",
      "أكثر المنتجات مبيعًا",
      "أوقات الذروة",
    ],
  },
  {
    title: "تكامل سلس",
    icon: "🔗",
    bullets: [
      "اتصال مباشر مع منصات التواصل الاجتماعي",
      "تكامل مع واتساب",
      "تكامل مع إنستجرام",
      "إدارة موحدة",
    ],
  },
];

export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-cairo">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-sm text-green-600 font-semibold mb-2">المميزات</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          كل اللي محتاجه لنجاح بيزنسك
        </h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          وسيط مش بس بيرد على الرسائل، ده بيدير كل عملية البيع من أولها لآخرها
        </p>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Features Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/hand.png"
            alt="Features"
            className="w-full max-w-xs lg:max-w-lg object-cover"
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4 text-right">
          {featuresData.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              {/* Accordion Header */}
              <button
                onClick={() => toggleOpen(idx)}
                className={`w-full flex items-center justify-between px-6 py-4 font-semibold text-lg ${
                  openIndex === idx
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <span className="text-xl">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              {openIndex === idx && (
                <div className="px-6 py-4 bg-green-50 text-gray-800">
                  <ul className="list-disc list-inside space-y-2">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
