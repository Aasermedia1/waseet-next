import { FaLock, FaHeadphonesAlt, FaClock } from "react-icons/fa";

export default function TrustSection() {
  return (
    <section className="bg-[#EDF6F9] py-16 px-4 text-center font-Cairo">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        ليه تثق في وسيط
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        وسيط مساعدك للمبيعات ذكي للسوق المصري — بيساعد عملاءك, آمن وبيوفّر وقتك
        ويزود مبيعاتك من غير تعقيد, ولأته منتج من Aaser Media للحلول الرقمية،
        بخبرة في الحلول الرقيمة للتجارة الألكترونية
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
          <FaClock className="text-green-600 text-3xl mb-2" />
          <h3 className="font-bold text-xl text-gray-800">مبيعاتك متتفوتش</h3>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
          <FaLock className="text-green-600 text-3xl mb-2" />
          <h3 className="font-bold text-xl text-gray-800">أمان وخصوصية</h3>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
          <FaHeadphonesAlt className="text-green-600 text-3xl mb-2" />
          <h3 className="font-bold text-xl text-gray-800">دعم مصري</h3>
        </div>
      </div>
    </section>
  );
}
