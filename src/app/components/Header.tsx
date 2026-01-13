import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#approach', label: 'Abordagem' },
    { href: '#blog', label: 'Conteúdos' },
    { href: '#contact', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/98 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={handleLinkClick}
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#5b8fb9] transition-transform group-hover:scale-110" />
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                Dr. Angelo Queiroz
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-[#5b8fb9] transition-colors relative after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#5b8fb9] after:transition-all hover:after:w-5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-[#5b8fb9] text-white rounded-full font-medium text-sm hover:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95 touch-scale"
            >
              Agendar Consulta
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#5b8fb9] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-[#5b8fb9] hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#5b8fb9] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-gray-100">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full px-6 py-3 bg-[#5b8fb9] text-white text-center rounded-full font-medium hover:bg-gray-900 transition-colors"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
