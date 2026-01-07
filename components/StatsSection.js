// components/StatsSection.js
export default function StatsSection() {
  const stats = [
    { value: '24/7', label: 'متاح دائماً' },
    { value: '98%', label: 'رضا العملاء' },
    { value: '+50K', label: 'رسالة شهرياً' },
    { value: '+500', label: 'عميل يستخدم وسيط' },
  ];

  return (
    <section dir="rtl" style={{ textAlign: 'center', padding: '4rem 1rem', background: '#f9f9f9' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>أصحاب بيزنس زيك حققوا نتائج مذهلة</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {stats.map((item, index) => (
          <div key={index} style={{ minWidth: '120px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#00B26F', marginBottom: '0.5rem' }}>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
