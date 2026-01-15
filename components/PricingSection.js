export default function PricingSection() {
  return (
    <section className="bg-white py-20 font-cairo text-right px-4">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-bold text-sm mb-2">الأسعار</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          أسعار واضحة وشفافة
        </h2>
        <p className="text-gray-700 text-base">
          باقتان شاملة لكل احتياجاتك
        </p>
      </div>

      {/* Two Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">

        {/* Monthly Plan */}
        <div className="border border-green-600 rounded-2xl p-8 bg-white shadow-md w-full lg:w-1/2">
          
          <div className="flex justify-center mb-4">
            <span className="bg-green-600 text-white text-sm font-bold py-1 px-4 rounded-full">
              الباقة الشهرية
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">الباقة الأساسية</h3>
          <p className="text-gray-600 text-sm mb-4 text-center">
            مثالية للمتاجر الصغيرة والمبتدئين
          </p>

          <div className="text-center mb-6">
            <span className="text-4xl font-extrabold text-gray-900">195</span>
            <span className="text-gray-700 text-lg mr-2">جنيه / شهرياً</span>
          </div>

          <ul className="text-gray-800 space-y-3 mb-8">
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>حتى 500 رسالة يوميًا</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>ردود تلقائية ذكية</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>إدارة الطلبات</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>تقارير تفصيلية</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>دعم فني على مدار الساعة</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>تكامل مع متجرك</span>
            </li>
          </ul>

          <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

        {/* Yearly Plan */}
        <div className="border border-green-600 rounded-2xl p-8 bg-white shadow-md w-full lg:w-1/2">
          
          <div className="flex justify-center mb-4">
            <span className="bg-green-600 text-white text-sm font-bold py-1 px-4 rounded-full">
              الباقة السنوية
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">الباقة السنوية</h3>
          <p className="text-gray-600 text-sm mb-4 text-center">
            اشتراك سنوي ويوفر أكثر
          </p>

          <div className="text-center mb-6">
            <span className="text-4xl font-extrabold text-gray-900">190</span>
            <span className="text-gray-700 text-lg mr-2">جنيه / سنوي</span>
          </div>

          <ul className="text-gray-800 space-y-3 mb-8">
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>حتى 1000 رسالة يوميًا</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>ردود تلقائية ذكية</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>إدارة الطلبات</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>تقارير تفصيلية</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>دعم فني على مدار الساعة</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3">
              <span className="text-green-600 font-bold">✔</span>
              <span>تكامل مع متجرك</span>
            </li>
          </ul>

          <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

      </div>
    </section>
  );
}
