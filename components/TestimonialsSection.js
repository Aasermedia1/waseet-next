export default function TestimonialsSection() {
  const reviews = [
    {
      stars: 5,
      img: "/client1.png",
      name: "أحمد محمود",
      business: "متجر ملابس على إنستجرام",
      text: `وسيط غير حياتي تمامًا! كنت بقضي 6 ساعات يوميًا أرد على الرسائل، دلوقتي بتركز على تطوير المنتجات والمبيعات زادت %150`,
      extra: "+150% مبيعات",
      time: "من أسبوع",
    },
    {
      stars: 5,
      img: "/client2.png",
      name: "منى العبد",
      business: "متجر إكسسوارات — الجيزة",
      text: `الرد بقى أسرع جدًا… والعميل بياخد إجابة فورية وده زوّد المبيعات.`,
      extra: null,
      time: "من 3 أيام",
    },
    {
      stars: 5,
      img: "/client3.png",
      name: "سامي رشاد",
      business: "كوزمتكس — الإسكندرية",
      text: `أسلوب مصري محترم… وبيتعامل مع المساومة بشكل طبيعي جدًا.`,
      extra: null,
      time: "",
    },
    {
      stars: 5,
      img: "/client4.png",
      name: "هدى سمير",
      business: "ملابس أطفال — المنيا",
      text: `التجربة ممتازة… وسريع في الرد حتى في وقت الذروة!`,
      extra: null,
      time: "من 5 أيام",
    },
    {
      stars: 5,
      img: "/client5.png",
      name: "يوسف عبد الله",
      business: "أحذية — طنطا",
      text: `كنت بضيع وقت في الردود المتكررة… دلوقتي وسيط بياخد كل ده مننا.`,
      extra: null,
      time: "",
    },
    {
      stars: 5,
      img: "/client6.png",
      name: "سلمى خالد",
      business: "إكسسوارات — الزقازيق",
      text: `دلوقتي الكل بياخد رد فوري، وده فرق معانا جدًا في إقفال الطلب.`,
      extra: null,
      time: "من يومين",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 font-cairo text-center px-4">
      {/* Section Title */}
      <div className="max-w-xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900">آراء عملائنا</h2>
        <p className="text-gray-700 text-lg">
          أراء عملائنا، أصحاب بيزنس مصريين
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-right"
          >
            {/* Stars */}
            <div className="flex justify-start mb-3">
              {Array.from({ length: r.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={r.img}
                alt={r.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-right">
                <div className="font-bold text-lg">{r.name}</div>
                <div className="text-sm text-gray-600">{r.business}</div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-800 italic mb-3">
              “{r.text}”
            </p>

            {/* Extra Stat */}
            {r.extra && (
              <div className="text-green-600 font-semibold text-md mb-2">
                {r.extra}
              </div>
            )}

            {/* Time */}
            {r.time && (
              <div className="text-xs text-gray-500">
                {r.time}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
