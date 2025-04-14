import React from 'react';
import Terminal from './Terminal';
import { heroSection } from '../content';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            {heroSection.title.split(' ').slice(0, -1).join(' ')} <span className="underline decoration-[#14B8A6] decoration-4 underline-offset-8">{heroSection.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {heroSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#installation" 
              className="px-8 py-3 bg-[#14B8A6] text-gray-900 font-medium rounded-md hover:bg-[#14B8A6]/90 transition"
            >
              {heroSection.primaryButton}
            </a>
            <a 
              href="#usage" 
              className="px-8 py-3 bg-transparent border border-[#14B8A6] text-[#14B8A6] font-medium rounded-md hover:bg-[#14B8A6]/10 transition"
            >
              {heroSection.secondaryButton}
            </a>
          </div>
        </div>

        {/* Terminal Demo */}
        <Terminal className="max-w-3xl mx-auto">
          {heroSection.terminalExamples.map((example, idx) => (
            <div key={idx}>
              {idx > 0 && <p className="mt-2"></p>}
              <p>
                <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                  {example.command.split(' ').slice(0, 1)}
                </span> <span className="text-[#8B5CF6]">
                  {example.command.split(' ').slice(1, 2)}
                </span> {example.command.split(' ').slice(2).join(' ')}
              </p>
              {example.output.map((line, lineIdx) => (
                <p key={lineIdx} className={`text-[#9CA3AF] ${line.startsWith('  ') ? 'ml-4' : ''}`}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </Terminal>
      </div>
    </section>
  );
};

export default HeroSection;
