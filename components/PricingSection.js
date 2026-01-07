// components/Pricing.js
export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-50 text-right">
      <h2 className="text-2xl font-bold text-center mb-8">الأسعار</h2>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <h3 className="text-xl font-bold mb-4">باقة واحدة شاملة</h3>
          <p className="text-4xl font-extrabold text-green-600 mb-4">195 جنيه / شهر</p>
          <ul className="text-right space-y-2 mb-6">
            <li>✔️ حتى 500 رسالة يومياً</li>
            <li>✔️ ردود تلقائية ذكية</li>
            <li>✔️ إدارة الطلبات</li>
            <li>✔️ تقارير تفصيلية</li>
            <li>✔️ دعم فني على مدار الساعة</li>
            <li>✔️ تكامل مع إنستجرام</li>
          </ul>
          <a
            href="https://wa.me/201063595202"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-bold inline-block hover:bg-green-700 transition"
          >
            اشترك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
