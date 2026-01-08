import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Text */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.svg" alt="Waseet Logo" width={48} height={48} />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-gray-800">وسيط</span>
              <span className="text-sm text-gray-500 -mt-1">Waseet</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse font-bold text-gray-700 text-sm">
            <Link href="#home" className="hover:text-green-600 transition-colors">الرئيسية</Link>
            <Link href="#how" className="hover:text-green-600 transition-colors">إزاي بيشتغل</Link>
            <Link href="#pricing" className="hover:text-green-600 transition-colors">الأسعار</Link>
            <Link href="#contact" className="hover:text-green-600 transition-colors">تواصل معانا</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#trial"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
            >
              ابدأ تجربتك معانا
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
