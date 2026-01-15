export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 font-cairo text-center px-4">
      
      {/* Section Title */}
      <div className="max-w-2xl mx-auto mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
          الأسعار
        </h2>
        <p className="text-gray-700 text-lg">
          أسعار واضحة وشفافة
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">

        {/* Monthly Plan Card */}
        <div className="flex-1 border border-green-600 rounded-xl p-6 text-right bg-white shadow-lg">
          <div className="relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              الباقة الشهرية
            </div>
          </div>

          <div className="mt-6 font-bold text-xl text-gray-800 mb-2">
            مثالية للمتاجر الصغيرة والمبتدئين
          </div>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            199
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / شهرياً
          </div>

          <ul className="text-gray-800 space-y-2 mb-6 list-none rtl:text-right">
            <li>✔ حتى 500 رسالة يومياً</li>
            <li>✔ ردود تلقائية ذكية</li>
            <li>✔ إدارة الطلبات</li>
            <li>✔ تقارير تفصيلية</li>
            <li>✔ دعم فني على مدار الساعة</li>
            <li>✔ تكامل مع متجرك</li>
          </ul>

          <button className="bg-green-600 text-white font-bold w-full py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

        {/* Yearly Plan Card */}
        <div className="flex-1 border border-green-600 rounded-xl p-6 text-right bg-white shadow-lg">
          <div className="relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              الباقة السنوية
            </div>
          </div>

          <div className="mt-6 font-bold text-xl text-gray-800 mb-2">
            اشتراك سنوي مع زيادة عدد الرسائل
          </div>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            190
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / سنوي
          </div>

          <ul className="text-gray-800 space-y-2 mb-6 list-none rtl:text-right">
            <li>✔ حتى 1000 رسالة يومياً</li>
            <li>✔ ردود تلقائية ذكية</li>
            <li>✔ إدارة الطلبات</li>
            <li>✔ تقارير تفصيلية</li>
            <li>✔ دعم فني على مدار الساعة</li>
            <li>✔ تكامل مع متجرك</li>
          </ul>

          <button className="bg-green-600 text-white font-bold w-full py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

      </div>
    </section>
  )
}
