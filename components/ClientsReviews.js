import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ClientsReviews() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const slide = () => {
      if (slider) {
        // Scroll continuously
        slider.scrollLeft += 1;
        // Loop back when reaching end
        if (
          slider.scrollLeft >=
          slider.scrollWidth - slider.clientWidth
        ) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(slide);
    };

    animationFrame = requestAnimationFrame(slide);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const clients = [
    { img: "/client1.png", name: "عميل 1", review: "تجربة ممتازة!" },
    { img: "/client2.png", name: "عميل 2", review: "خدمة سريعة وفعالة" },
    { img: "/client3.png", name: "عميل 3", review: "رفع مبيعاتي للأعلى" },
    { img: "/client4.png", name: "عميل 4", review: "تواصل سهل ومريح" },
    { img: "/client5.png", name: "عميل 5", review: "موثوق وآمن" },
    { img: "/client6.png", name: "عميل 6", review: "انصح به لكل أصحاب البيزنس" },
  ];

  return (
    <section className="py-20 bg-gray-100 font-cairo text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        آراء العملاء
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
        اسمع من أصحاب الأعمال المصريين اللي استخدموا وسيط وغيروا طريقة شغلهم
      </p>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap px-6"
      >
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="inline-block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64 py-6"
          >
            <div className="w-full h-40 relative">
              <Image
                src={client.img}
                alt={client.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="mt-4 px-4 text-right">
              <div className="font-bold text-lg text-green-600">
                {client.name}
              </div>
              <p className="text-gray-700 text-sm mt-1">
                {client.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
