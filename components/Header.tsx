import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Khách hàng', href: '#testimonials' },
    { label: 'Liên hệ', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gold-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-3xl font-bold text-dark-900 tracking-tighter">
              KT<span className="text-gold-600">Homes</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:0936340576"
              className="flex items-center gap-2 bg-gold-600 text-white px-5 py-2.5 rounded-sm font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>0936 340 576</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gold-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0936340576"
              className="block w-full text-center mt-4 bg-gold-600 text-white px-5 py-3 rounded-md font-bold"
            >
              Gọi ngay: 0936 340 576
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;