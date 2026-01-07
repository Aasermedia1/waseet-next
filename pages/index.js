import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط - موظف مبيعاتك الذكي</title>
        <meta
          name="description"
          content="وظف وسيط مبيعات ذكي في شركتك خلال دقائق وابدأ بجذب عملاء جدد 24/7"
        />
      </Head>

      <main dir="rtl" className="font-cairo bg-white">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between py-4 px-8 border-b bg-white sticky top-0 z-50">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="وسيط" width={40} height={40} />
            <span className="text-[1.2rem] font-bold text-[#2c3e50]">وسيط</span>
          </div>

          {/* Nav Links */}
          <nav className="font-tajawal">
            <ul className="flex gap-6 list-none m-0 p-0">
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
          <button className="bg-[#27ae60] text-white py-2 px-5 rounded-md text-[1rem] font-bold hover:scale-105 transition-transform duration-300">
            إبدا مجاناً
          </button>
        </header>
      </main>
    </>
  );
}
