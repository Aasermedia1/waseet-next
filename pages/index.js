import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط - موظف مبيعاتك الذكي</title>
        <meta name="description" content="موظف مبيعات ذكي يرد على عملائك على واتساب 24/7" />
      </Head>

      <main dir="rtl" className="font-sans bg-white">
        {/* ✅ Navigation Bar */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="وسيط" width={40} height={40} />
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50' }}>وسيط</span>
          </div>

          {/* Nav Links */}
          <nav className="font-tajawal">
            <ul style={{
              display: 'flex',
              gap: '24px',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              <li>
  <a 
    href="#how" 
    className="text-[1rem] font-bold text-[#333] no-underline transition-transform duration-300 hover:scale-105"
  >
    إزاي بيشتغل
  </a>
</li>
<li>
  <a 
    href="#pricing" 
    className="text-[1rem] font-bold text-[#333] no-underline transition-transform duration-300 hover:scale-105"
  >
    الأسعار
  </a>
</li>
<li>
  <a 
    href="#faq" 
    className="text-[1rem] font-bold text-[#333] no-underline transition-transform duration-300 hover:scale-105"
  >
    الأسئلة
  </a>
</li>
<li>
  <a 
    href="#contact" 
    className="text-[1rem] font-bold text-[#333] no-underline transition-transform duration-300 hover:scale-105"
  >
    تواصل معنا
  </a>
</li>
            </ul>
          </nav>

          {/* CTA Button */}
          <button style={{
            background: '#27ae60',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}>
            ابدأ مجاناً
          </button>
        </header>
      </main>
    </>
  );
}

const navStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '1rem'
};
