import { useState } from "react";

const faqData = [
  {
    question: "هل وسيط صعب في الاستخدام؟",
    answer:
      "أبداً! وسيط سهل جداً في الاستخدام. كل اللي محتاجه تربط حساب الواتساب بتاعك وتبدأ. مافيش برمجة أو تعقيدات تقنية. احنا صممناه خصيصاً لأصحاب الأعمال الصغيرة في مصر.",
  },
  {
    question: "هل هيفهم اللهجة المصرية؟",
    answer:
      "طبعاً! وسيط متدرب خصيصاً على اللهجة المصرية والطريقة اللي المصريين بيتكلموا بيها. هيفهم عملائك ويرد عليهم بطريقة طبيعية جداً كأنك انت اللي بترد.",
  },
  {
    question: "هل ممكن أخسر اللمسة الشخصية مع عملائي؟",
    answer:
      "لا خالص! وسيط بيحافظ على اللمسة الشخصية. انت تقدر تخصص الردود بأسلوبك الخاص، والعملاء مش هيحسوا إنهم بيتكلموا مع روبوت. لو في أي حاجة معقدة، وسيط بيحولها ليك.",
  },
  {
    question: "كام سعر الاشتراك؟",
    answer:
      "الباقة الأساسية بـ 195 جنيه شهرياً، والباقة السنوية بـ 190 جنيه تدفعها سنوي بخصم لما تدفع سنوي مرة واحدة.",
  },
  {
    question: "هل بياناتي وبيانات عملائي آمنة؟",
    answer:
      "أكيد! احنا بناخد أمان البيانات على محمل الجد. كل البيانات مشفرة ومحمية بأعلى معايير الأمان. مش بنشارك أي بيانات مع أي حد، وملتزمين بكل قوانين الخصوصية.",
  },
  {
    question: "إيه اللي يحصل لو خلصت رسائل الباقة؟",
    answer:
      "لو وصلت لحد الرسائل في باقتك، هنبعتلك إشعار. تقدر تترقي للباقة الأعلى في أي وقت، أو تنتظر لحد ما الشهر الجديد يبدأ. الباقة الاحترافية فيها رسائل غير محدودة.",
  },
  {
    question: "هل ممكن ألغي الاشتراك في أي وقت؟",
    answer:
      "أيوه طبعاً! تقدر تلغي الاشتراك في أي وقت من لوحة التحكم. مافيش عقود طويلة أو التزامات. ولو لغيت، هتفضل تستخدم الخدمة لحد نهاية الفترة اللي دفعتها.",
  },
  {
    question: "هل في دعم فني لو احتجت مساعدة؟",
    answer:
      "أكيد! فريق الدعم الفني بتاعنا متاح على مدار الساعة عن طريق الواتساب. هنساعدك في أي حاجة من الإعداد الأولي لحد حل أي مشكلة تقابلك.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* Title Centered */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-bold text-sm mb-2">الأسئلة الشائعة</p>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          عندك أسئلة؟ عندنا إجابات
        </h2>
        <p className="text-gray-600">
          إجابات على أكثر الأسئلة اللي بنسمعها من أصحاب الأعمال المصريين
        </p>
      </div>

      {/* Accordion Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex justify-between items-center focus:outline-none text-right"
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>
              <span className="text-green-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed text-right">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
