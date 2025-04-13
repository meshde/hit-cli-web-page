import React from 'react';
import Terminal from './Terminal';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            Productivity at your <span className="underline decoration-[#14B8A6] decoration-4 underline-offset-8">fingertips</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            A lightning-fast CLI tool designed to streamline your development workflow with powerful shortcuts and automations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#installation" 
              className="px-8 py-3 bg-[#14B8A6] text-gray-900 font-medium rounded-md hover:bg-[#14B8A6]/90 transition"
            >
              Get Started
            </a>
            <a 
              href="#usage" 
              className="px-8 py-3 bg-transparent border border-[#14B8A6] text-[#14B8A6] font-medium rounded-md hover:bg-[#14B8A6]/10 transition"
            >
              View Examples
            </a>
          </div>
        </div>

        {/* Terminal Demo */}
        <Terminal className="max-w-3xl mx-auto">
          <p><span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">init</span> my-project</p>
          <p className="text-[#9CA3AF]">✓ Initialized new project: my-project</p>
          <p className="mt-2"><span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">tasks</span></p>
          <p className="text-[#9CA3AF]">ℹ Available tasks:</p>
          <p className="text-[#9CA3AF] ml-4">- build: Builds the project for production</p>
          <p className="text-[#9CA3AF] ml-4">- dev: Starts development server</p>
          <p className="text-[#9CA3AF] ml-4">- test: Runs test suite</p>
          <p className="mt-2"><span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> dev</p>
          <p className="text-[#9CA3AF]">➜ Starting development server...</p>
          <p className="text-[#9CA3AF]">✓ Server running at http://localhost:3000</p>
        </Terminal>
      </div>
    </section>
  );
};

export default HeroSection;
