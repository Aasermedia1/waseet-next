// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ccc',
      textAlign: 'center'
    }}>
      <Link href="/" style={{ margin: '0 1rem' }}>الرئيسية</Link>
      <Link href="#how-it-works" style={{ margin: '0 1rem' }}>كيف يعمل؟</Link>
      <Link href="#pricing" style={{ margin: '0 1rem' }}>الأسعار</Link>
    </nav>
  );
}
