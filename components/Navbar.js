import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Image src="/logo.svg" alt="Waseet Logo" width={50} height={50} />
          <div className="leading-tight text-right">
            <div className="font-bold text-xl text-gray-800">وسيط</div>
            <div className="text-sm text-gray-500">Waseet</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse font-bold text-gray-700">
          <Link href="#home"><a className="hover:text-green-600 transition">الرئيسية</a></Link>
          <Link href="#how"><a className="hover:text-green-600 transition">إزاي بيشتغل</a></Link>
          <Link href="#pricing"><a className="hover:text-green-600 transition">الأسعار</a></Link>
          <Link href="#contact"><a className="hover:text-green-600 transition">تواصل معانا</a></Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#trial"
            className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            ابدأ تجربتك معانا
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-gray-800 text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 text-right font-bold">
          <Link href="#home"><a className="block px-4 py-3 hover:text-green-600">الرئيسية</a></Link>
          <Link href="#how"><a className="block px-4 py-3 hover:text-green-600">إزاي بيشتغل</a></Link>
          <Link href="#pricing"><a className="block px-4 py-3 hover:text-green-600">الأسعار</a></Link>
          <Link href="#contact"><a className="block px-4 py-3 hover:text-green-600">تواصل معانا</a></Link>
          <a
            href="#trial"
            className="block bg-green-600 text-white text-center py-3 hover:bg-green-700"
          >
            ابدأ تجربتك معانا
          </a>
        </div>
      )}
    </nav>
  );
}
