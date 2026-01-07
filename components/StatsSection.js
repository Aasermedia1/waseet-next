// components/Stats.js
export default function Stats() {
  const stats = [
    { value: '24/7', label: 'متاح دائماً' },
    { value: '98%', label: 'رضا العملاء' },
    { value: '+50K', label: 'رسالة شهرياً' },
    { value: '+500', label: 'عميل مستخدم' },
  ];

  return (
    <section className="py-12 bg-gray-50 text-right">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-green-600">{stat.value}</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
