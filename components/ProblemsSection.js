// components/ProblemsSection.js
const problems = [
  { icon: '📩', text: 'الرسائل كثيرة' },
  { icon: '🔁', text: 'تكرار الأسئلة' },
  { icon: '💸', text: 'مبيعات ضائعة' },
  { icon: '🌙', text: 'العمل ليلاً' },
];

export default function ProblemsSection() {
  return (
    <section className="bg-gray-50 py-12 text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">المشاكل اللي بتواجهك</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
