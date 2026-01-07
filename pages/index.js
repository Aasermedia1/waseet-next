import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import ChatDemo from '../components/ChatDemo';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط | موظف مبيعاتك الذكي</title>
        <meta name="description" content="وسيط — موظف مبيعاتك الذكي على الواتس، وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main dir="rtl" className={styles.main}>
        <Navbar />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>مرحباً بك في وسيط</h1>
            <p className={styles.subtitle}>ابدأ الآن واستفد من مزايا الذكاء الاصطناعي في مبيعاتك</p>
            <div className={styles.ctaButtons}>
              <Link href="#pricing"><a className={styles.greenBtn}>ابدأ تجربتك المجانية</a></Link>
              <Link href="#how-it-works"><a className={styles.outlineBtn}>ازاي بيشتغل؟</a></Link>
            </div>
            <ul className={styles.benefits}>
              <li>✅ زيادة مبيعاتك بسهولة</li>
              <li>✅ تحويل المحادثات لمبيعات</li>
              <li>✅ مناسب للشركات الصغيرة</li>
            </ul>
          </div>
        </section>

        {/* Chat Demo */}
        <ChatDemo />

        {/* How It Works */}
        <section id="how-it-works" className="py-12 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-6">كيف يشتغل وسيط؟</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-700">
            وسيط هو بوت ذكي يرد على العملاء، يجاوب على الأسئلة، ويعرض منتجاتك ويأخذ الطلبات — 24/7 على واتساب.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">الباقات والأسعار</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="border p-6 rounded-lg shadow w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">المجانية</h3>
              <p className="text-gray-700 mb-4">تجربة محدودة لمدة 7 أيام</p>
              <p className="text-2xl font-bold mb-4">0 ر.س</p>
              <Link href="#start"><a className="bg-green-600 text-white px-4 py-2 rounded">ابدأ الآن</a></Link>
            </div>
            <div className="border p-6 rounded-lg shadow w-full md:w-1/3 bg-green-50">
              <h3 className="text-xl font-bold mb-2">الأساسية</h3>
              <p className="text-gray-700 mb-4">كل ما تحتاجه للانطلاق</p>
              <p className="text-2xl font-bold mb-4">99 ر.س / شهرياً</p>
              <Link href="#start"><a className="bg-green-600 text-white px-4 py-2 rounded">اشترك الآن</a></Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-gray-700 mb-4">هل عندك استفسار؟ تواصل معنا مباشرة على الواتس أو البريد الإلكتروني.</p>
          <a href="https://wa.me/966500000000" target="_blank" className="text-green-600 font-bold underline">
            راسلنا على واتساب
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          <Image src="/logo.png" alt="Waseet Logo" width={30} height={30} className="mx-auto mb-2" />
          <p>© 2026 وسيط — منتج من <span className="font-bold text-black">AaserMedia</span></p>
        </footer>
      </main>
    </>
  );
}
