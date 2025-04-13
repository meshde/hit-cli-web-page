import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Github } from 'lucide-react';
import { headerSection } from '../content';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to add background opacity when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          
          <nav className="flex">
            <ul className="flex space-x-4 sm:space-x-8">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
