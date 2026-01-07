export default function ImageFeatureBlock() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <img
            src="/new-phone.png"
            alt="Phone showing Waseet"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 text-right">
          <h2 className="text-2xl font-bold mb-4">
            شاهد كيف وسيط يفتحلك فرص جديدة
          </h2>
          <p className="text-gray-700 mb-4">
            وسيط يعمل نيابة عنك، يرد على الرسائل، يعرض المنتجات، ويتابع
            الطلبات — كل ده بدون تعب.
          </p>
          <ul className="space-y-2">
            <li>✔️ يرد تلقائياً على عملائك</li>
            <li>✔️ يقترح المنتجات ذات صلة</li>
            <li>✔️ يؤكد الطلبات ويقلل المجهود</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
