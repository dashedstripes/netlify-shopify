import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-4 py-10">
          <img
            src="/logo.png" // Replace with the actual path to your logo
            alt="Logo"
            className='w-40'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
