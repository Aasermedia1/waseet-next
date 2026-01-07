import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-4 font-[Tajawal]">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Image src="/logo.png" alt="Waseet AI Logo" width={40} height={40} />
          <span className="font-extrabold text-2xl text-gray-900 font-[Cairo]">وسيط</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 rtl:space-x-reverse text-gray-700 font-medium text-sm">
          <li><Link href="/">الرئيسية</Link></li>
          <li><Link href="#how-it-works">إزاي بيشتغل</Link></li>
          <li><Link href="#pricing">الأسعار</Link></li>
          <li><Link href="#contact">تواصل معنا</Link></li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link href="#start">
            <a className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-bold">
              ابدأ مجاناً
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
