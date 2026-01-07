// components/ContactCTA.js
export default function ContactCTA() {
  return (
    <section className="py-12 bg-green-50 text-center text-right">
      <h2 className="text-2xl font-bold mb-4">لسه عندك أسئلة؟</h2>
      <p className="text-gray-700 mb-6">
        فريقنا جاهز يساعدك على مدار الساعة — تواصل معنا على الواتساب.
      </p>
      <a
        href="https://wa.me/201063595202"
        target="_blank"
        className="bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition"
      >
        تواصل معنا على الواتساب
      </a>
    </section>
  );
}
