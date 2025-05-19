import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Github, Menu, X } from 'lucide-react';
import { headerSection } from '../content';
import logoImage from '../assets/hit-logo-transparent.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

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
  
  // Check if we're on the documentation page
  const isDocPage = location.includes('/docs');
  
  // Handle navigation for anchor links
  const handleAnchorNavigation = (targetId: string) => {
    setIsMenuOpen(false);
    
    // If on docs page, first navigate to homepage
    if (isDocPage) {
      setLocation('/');
      
      // Delay scrolling to let the navigation complete
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // On homepage, just scroll to target
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`fixed w-full ${isScrolled ? 'bg-[#111827]/90' : 'bg-[#111827]/70'} backdrop-blur-md border-b border-gray-800 z-50 transition-colors duration-200`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Hit CLI Logo" 
                className="h-8 mr-2"
              />
              <span className="text-2xl font-bold text-[#14B8A6]">hit</span>
              <span className="ml-1 text-[#F9FAFB] animate-[cursor_1s_step-start_infinite] hidden sm:inline">_</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {headerSection.navLinks.map((link, index) => (
                <li key={index}>
                  {link.link.startsWith('#') ? (
                    <button
                      className="text-sm text-gray-300 hover:text-[#14B8A6] transition cursor-pointer"
                      onClick={() => handleAnchorNavigation(link.link.substring(1))}
                    >
                      {link.text}
                    </button>
                  ) : (
                    <Link 
                      href={link.link} 
                      className="text-sm text-gray-300 hover:text-[#14B8A6] transition"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a 
                  href={headerSection.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm text-gray-300 hover:text-[#14B8A6] transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-20">
            {isMenuOpen ? (
              <X 
                className="h-6 w-6 text-gray-300 hover:text-[#14B8A6] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <Menu 
                className="h-6 w-6 text-gray-300 hover:text-[#14B8A6] cursor-pointer"
                id="menu-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden absolute top-16 left-0 right-0 bg-[#111827]/95 backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg border-t border-gray-800 z-10`}
        id="mobile-menu"
      >
        <div className="px-4 py-3 space-y-2 sm:px-6">
          {headerSection.navLinks.map((link, index) => (
            link.link.startsWith('#') ? (
              <button
                key={index}
                className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#1E293B] hover:text-[#14B8A6] transition"
                onClick={() => handleAnchorNavigation(link.link.substring(1))}
              >
                {link.text}
              </button>
            ) : (
              <Link
                key={index}
                href={link.link}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#1E293B] hover:text-[#14B8A6] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            )
          ))}
          <a
            href={headerSection.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#1E293B] hover:text-[#14B8A6] transition"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
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