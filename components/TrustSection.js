export default function TrustSection() {
  return (
    <section className="py-16 bg-[#0F4C81] font-cairo text-center text-white">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-4">
        ليه تثق في وسيط
      </h2>

      {/* Paragraph */}
      <p className="text-lg max-w-2xl mx-auto mb-8">
        وسيط مساعدك الذكي لزيادة مبيعاتك في السوق المصري — بيساعد عملاءك، آمن وبيوفّر وقتك ويزود مبيعاتك من غير تعقيد،
        ولأنه منتج من إسر ميديا للحلول الرقمية، وخبرة في المنتجات الرقيمة للتجارة الألكترونية
      </p>

      {/* 3 Bullet Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        
        {/* Bullet 1 */}
        <div className="bg-white text-[#0F4C81] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl mb-2">🕒</div>
          <div className="font-bold text-xl">مبيعاتك متتفوتش</div>
        </div>

        {/* Bullet 2 */}
        <div className="bg-white text-[#0F4C81] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl mb-2">🔒</div>
          <div className="font-bold text-xl">أمان وخصوصية</div>
        </div>

        {/* Bullet 3 */}
        <div className="bg-white text-[#0F4C81] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl mb-2">🎧</div>
          <div className="font-bold text-xl">دعم مصري</div>
        </div>

      </div>
    </section>
  );
}
