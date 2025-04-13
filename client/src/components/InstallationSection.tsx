import React from 'react';
import { Check } from 'lucide-react';
import Terminal from './Terminal';

const InstallationOption: React.FC<{
  title: string;
  command: string;
  description: string;
}> = ({ title, command, description }) => {
  return (
    <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Check className="w-5 h-5 mr-2 text-[#14B8A6]" />
        {title}
      </h3>
      <Terminal className="mb-4">
        <code className="text-sm sm:text-base">
          <span className="text-[#6EE7B7]">$</span> {command}
        </code>
      </Terminal>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
};

const InstallationSection: React.FC = () => {
  return (
    <section id="installation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            Quick <span className="text-[#14B8A6]">Installation</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get up and running in seconds with these simple installation methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <InstallationOption 
            title="Using npm"
            command={<><span className="text-[#14B8A6]">npm</span> install -g hit-cli</>}
            description="This is the recommended method for most users. Requires Node.js version 14 or higher."
          />

          <InstallationOption 
            title="Using brew"
            command={<><span className="text-[#14B8A6]">brew</span> install hit-cli</>}
            description="Preferred installation method for macOS users with Homebrew package manager."
          />
        </div>

        <div className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800 mb-10">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Check className="w-5 h-5 mr-2 text-[#14B8A6]" />
            Manual Installation
          </h3>
          <Terminal className="mb-4">
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">curl</span> -fsSL https://get.hit-cli.dev | sh
            </code>
          </Terminal>
          <p className="text-gray-400 text-sm">
            This script automatically detects your OS and downloads the appropriate binary. Verify the script before running it.
          </p>
        </div>

        <div className="text-center">
          <p className="text-base text-gray-400 mb-6">
            After installation, verify that hit is installed correctly:
          </p>
          <Terminal className="max-w-md mx-auto">
            <code className="text-sm sm:text-base">
              <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> --version
              <br />
              <span className="text-[#9CA3AF]">hit v1.2.0</span>
            </code>
          </Terminal>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
