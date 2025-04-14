import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Github, Menu, X } from 'lucide-react';
import { headerSection } from '../content';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position to add background opacity when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close the mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);
  
  // Close the mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full ${isScrolled ? 'bg-[#111827]/90' : 'bg-[#111827]/70'} backdrop-blur-md border-b border-gray-800 z-50 transition-colors duration-200`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#14B8A6]">hit</span>
              <span className="ml-1 text-[#F9FAFB] animate-[cursor_1s_step-start_infinite] hidden sm:inline">_</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {headerSection.navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-sm text-gray-300 hover:text-[#14B8A6] transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={headerSection.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm text-gray-300 hover:text-[#14B8A6] transition"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#14B8A6] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden absolute top-16 left-0 right-0 bg-[#111827]/95 backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg border-t border-gray-800 z-10`}
        id="mobile-menu"
      >
        <div className="px-4 py-3 space-y-2 sm:px-6">
          {headerSection.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#1E293B] hover:text-[#14B8A6] transition"
              onClick={handleLinkClick}
            >
              {link.text}
            </a>
          ))}
          <a
            href={headerSection.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#1E293B] hover:text-[#14B8A6] transition"
            onClick={handleLinkClick}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
