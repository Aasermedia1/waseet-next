export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 font-cairo text-center px-4">
      
      {/* Title */}
      <div className="max-w-2xl mx-auto mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900">
          الأسعار
        </h2>
        <p className="text-gray-700 text-lg">
          أسعار واضحة وشفافة
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Monthly Package */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 text-right p-6">
          <div className="font-bold text-xl text-green-600 mb-2">
            الباقة الأساسية
          </div>
          <p className="text-gray-600 mb-4">
            مثالية للمتاجر الصغيرة والمبتدئين
          </p>

          {/* Price */}
          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            199
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / شهرياً
          </div>

          {/* Features List */}
          <ul className="text-gray-700 space-y-2 mb-6 list-inside list-disc">
            <li>حتى 500 رسالة يومياً</li>
            <li>ردود تلقائية ذكية</li>
            <li>إدارة الطلبات</li>
            <li>تقارير تفصيلية</li>
            <li>دعم فني على مدار الساعة</li>
            <li>تكامل مع متجرك</li>
          </ul>

          {/* Call to Action */}
          <button className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

        {/* Yearly Package */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 text-right p-6">
          <div className="font-bold text-xl text-green-600 mb-2">
            الباقة السنوية
          </div>
          <p className="text-gray-600 mb-4">
            مثالية للمستخدمين اللي بيدفعوا سنوي ويوفروا أكثر
          </p>

          {/* Price */}
          <div className="text-5xl font-extrabold text-gray-900 mb-1">
            190
          </div>
          <div className="text-lg text-gray-700 mb-6">
            جنيه / سنوي
          </div>

          {/* Features List */}
          <ul className="text-gray-700 space-y-2 mb-6 list-inside list-disc">
            <li>حتى 1000 رسالة يومياً</li>
            <li>ردود تلقائية ذكية</li>
            <li>إدارة الطلبات</li>
            <li>تقارير تفصيلية</li>
            <li>دعم فني على مدار الساعة</li>
            <li>تكامل مع متجرك</li>
          </ul>

          {/* Call to Action */}
          <button className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            اشترك الآن
          </button>
        </div>

      </div>
    </section>
  );
}
