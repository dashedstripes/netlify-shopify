import React from 'react';

function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/logo.png" // Replace with the actual path to your logo
            alt="Logo"
            className="w-20 h-20"
          />
        </div>

        {/* Navigation Links */}
        <nav className="text-lg">
          <ul className="flex space-x-4">
            <li>
              <a href="/tshirts" className="hover:text-blue-300">
                T-Shirts
              </a>
            </li>
            <li>
              <a href="/bags" className="hover:text-blue-300">
                Bags
              </a>
            </li>
            <li>
              <a href="/accessories" className="hover:text-blue-300">
                Accessories
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
