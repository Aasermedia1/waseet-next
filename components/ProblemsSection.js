// components/Problems.js
export default function Problems() {
  const items = [
    { icon: "📩", text: "الرسائل كثيرة" },
    { icon: "🌙", text: "العمل ليلاً" },
    { icon: "💸", text: "مبيعات ضائعة" },
    { icon: "🔁", text: "تكرار الأسئلة" },
  ];
  return (
    <section className="py-12 bg-gray-50 text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">المشاكل اللي بتواجهك</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-2">{p.icon}</div>
              <p className="font-semibold">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
