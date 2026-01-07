// components/Testimonials.js
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section dir="rtl" style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>أصحاب بيزنس زيك حققوا نتائج مذهلة</h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #eee', padding: '1.5rem', borderRadius: '12px' }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          “وسيط خلاني أركز على تسليم الطلبات بس! بيشتغل لوحده، بيرد على كل الأسئلة وبيشجع الناس تشتري، وأنا نايم!”
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Image src="/profile-pic.png" alt="testi" width={40} height={40} style={{ borderRadius: '50%' }} />
          <div>
            <strong>محمد عبد الرحمن</strong>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>صاحب متجر إلكتروني</p>
          </div>
        </div>
      </div>
    </section>
  );
}
