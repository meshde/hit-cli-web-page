import React from 'react';
import { Link, useLocation } from 'wouter';
import { Github } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface DocumentationLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ children, title }) => {
  const [location] = useLocation();
  
  // Check which page is active
  const isActivePage = (path: string) => {
    return location === path;
  };
  
  // Get next and previous pages for navigation
  const pages = [
    { path: '/docs', title: 'Introduction' },
    { path: '/docs/installation', title: 'Installation' },
    { path: '/docs/getting-started', title: 'Getting Started' },
    { path: '/docs/usage', title: 'Basic Usage' },
    { path: '/docs/route-params', title: 'Route Parameters' },
    { path: '/docs/environment-variables', title: 'Environment Variables' },
    { path: '/docs/ephemeral-environment-variables', title: 'Ephemeral Environment Variables' },
    { path: '/docs/request-headers', title: 'Request Headers' },
    { path: '/docs/nested-subcommands', title: 'Nested Sub-Commands' },
    { path: '/docs/inspecting-response', title: 'Inspecting the Response' },
    { path: '/docs/postscripts', title: 'Postscripts' }
  ];
  
  const currentPageIndex = pages.findIndex(page => page.path === location);
  const prevPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#111827] text-[#F9FAFB]">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 bg-[#1E293B] rounded-lg p-5 shadow-lg">
              <h3 className="text-xl font-bold text-[#14B8A6] mb-4">Documentation</h3>
              <nav className="space-y-1">
                <Link 
                  href="/docs" 
                  className={`block py-2 px-3 ${isActivePage('/docs') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-300'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                  Introduction
                </Link>
                <Link 
                  href="/docs/installation" 
                  className={`block py-2 px-3 ${isActivePage('/docs/installation') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-300'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                  Installation
                </Link>
                <Link 
                  href="/docs/getting-started" 
                  className={`block py-2 px-3 ${isActivePage('/docs/getting-started') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-300'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                  Getting Started
                </Link>
                <Link 
                  href="/docs/usage" 
                  className={`block py-2 px-3 font-medium ${isActivePage('/docs/usage') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-300'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                  Usage
                </Link>
                
                <div className="pl-4 space-y-1 mt-1 border-l border-[#374151]">
                  <Link 
                    href="/docs/route-params" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/route-params') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Route Parameters
                  </Link>
                  <Link 
                    href="/docs/environment-variables" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/environment-variables') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Environment Variables
                  </Link>
                  <Link 
                    href="/docs/ephemeral-environment-variables" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/ephemeral-environment-variables') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Ephemeral Environment Variables
                  </Link>
                  <Link 
                    href="/docs/request-headers" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/request-headers') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Request Headers
                  </Link>
                  <Link 
                    href="/docs/nested-subcommands" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/nested-subcommands') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Nested Sub-Commands
                  </Link>
                  <Link 
                    href="/docs/inspecting-response" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/inspecting-response') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Inspecting the Response
                  </Link>
                  <Link 
                    href="/docs/postscripts" 
                    className={`block py-1.5 px-3 text-sm ${isActivePage('/docs/postscripts') ? 'text-[#14B8A6] bg-[#243147]' : 'text-gray-400'} hover:bg-[#2D3748] hover:text-[#14B8A6] rounded transition-colors`}>
                    Postscripts
                  </Link>
                </div>
              </nav>
              <div className="mt-6 pt-4 border-t border-[#374151]">
                <a 
                  href="https://github.com/meshde/hit-cli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center mb-4 px-4 py-2 bg-[#1E293B] rounded-md text-gray-300 hover:bg-[#2D3748] transition-colors"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>GitHub Repository</span>
                </a>
                <Link href="/" className="flex items-center text-[#14B8A6] hover:text-[#6EE7B7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5 prose prose-invert prose-lg max-w-3xl">
            {title && (
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#14B8A6] to-purple-500 text-transparent bg-clip-text">{title}</h1>
              </div>
            )}
            
            {children}
            
            <div className="mt-12 pt-6 border-t border-[#374151] flex justify-between items-center">
              {/* Previous page navigation */}
              <div>
                {prevPage && (
                  <Link href={prevPage.path} className="flex items-center text-[#14B8A6] hover:text-[#6EE7B7] transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Previous: {prevPage.title}</span>
                  </Link>
                )}
              </div>
              
              {/* Next page navigation */}
              <div>
                {nextPage && (
                  <Link href={nextPage.path} className="flex items-center text-[#14B8A6] hover:text-[#6EE7B7] transition-colors group">
                    <span>Next: {nextPage.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/docs" className="text-gray-400 hover:text-[#14B8A6] text-sm">
                Back to Documentation Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationLayout;