export default function TrustSection() {
  return (
    <section className="py-20 bg-blue-600 font-cairo text-center text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">ليه تثق في وسيط</h2>

      {/* Centered Paragraph */}
      <p className="max-w-2xl mx-auto text-lg mb-8">
        مساعدك للمبيعات ذكي للسوق المصري — بيساعد عملاءك, آمن وبيوفّر وقتك ويزود مبيعاتك من غير تعقيد,
        ولأته منتج من Aaser Media للحلول الرقمية ، بخبرة في الحلول الرقيمة للتجارة الألكترونية
      </p>

      {/* Three Bullet Frames */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-8">
        
        {/* Box 1 */}
        <div className="bg-white text-blue-600 font-bold px-6 py-4 rounded-lg shadow-md w-full md:w-auto">
          🕒 مبيعاتك متتفوتش
        </div>

        {/* Box 2 */}
        <div className="bg-white text-blue-600 font-bold px-6 py-4 rounded-lg shadow-md w-full md:w-auto">
          🔒 أمان وخصوصية
        </div>

        {/* Box 3 */}
        <div className="bg-white text-blue-600 font-bold px-6 py-4 rounded-lg shadow-md w-full md:w-auto">
          🎧 دعم مصري
        </div>

      </div>
    </section>
  );
}
