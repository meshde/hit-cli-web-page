import React from 'react';
import { Link } from 'wouter';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#14B8A6]">hit</span>
              <span className="ml-1 text-[#F9FAFB] animate-[cursor_1s_step-start_infinite]">_</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A productivity-focused command-line API client that converts API endpoints into simple commands.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/meshde/hit-cli-issues" className="text-gray-400 hover:text-[#14B8A6] transition" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/meshde" className="text-gray-400 hover:text-[#14B8A6] transition" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-[#14B8A6] transition">Features</a></li>
              <li><a href="#installation" className="text-gray-400 hover:text-[#14B8A6] transition">Installation</a></li>
              <li><a href="#usage" className="text-gray-400 hover:text-[#14B8A6] transition">Usage Examples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/meshde/hit-cli-issues" className="text-gray-400 hover:text-[#14B8A6] transition" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://github.com/meshde/hit-cli-issues/releases" className="text-gray-400 hover:text-[#14B8A6] transition" target="_blank" rel="noopener noreferrer">Release Notes</a></li>
              <li><a href="https://github.com/meshde/hit-cli-issues/issues" className="text-gray-400 hover:text-[#14B8A6] transition" target="_blank" rel="noopener noreferrer">Report Issues</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} hit CLI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
