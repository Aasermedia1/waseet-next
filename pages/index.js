// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // make sure this file exists
import ChatDemo from '../components/ChatDemo'; // this is the animated widget

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط | موظف مبيعاتك الذكي</title>
        <meta name="description" content="وسيط - موظف مبيعات ذكي يعمل 24/7 على الواتساب. مناسب لأصحاب المشاريع الصغيرة في مصر." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main dir="rtl" className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>وسيط — موظف مبيعاتك الذكي علي الواتس</h1>
            <p>وفر وقتك وزوّد مبيعاتك مع موظف مبيعات ذكي يشتغل 24/7...</p>
            <div className={styles.ctaButtons}>
              <Link href="#pricing" className={styles.greenBtn}>ابدأ تجربتك المجانية</Link>
              <Link href="#how-it-works" className={styles.outlineBtn}>شوف بيشتغل إزاي</Link>
            </div>
            <ul className={styles.benefits}>
              <li>✅ لهجة مصرية بطلاقة</li>
              <li>✅ تحويل لموظف حقيقي</li>
              <li>✅ مناسب للـSME</li>
            </ul>
          </div>
          <div className={styles.heroDemo}>
            <ChatDemo />
          </div>
        </section>

        {/* SECTION: المشاكل اللي بتواجهك */}
        <section className={styles.problems}>
          <h2>المشاكل اللي بتواجهك</h2>
          <p>كل صاحب بيزنس صغير في مصر بيواجه نفس التحديات دي كل يوم</p>
          <div className={styles.cards}>
            <div>📩 الرسائل كثيرة</div>
            <div>🌙 العمل ليلاً</div>
            <div>💸 مبيعات ضائعة</div>
            <div>🔁 تكرار الأسئلة</div>
          </div>
        </section>

        {/* SECTION: المميزات */}
        <section className={styles.features}>
          <h2>كل اللي محتاجه لنجاح بيزنسك</h2>
          <p>وسيط مش بس بيرد على الرسائل، ده بيدير كل عملية البيع من أولها لآخرها</p>
          <div className={styles.grid}>
            <div>🤖 ردود تلقائية</div>
            <div>📦 إدارة الطلبات</div>
            <div>⏰ متاح 24/7</div>
            <div>🔗 تكامل سلس</div>
            <div>🎛️ تخصيص كامل</div>
            <div>📊 تقارير وإحصائيات</div>
          </div>
        </section>

        {/* SECTION: قصص نجاح */}
        <section className={styles.success}>
          <h2>أصحاب بيزنس زيك حققوا نتائج مذهلة</h2>
          <p>اسمع من أصحاب الأعمال المصريين اللي استخدموا وسيط وغيروا طريقة شغلهم</p>
          <div className={styles.metrics}>
            <div>500+ صاحب بيزنس</div>
            <div>50K+ رسالة</div>
            <div>98% رضا</div>
            <div>24/7 متاح</div>
          </div>
        </section>

        {/* SECTION: الأسعار */}
        <section id="pricing" className={styles.pricing}>
          <h2>أسعار واضحة وشفافة</h2>
          <p>باقة واحدة شاملة لكل احتياجاتك</p>
          <div className={styles.pricingCard}>
            <h3>195 جنيه / شهر</h3>
            <ul>
              <li>✅ 500 رسالة يومياً</li>
              <li>✅ كل الميزات</li>
            </ul>
            <Link href="https://wa.me/201063595202" target="_blank" className={styles.greenBtn}>اشترك الآن</Link>
          </div>
        </section>

        {/* SECTION: وسيط بيشتغل إزاي */}
        <section id="how-it-works" className={styles.steps}>
          <h2>وسيط بيشتغل إزاي؟</h2>
          <div className={styles.stepList}>
            <div>1️⃣ استقبال الرسائل</div>
            <div>2️⃣ فهم وفلترة</div>
            <div>3️⃣ عرض ومتابعة</div>
          </div>
        </section>

        {/* SECTION: الأسئلة الشائعة */}
        <section className={styles.faq}>
          <h2>عندك أسئلة؟ عندنا إجابات</h2>
          <details>
            <summary>هل محتاج خبرة فنية؟</summary>
            <p>ولا أي خبرة. وسيط سهل جداً.</p>
          </details>
          <details>
            <summary>هل وسيط آمن؟</summary>
            <p>100%، بياناتك مشفرة وآمنة.</p>
          </details>
        </section>

        {/* SECTION: تواصل معنا */}
        <section className={styles.contact}>
          <h2>لسه عندك أسئلة؟</h2>
          <p>فريقنا جاهز يساعدك على مدار الساعة</p>
          <Link href="https://wa.me/201063595202" target="_blank" className={styles.greenBtn}>تواصل معنا على الواتساب</Link>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
          <p>© 2026 وسيط — منتج من <strong>AaserMedia</strong> لحلول الويب</p>
        </footer>
      </main>
    </>
  );
}
