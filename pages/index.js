import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط - موظف مبيعاتك الذكي</title>
        <meta name="description" content="وظف مبيعات ذكي في شركتك على واتساب 24/7" />
      </Head>

      <main dir="rtl" className="bg-white font-sans">
        {/* Navigation */}
        <header className="flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-white sticky top-0 z-50">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="وسيط" width={40} height={40} />
            <span className="text-[1.2rem] font-bold font-cairo text-[#2c3e50]">وسيط</span>
          </div>

          {/* Nav Links */}
          <nav className="font-tajawal">
            <ul className="flex gap-8 list-none m-0 p-0">
              <li>
                <a
                  href="#how"
                  className="text-lg font-bold text-[#333] no-underline transform transition duration-300 hover:scale-110"
                >
                  إزاي بيشتغل
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-lg font-bold text-[#333] no-underline transform transition duration-300 hover:scale-110"
                >
                  الأسعار
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-lg font-bold text-[#333] no-underline transform transition duration-300 hover:scale-110"
                >
                  الأسئلة
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-bold text-[#333] no-underline transform transition duration-300 hover:scale-110"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#27ae60] text-white px-5 py-2 rounded-md text-lg font-bold font-tajawal transform transition duration-300 hover:scale-105">
            ابدأ مجاناً
          </button>
        </header>

        {/* Content Sections Can Go Here */}
      </main>
    </>
  );
}
