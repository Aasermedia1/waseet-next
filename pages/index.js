import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>وسيط | موظف مبيعاتك الذكي</title>
        <meta name="description" content="وفر وقتك وزود مبيعاتك مع وسيط - موظف مبيعات ذكي يرد على عملاءك على واتساب 24/7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Sections will be added here step by step */}
      </main>
    </>
  );
}
