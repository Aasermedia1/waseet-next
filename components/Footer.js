// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10 border-t">
      <div className="container mx-auto px-4">
        <p>
          © {new Date().getFullYear()} وسيط — منتج من AaserMedia
        </p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:underline">سياسة الخصوصية</a>
          |
          <a href="#" className="mx-2 hover:underline">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
}
