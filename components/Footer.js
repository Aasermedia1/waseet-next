export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 font-cairo text-right pt-16 pb-6 px-4 lg:px-16">
      
      {/* Top Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900">وسيط</h3>
          <p className="text-sm text-gray-600">
            أول مساعد مبيعات بالذكاء الاصطناعي للعملاء المصريين.  
            بنرد على عملائك على واتساب 24/7 باللهجة المصرية.
          </p>
          {/* Optional app icons */}
          <div className="flex gap-3 mt-2">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">المنتج</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">المميزات</li>
            <li className="hover:text-gray-900 cursor-pointer">الأسعار</li>
            <li className="hover:text-gray-900 cursor-pointer">كيف يعمل</li>
            <li className="hover:text-gray-900 cursor-pointer">قصص نجاح</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">الشركة</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">عن الشركة</li>
            <li className="hover:text-gray-900 cursor-pointer">تواصل معنا</li>
            <li className="hover:text-gray-900 cursor-pointer">المدونة</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">قانوني</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">سياسة الخصوصية</li>
            <li className="hover:text-gray-900 cursor-pointer">شروط الاستخدام</li>
            <li className="hover:text-gray-900 cursor-pointer">سياسة الاسترجاع</li>
            <li className="hover:text-gray-900 cursor-pointer">الأمان</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">الدعم</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">مركز المساعدة</li>
            <li className="hover:text-gray-900 cursor-pointer">دليل الاستخدام</li>
            <li className="hover:text-gray-900 cursor-pointer">الأسئلة الشائعة</li>
            <li className="hover:text-gray-900 cursor-pointer">الدعم الفني</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-8"></div>

      {/* Newsletter / Bottom Text */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Newsletter */}
        <div className="text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">اشترك في نشرتنا البريدية</h4>
          <p className="text-sm text-gray-600 mb-3">
            احصل على آخر التحديثات والنصائح لتطوير بيزنسك
          </p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full max-w-md border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-500"
            />
            <button className="bg-green-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-700 transition">
              اشترك
            </button>
          </div>
        </div>

        {/* Legal / Copyright & Developer */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <div>© 2026 وسيط جميع الحقوق محفوظة.</div>
          <div className="flex justify-center items-center gap-2">
            <span>Developed and operated by</span>
            <img
              src="/AaserMedia-logo.png"
              alt="Aaser Media"
              className="w-20 h-auto"
            />
          </div>
        </div>

      </div>

    </footer>
  );
}
