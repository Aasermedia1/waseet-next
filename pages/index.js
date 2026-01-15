import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProblemsSection from "../components/ProblemsSection"
import FeaturesSection from "../components/FeaturesSection"
import TrustSection from "../components/TrustSection"
import SuccessStories from "../components/SuccessStories"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problems / Challenges */}
      <ProblemsSection />

      {/* Features / Accordion */}
      <FeaturesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Success Stories (Stats) */}
      <SuccessStories />

      {/* Testimonials / آراء عملائنا */}
      <section className="py-20 bg-gray-50 font-cairo text-center px-4">
        <div className="max-w-xl mx-auto mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">آراء عملائنا</h2>
          <p className="text-gray-700 text-lg">
            أراء عملائنا، أصحاب بيزنس مصريين
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client1.png"
                alt="أحمد محمود"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">أحمد محمود</div>
                <div className="text-sm text-gray-500">متجر إنستجرام — القاهرة</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“الرد بقى أسرع جدًا… والعميل بياخد إجابة فورية وده زوّد المبيعات.”</p>
            <div className="text-xs text-gray-400">من أسبوع</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client2.png"
                alt="منى العبد"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">منى العبد</div>
                <div className="text-sm text-gray-500">ملابس — الجيزة</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“وسيط بيوفر علينا وقت رهيب… وبنقفل طلبات أكتر من غير ما نضيع رسائل.”</p>
            <div className="text-xs text-gray-400">من 3 أيام</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client3.png"
                alt="سامي رشاد"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">سامي رشاد</div>
                <div className="text-sm text-gray-500">كوزمتكس — الإسكندرية</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“أسلوب مصري محترم… وبيتعامل مع المساومة بشكل طبيعي جدًا.”</p>
            <div className="text-xs text-gray-400"></div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client4.png"
                alt="هدى سمير"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">هدى سمير</div>
                <div className="text-sm text-gray-500">ملابس أطفال — المنيا</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“التجربة ممتازة… وسريع في الرد حتى في وقت الذروة!”</p>
            <div className="text-xs text-gray-400">من 5 أيام</div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client5.png"
                alt="يوسف عبد الله"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">يوسف عبد الله</div>
                <div className="text-sm text-gray-500">أحذية — طنطا</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“كنت بضيع وقت في الردود المتكررة… دلوقتي وسيط بياخد كل ده مننا.”</p>
            <div className="text-xs text-gray-400"></div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/client6.png"
                alt="سلمى خالد"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">سلمى خالد</div>
                <div className="text-sm text-gray-500">إكسسوارات — الزقازيق</div>
              </div>
            </div>
            <p className="text-gray-800 italic mb-3">“دلوقتي الكل بياخد رد فوري، وده فرق معانا جدًا في إقفال الطلب.”</p>
            <div className="text-xs text-gray-400">من يومين</div>
          </div>
        </div>
      </section>
    </>
  )
}
