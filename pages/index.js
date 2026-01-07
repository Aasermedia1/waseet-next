import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط - موظف مبيعاتك الذكي</title>
        <meta name="description" content="وسيط يساعدك تبيع أكثر على واتساب بموظف مبيعات ذكي يعمل 24/7، يرد على العملاء ويؤكد الطلبات تلقائيًا." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main dir="rtl" style={{ fontFamily: 'Arial, sans-serif', background: '#f9f9f9' }}>
        {/* Navigation Bar */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee'
        }}>
          <Image src="/logo.png" alt="Waseet Logo" width={50} height={50} />
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0 }}>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>الرئيسية</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>إزاي بيشتغل</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>الأسعار</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>تواصل معنا</a></li>
          </ul>
          <button style={{
            background: '#2ecc71',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>ابدأ تجربتك معنا</button>
        </nav>

        {/* Hero Section */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '60px 20px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>✨الحل الأول في مصر</h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px' }}>
            وسيط — موظف مبيعاتك الذكي علي الواتس
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', lineHeight: '1.8', marginBottom: '30px' }}>
            وفّر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7 على واتساب بيزنس.
            بيرد على العملاء، يعرض المنتجات، ويأكد الطلبات تلقائيًا بدون تدخّل منك.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
            <button style={{ backgroundColor: '#27ae60', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}>
              ابدأ تجربتك المجانية
            </button>
            <button style={{ backgroundColor: '#fff', color: '#27ae60', padding: '12px 24px', border: '2px solid #27ae60', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}>
              شوف بيشتغل إزاي
            </button>
          </div>

          {/* Key Benefits */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <li style={{ background: '#eafaf1', padding: '10px 20px', borderRadius: '20px' }}>✅ لهجة مصرية بطلاقة</li>
            <li style={{ background: '#eafaf1', padding: '10px 20px', borderRadius: '20px' }}>✅ تحويل لموظف حقيقي</li>
            <li style={{ background: '#eafaf1', padding: '10px 20px', borderRadius: '20px' }}>✅ مناسب للـSME</li>
          </ul>

          {/* Animated Chat Preview Placeholder */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            marginTop: '50px',
            height: '500px',
            border: '2px dashed #ccc',
            borderRadius: '15px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            color: '#aaa'
          }}>
            👇 هنا يظهر محاكاة محادثة عميل ووسيط (رسائل متحركة)
          </div>
        </section>
      </main>
    </>
  );
}
