export default function PricingSection() {
  return (
    <section className="bg-white py-20 font-cairo text-right px-4">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-green-600 font-bold text-sm mb-2">الأسعار</h2>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
          أسعار واضحة وشفافة
        </h3>
        <p className="text-gray-700 text-base">
          باقتان شاملة لكل احتياجاتك
        </p>
      </div>

      {/* Two Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">

        {/* Monthly Card */}
        <div className="flex-1 border border-green-600 rounded-2xl p-8 bg-white shadow-md">
          
          {/* Label */}
          <div className="text-center mb-4">
            <span className="bg-green-600 text-white text-sm font-bold py-1 px-4 rounded-full">
              الباقة الشهرية
            </span>
          </div>

          <h4 className="text-xl font-bold text-gray-800 mb-1">الباقة الأساسية</h4>
          <p className="text-gray-600 text-sm mb-4">
            مثالية للمتاجر الصغيرة والمبتدئين
          </p>

          {/* Price */}
          <div className="text-5xl font-extrabold text-gray-900 mb-1">195</div>
          <div className="text-gray-700 text-lg mb-6">جنيه / شهرياً</div>

          {/* Features (with RTL check on right) */}
          <ul className="text-gray-800 space-y-3 mb-8">
            <li>✔ حتى 500 رسالة يومياً</li>
            <li>✔ ردود تلقائية ذكية</li>
            <li>✔ إدارة الطلبات</li>
            <li>✔ تقارير تفصيلية</li>
            <li>✔ دعم فني على مدار الساعة</li>
            <li>✔ تكامل مع متجرك</li>
          </ul>

          {/* Button */}
          <button className="bg-green-600 text-white font-bold w-full py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

        {/* Yearly Card */}
        <div className="flex-1 border border-green-600 rounded-2xl p-8 bg-white shadow-md">
          
          <div className="text-center mb-4">
            <span className="bg-green-600 text-white text-sm font-bold py-1 px-4 rounded-full">
              الباقة السنوية
            </span>
          </div>

          <h4 className="text-xl font-bold text-gray-800 mb-1">
            اشتراك سنوي مع زيادة عدد الرسائل
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            بدفع سنوي وتقديم أعلى قيمة
          </p>

          <div className="text-5xl font-extrabold text-gray-900 mb-1">190</div>
          <div className="text-gray-700 text-lg mb-6">جنيه / سنوي</div>

          <ul className="text-gray-800 space-y-3 mb-8">
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
