export default function ProblemsSection() {
  return (
    <section className="py-20 bg-gray-50 text-center font-cairo">
      {/* Title */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          المشاكل اللي بتواجهك
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-8 lg:px-16">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-3 text-green-600">💬</div>
          <h3 className="font-bold text-xl mb-2">الرسائل كثيرة</h3>
          <p className="text-gray-700">
            عشرات الرسائل كل يوم على الواتساب ومش قادر ترد على كلهم في نفس الوقت
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-3 text-green-600">🌙</div>
          <h3 className="font-bold text-xl mb-2">العملاء بيكلموك بالليل</h3>
          <p className="text-gray-700">
            الناس بتسأل على المنتجات بعد منتصف الليل وانت مش متاح ترد
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-3 text-green-600">📉</div>
          <h3 className="font-bold text-xl mb-2">بتخسر مبيعات كتير</h3>
          <p className="text-gray-700">
            العميل لما ميلاقيش رد سريع بيروح يشتري من حد تاني
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl mb-3 text-green-600">🔄</div>
          <h3 className="font-bold text-xl mb-2">نفس الأسئلة</h3>
          <p className="text-gray-700">
            بترد على نفس الأسئلة عن الأسعار والتوصيل والمقاسات مئات المرات
          </p>
        </div>

      </div>

      {/* Bottom Message */}
      <div className="mt-10 text-xl font-semibold text-green-600">
        وسيط بيحل كل المشاكل دي في ثواني
      </div>
    </section>
  );
}
