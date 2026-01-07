const features = [
  { icon: "🤖", title: "ردود تلقائية" },
  { icon: "📦", title: "إدارة الطلبات" },
  { icon: "🕐", title: "متاح 24/7" },
  { icon: "🔗", title: "تكامل سلس" },
  { icon: "🎛️", title: "تخصيص كامل" },
  { icon: "📊", title: "تقارير وإحصائيات" },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">كل اللي محتاجه لنجاح بيزنسك</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-3xl">{f.icon}</span>
              <p className="font-semibold">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
