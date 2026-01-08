export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50 font-cairo text-center px-4">
      {/* Main Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        قصص نجاح
      </h2>

      {/* Subtitle Paragraph */}
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        أصحاب بيزنس زيك حققوا نتائج مذهلة<br />
        اسمع من أصحاب الأعمال المصريين اللي استخدموا وسيط وغيروا طريقة شغلهم
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
          <div className="text-gray-800 font-semibold">
            صاحب بيزنس
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
          <div className="text-gray-800 font-semibold">
            رسالة يومياً
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
          <div className="text-gray-800 font-semibold">
            رضا العملاء
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
          <div className="text-gray-800 font-semibold">
            متاح دائماً
          </div>
        </div>

      </div>
    </section>
  );
}
