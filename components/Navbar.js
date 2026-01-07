// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo + Brand */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/logo.png"
                alt="Waseet Logo"
                width={36}
                height={36}
              />
              <span className="text-gray-900 font-extrabold text-xl mr-2">
                وسيط
              </span>
            </a>
          </Link>
        </div>

        {/* Links (RTL order) */}
        <ul className="hidden md:flex space-x-6 rtl:space-x-reverse font-medium text-gray-800">
          <li>
            <Link href="/">
              <a className="hover:text-green-600">الرئيسية</a>
            </Link>
          </li>
          <li>
            <Link href="#how-it-works">
              <a className="hover:text-green-600">كيف يعمل؟</a>
            </Link>
          </li>
          <li>
            <Link href="#pricing">
              <a className="hover:text-green-600">الأسعار</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a className="hover:text-green-600">تواصل معنا</a>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#pricing">
            <a className="bg-green-600 text-white px-5 py-2 rounded-md font-bold hover:bg-green-700 transition">
              ابدأ مجاناً
            </a>
          </Link>
        </div>

      </div>
    </header>
  );
}
