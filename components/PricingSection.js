export default function PricingSection() {
  return (
    <section className="bg-white py-20 font-cairo text-right px-4">
      <div className="text-center mb-12">
        <h2 className="text-green-600 font-bold text-sm mb-2">الأسعار</h2>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
          أسعار واضحة وشفافة
        </h3>
        <p className="text-gray-700 text-base">
          باقة واحدة شاملة لكل احتياجاتك
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#F9FBFC] border border-green-500 rounded-2xl p-8 max-w-md w-full shadow-md">

          <div className="text-center mb-4">
            <span className="inline-block bg-green-600 text-white text-sm font-bold py-1 px-4 rounded-full">
              الباقة الوحيدة
            </span>
          </div>

          <h4 className="text-xl font-bold text-gray-800 mb-1">الباقة الأساسية</h4>
          <p className="text-gray-600 text-sm mb-4">
            مثالية للمتاجر الصغيرة والمبتدئين
          </p>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">195</div>
          <div className="text-gray-700 text-lg mb-6">جنيه / شهرياً</div>

          <ul className="space-y-3 text-gray-800 mb-8">
            <li className="flex items-center justify-between">
              <span>حتى 500 رسالة يومياً</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
            <li className="flex items-center justify-between">
              <span>ردود تلقائية ذكية</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
            <li className="flex items-center justify-between">
              <span>إدارة الطلبات</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
            <li className="flex items-center justify-between">
              <span>تقارير تفصيلية</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
            <li className="flex items-center justify-between">
              <span>دعم فني على مدار الساعة</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
            <li className="flex items-center justify-between">
              <span>تكامل مع متجرك</span>
              <span className="text-green-600 font-bold">✔</span>
            </li>
          </ul>

          <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>
      </div>
    </section>
  )
}
