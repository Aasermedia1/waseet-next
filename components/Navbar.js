import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full top-0 z-50 transition-shadow duration-300 ${
        isSticky ? "fixed shadow-xl bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.svg" alt="Waseet Logo" width={48} height={48} />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-gray-800">وسيط</span>
              <span className="text-sm text-gray-500 -mt-1">Waseet</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse font-bold text-gray-700 text-sm">
            <Link href="#home">
              <a className="hover:text-green-600 transition-colors duration-200">
                الرئيسية
              </a>
            </Link>
            <Link href="#how">
              <a className="hover:text-green-600 transition-colors duration-200">
                إزاي بيشتغل
              </a>
            </Link>
            <Link href="#pricing">
              <a className="hover:text-green-600 transition-colors duration-200">
                الأسعار
              </a>
            </Link>
            <Link href="#contact">
              <a className="hover:text-green-600 transition-colors duration-200">
                تواصل معانا
              </a>
            </Link>
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

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="#home">
            <a className="block py-3 px-6 text-right font-bold text-gray-700 hover:text-green-600 transition-colors duration-200">
              الرئيسية
            </a>
          </Link>
          <Link href="#how">
            <a className="block py-3 px-6 text-right font-bold text-gray-700 hover:text-green-600 transition-colors duration-200">
              إزاي بيشتغل
            </a>
          </Link>
          <Link href="#pricing">
            <a className="block py-3 px-6 text-right font-bold text-gray-700 hover:text-green-600 transition-colors duration-200">
              الأسعار
            </a>
          </Link>
          <Link href="#contact">
            <a className="block py-3 px-6 text-right font-bold text-gray-700 hover:text-green-600 transition-colors duration-200">
              تواصل معانا
            </a>
          </Link>
          <a
            href="#trial"
            className="block text-center bg-green-600 text-white px-6 py-3 font-bold hover:bg-green-700 transition-all duration-200"
          >
            ابدأ تجربتك معانا
          </a>
        </div>
      )}
    </nav>
  );
}
