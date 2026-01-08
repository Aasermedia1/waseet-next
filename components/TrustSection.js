export default function TrustSection() {
  return (
    <section className="py-8 bg-[#0F4C81] font-cairo text-center text-white">
      
      {/* Title */}
      <h2 className="text-2xl font-extrabold mb-2">
        ليه تثق في وسيط
      </h2>

      {/* Paragraph */}
      <p className="text-sm max-w-2xl mx-auto mb-5 leading-relaxed">
        وسيط مساعدك الذكي لزيادة مبيعاتك في السوق المصري — بيساعد عملاءك، آمن وبيوفّر وقتك ويزود مبيعاتك من غير تعقيد،
        ولأنه منتج من إسر ميديا للحلول الرقمية، وخبرة في المنتجات الرقيمة للتجارة الألكترونية
      </p>

      {/* 3 Bullet Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto px-4">
        
        {/* Bullet 1 */}
        <div className="bg-white text-[#0F4C81] rounded-md p-3 shadow-sm hover:shadow-md transition duration-300">
          <div className="text-xl mb-1">🕒</div>
          <div className="font-bold text-sm">مبيعاتك متتفوتش</div>
        </div>

        {/* Bullet 2 */}
        <div className="bg-white text-[#0F4C81] rounded-md p-3 shadow-sm hover:shadow-md transition duration-300">
          <div className="text-xl mb-1">🔒</div>
          <div className="font-bold text-sm">أمان وخصوصية</div>
        </div>

        {/* Bullet 3 */}
        <div className="bg-white text-[#0F4C81] rounded-md p-3 shadow-sm hover:shadow-md transition duration-300">
          <div className="text-xl mb-1">🎧</div>
          <div className="font-bold text-sm">دعم مصري</div>
        </div>

      </div>
    </section>
  );
}
