const problems = [
  { icon: "📩", text: "الرسائل كثيرة" },
  { icon: "🌙", text: "العمل ليلاً" },
  { icon: "💸", text: "مبيعات ضائعة" },
  { icon: "🔁", text: "تكرار الأسئلة" },
];

export default function ProblemsSection() {
  return (
    <section className="py-12 bg-gray-50 text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">المشاكل اللي بتواجهك</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{p.icon}</div>
              <p className="font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
