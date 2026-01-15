import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>وسيط - موظف مبيعات ذكي</title>
      </Head>

      <main dir="rtl" className="font-Cairo bg-white text-gray-800">

        {/* Hero, Navbar, Features, Trust, and Success Sections are assumed above this */}

        {/* Success Stories Section */}
        <section className="py-20 text-center">
          <h2 className="text-green-600 text-sm font-semibold mb-2">قصص نجاح</h2>
          <h3 className="text-3xl font-bold mb-4">أصحاب بيزنس زيك حققوا نتائج مذهلة</h3>
          <p className="text-gray-600 mb-8">
            اسمع من أصحاب الأعمال المصريين اللي استخدموا وسيط وغيروا طريقة شغلهم
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center px-4 max-w-4xl mx-auto">
            <div className="bg-gray-50 hover:shadow-md p-6 rounded-md border transition duration-300">
              <p className="text-xl font-bold text-green-600">24/7</p>
              <p className="mt-2 text-sm">متاح دائماً</p>
            </div>
            <div className="bg-gray-50 hover:shadow-md p-6 rounded-md border transition duration-300">
              <p className="text-xl font-bold text-green-600">98%</p>
              <p className="mt-2 text-sm">رضا العملاء</p>
            </div>
            <div className="bg-gray-50 hover:shadow-md p-6 rounded-md border transition duration-300">
              <p className="text-xl font-bold text-green-600">+50K</p>
              <p className="mt-2 text-sm">رسالة يومياً</p>
            </div>
            <div className="bg-gray-50 hover:shadow-md p-6 rounded-md border transition duration-300">
              <p className="text-xl font-bold text-green-600">+500</p>
              <p className="mt-2 text-sm">صاحب بيزنس</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">آراء عملائنا</h2>
          <p className="text-gray-600 mb-10">أراء عملائنا, أصحاب بيزنس مصريين</p>

          <div className="max-w-4xl mx-auto px-4">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {[
                {
                  image: '/client1.png',
                  review: '“الرد بقى أسرع جدًا… والعميل بياخد إجابة فورية وده زوّد المبيعات.”',
                  type: 'متجر إنستجرام — القاهرة',
                  date: 'من أسبوع',
                },
                {
                  image: '/client2.png',
                  review: '“وسيط بيوفر علينا وقت رهيب… وبنقفل طلبات أكتر من غير ما نضيع رسائل.”',
                  type: 'ملابس — الجيزة',
                  date: 'من 3 أيام',
                },
                {
                  image: '/client3.png',
                  review: '“أسلوب مصري محترم… وبيتعامل مع المساومة بشكل طبيعي جدًا.”',
                  type: 'كوزمتكس — الإسكندرية',
                  date: '',
                },
                {
                  image: '/client4.png',
                  review: '“كنت بقضي 6 ساعات يومياً أرد على الرسائل، دلوقتي بركز على تطوير المنتجات.”',
                  type: 'أحمد - متجر ملابس',
                  date: 'من يومين',
                },
                {
                  image: '/client5.png',
                  review: '“العميل بيحس إنه بيتعامل مع بني آدم مش روبوت. مبسوط جداً.”',
                  type: 'متجر إلكتروني — طنطا',
                  date: 'من أسبوع',
                },
                {
                  image: '/client6.png',
                  review: '“وسيط غير طريقة شغلنا بالكامل، بقينا ننجز أكتر.”',
                  type: 'اكسسوارات — المنصورة',
                  date: 'من 5 أيام',
                }
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
                    <div className="flex flex-col items-center space-y-4">
                      <Image
                        src={testimonial.image}
                        alt="Client photo"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="text-green-500 text-xl">★★★★★</div>
                      <p className="text-lg font-medium">{testimonial.review}</p>
                      <p className="text-sm text-gray-600 mt-2">{testimonial.type}</p>
                      <p className="text-xs text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}
