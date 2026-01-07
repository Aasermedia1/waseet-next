import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط — موظف مبيعاتك الذكي</title>
        <meta
          name="description"
          content="وظف وسيط مبيعات ذكي في شركتك وابدأ بجذب عملاء جدد 24/7"
        />
      </Head>

      <main dir="rtl" className="bg-white font-cairo min-h-screen">
        {/* NAVIGATION */}
        <header className="flex items-center justify-between py-4 px-8 border-b bg-white sticky top-0 z-50">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">وسيط</span>
          </div>

          {/* NAV LINKS */}
          <nav className="font-tajawal">
            <ul className="flex gap-8 list-none m-0 p-0">
              <li>
                <a
                  href="#how"
                  className="text-lg font-bold text-gray-800 transition-transform duration-300 hover:scale-110"
                >
                  إزاي بيشتغل
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-lg font-bold text-gray-800 transition-transform duration-300 hover:scale-110"
                >
                  الأسعار
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-lg font-bold text-gray-800 transition-transform duration-300 hover:scale-110"
                >
                  الأسئلة
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-bold text-gray-800 transition-transform duration-300 hover:scale-110"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#27ae60] text-white px-5 py-2 rounded-md text-lg font-tajawal font-bold transform transition duration-300 hover:scale-105">
            ابدأ مجاناً
          </button>
        </header>

        {/* Sample Content */}
        <section className="py-20 px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">مرحباً بك في وسيط</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            ابدأ الآن واستفد من مزايا الذكاء الاصطناعي في مبيعاتك
          </p>
        </section>
      </main>
    </>
  );
}
