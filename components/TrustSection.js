export default function TrustSection() {
  return (
    <section className="py-12 bg-blue-600 font-cairo text-center text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">ليه تثق في وسيط</h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-base mb-10 px-4 leading-relaxed">
        مساعدك للمبيعات ذكي للسوق المصري — بيساعد عملاءك, آمن وبيوفّر وقتك ويزود مبيعاتك من غير تعقيد,
        ولأته منتج من Aaser Media للحلول الرقمية ، بخبرة في الحلول الرقيمة للتجارة الألكترونية
      </p>

      {/* Bullet Points */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6">
        
        {/* Box 1 */}
        <div className="bg-white text-blue-600 font-bold px-4 py-3 rounded-md shadow-md text-sm w-64 text-center">
          🕒 مبيعاتك متتفوتش
        </div>

        {/* Box 2 */}
        <div className="bg-white text-blue-600 font-bold px-4 py-3 rounded-md shadow-md text-sm w-64 text-center">
          🔒 أمان وخصوصية
        </div>

        {/* Box 3 */}
        <div className="bg-white text-blue-600 font-bold px-4 py-3 rounded-md shadow-md text-sm w-64 text-center">
          🎧 دعم مصري
        </div>

      </div>
    </section>
  );
}
