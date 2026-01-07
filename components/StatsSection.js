// components/StatsSection.js
export default function StatsSection() {
  const stats = [
    { label: '24/7', desc: 'يشتغل على مدار الساعة' },
    { label: '98%', desc: 'معدل رضا العملاء' },
    { label: '+50K', desc: 'رسالة مُدارة' },
    { label: '+500', desc: 'عميل خدمناهم' },
  ];

  return (
    <section dir="rtl" style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>أصحاب بيزنس زيك حققوا نتائج مذهلة</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ minWidth: '120px', background: '#f0fdf4', padding: '1rem', borderRadius: '10px' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>{stat.label}</p>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
