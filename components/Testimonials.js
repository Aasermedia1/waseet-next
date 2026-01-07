// components/Testimonials.js
import Image from 'next/image';

const data = [
  {
    img: '/profile1.png',
    name: 'أحمد محمود',
    title: 'صاحب متجر',
    review: 'وسيط غيّرلي طريقة التواصل مع العملاء وزوّدلي المبيعات بشكل كبير!',
  },
  {
    img: '/profile2.png',
    name: 'منى عبد الرحمن',
    title: 'صاحبة بيزنس',
    review: 'أسهل طريقة أتعامل بيها مع الزبائن بدون تعب.',
  },
  {
    img: '/profile3.png',
    name: 'خالد السيد',
    title: 'تاجر إلكتروني',
    review: 'خدمة ممتازة، والدعم الفني سريع ومفيد.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white text-right">
      <h2 className="text-2xl font-bold text-center mb-8">ماذا يقول عملاؤنا؟</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition max-w-sm mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={item.img}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
            <p className="text-gray-700">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
