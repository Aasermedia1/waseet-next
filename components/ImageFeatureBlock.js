// components/ImageFeatureBlock.js
import Image from 'next/image';

export default function ImageFeatureBlock() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <Image src="/new-phone.png" width={600} height={500} alt="وسيط Example" className="rounded-xl shadow-lg"/>
        </div>
        <div className="lg:w-1/2 text-right">
          <h2 className="text-2xl font-bold mb-4">شاهد كيف وسيط يفتحلك فرص جديدة</h2>
          <p className="text-gray-700 mb-4">
            وسيط يشتغل نيابة عنك، يرد على الرسائل، يعرض المنتجات، ويتابع الطلبات — كل ده بدون تعب.
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>✔️ يرد تلقائياً على عملائك</li>
            <li>✔️ يقترح المنتجات ذات صلة</li>
            <li>✔️ يؤكد الطلبات ويقلل المجهود</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
