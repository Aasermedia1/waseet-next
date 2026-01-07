// components/ContactCTA.js
import React from 'react';

export default function ContactCTA() {
  return (
    <section className="bg-green-50 text-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">تواصل معنا</h2>
      <p className="text-lg mb-6">
        هل عندك استفسار؟ تواصل معنا مباشرةً على الواتس أو البريد الإلكتروني.
      </p>
      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
      >
        واتس اب على طول
      </a>
    </section>
  );
}
