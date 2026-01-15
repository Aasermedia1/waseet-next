import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const reviews = [
    {
      img: "/client1.png",
      name: "أحمد محمود",
      business: "متجر إنستجرام — القاهرة",
      text: "الرد بقى أسرع جدًا… والعميل بياخد إجابة فورية وده زوّد المبيعات.",
      time: "من أسبوع",
    },
    {
      img: "/client2.png",
      name: "منى العبد",
      business: "ملابس — الجيزة",
      text: "وسيط بيوفر علينا وقت رهيب… وبنقفل طلبات أكتر من غير ما نضيع رسائل.",
      time: "من 3 أيام",
    },
    {
      img: "/client3.png",
      name: "سامي رشاد",
      business: "كوزمتكس — الإسكندرية",
      text: "أسلوب مصري محترم… وبيتعامل مع المساومة بشكل طبيعي جدًا.",
      time: "",
    },
    {
      img: "/client4.png",
      name: "هدى سمير",
      business: "ملابس أطفال — المنيا",
      text: "التجربة ممتازة… وسريع في الرد حتى في وقت الذروة!",
      time: "من 5 أيام",
    },
    {
      img: "/client5.png",
      name: "يوسف عبد الله",
      business: "أحذية — طنطا",
      text: "كنت بضيع وقت في الردود المتكررة… دلوقتي وسيط بياخد كل ده مننا.",
      time: "",
    },
    {
      img: "/client6.png",
      name: "سلمى خالد",
      business: "إكسسوارات — الزقازيق",
      text: "دلوقتي الكل بياخد رد فوري، وده فرق معانا جدًا في إقفال الطلب.",
      time: "من يومين",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        dir="rtl"
        className="mySwiper"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl p-6 shadow-lg text-right">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={r.img}
                  width={56}
                  height={56}
                  className="rounded-full"
                  alt={r.name}
                />
                <div>
                  <div className="font-bold text-lg">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.business}</div>
                </div>
              </div>
              <p className="text-gray-800 italic mb-2">“{r.text}”</p>
              {r.time && (
                <div className="text-xs text-gray-400">{r.time}</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
