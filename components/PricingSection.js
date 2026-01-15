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

      {/* Cards Container (centered + limited width) */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-4xl mx-auto">

        {/* Monthly Card */}
        <div className="w-full md:w-1/2 border border-green-600 rounded-xl p-6 text-right bg-white shadow-lg">
          
          {/* Label */}
          <div className="bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
            الباقة الشهرية
          </div>

          <div className="font-bold text-xl text-gray-800 mb-2">
            مثالية للمتاجر الصغيرة والمبتدئين
          </div>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            199
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / شهرياً
          </div>

          {/* Features */}
          <ul className="text-gray-800 space-y-3 mb-6 px-4">
            <li className="flex justify-between items-center">
              <span>حتى 500 رسالة يومياً</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>ردود تلقائية ذكية</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>إدارة الطلبات</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تقارير تفصيلية</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>دعم فني على مدار الساعة</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تكامل مع متجرك</span>
              <span className="text-green-600">✔</span>
            </li>
          </ul>

          <button className="bg-green-600 text-white font-bold w-full py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

        {/* Yearly Card */}
        <div className="w-full md:w-1/2 border border-green-600 rounded-xl p-6 text-right bg-white shadow-lg">
          
          <div className="bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
            الباقة السنوية
          </div>

          <div className="font-bold text-xl text-gray-800 mb-2">
            اشتراك سنوي مع زيادة عدد الرسائل
          </div>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            190
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / سنوي
          </div>

          <ul className="text-gray-800 space-y-3 mb-6 px-4">
            <li className="flex justify-between items-center">
              <span>حتى 1000 رسالة يومياً</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>ردود تلقائية ذكية</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>إدارة الطلبات</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تقارير تفصيلية</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>دعم فني على مدار الساعة</span>
              <span className="text-green-600">✔</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تكامل مع متجرك</span>
              <span className="text-green-600">✔</span>
            </li>
          </ul>

          <button className="bg-green-600 text-white font-bold w-full py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

      </div>
    </section>
  );
}
