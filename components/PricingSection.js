// components/PricingSection.js
export default function PricingSection() {
  return (
    <section dir="rtl" style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>أسعار واضحة وشفافة</h2>
      <div style={{ maxWidth: '320px', margin: '0 auto', backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>الباقة الأساسية</p>
        <p style={{ fontSize: '2rem', color: '#16a34a', margin: '0 0 1rem' }}>195 جنيه / شهرياً</p>
        <ul style={{ textAlign: 'right', padding: 0, listStyle: 'none', lineHeight: '2' }}>
          <li>✅ حتى 500 رسالة يومياً</li>
          <li>✅ ردود تلقائية ذكية</li>
          <li>✅ إدارة الطلبات</li>
          <li>✅ تقارير تفصيلية</li>
          <li>✅ دعم فني على مدار الساعة</li>
          <li>✅ تكامل مع إنستجرام</li>
        </ul>
        <button style={{ marginTop: '1rem', backgroundColor: '#16a34a', color: '#fff', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          اشترك الآن
        </button>
      </div>
    </section>
  );
}
