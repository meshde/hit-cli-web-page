import React from 'react';
import { 
  DollarSign, 
  GitMerge, 
  Terminal as TerminalIcon, 
  Code,
  ArrowRight
} from 'lucide-react';
import Terminal from './Terminal';
import { comparisonSection } from '../content';

const ComparisonSection: React.FC = () => {
  // Icon component mapping
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#14B8A6]" />;
      case 'GitMerge': return <GitMerge className="w-6 h-6 text-[#14B8A6]" />;
      case 'Terminal': return <TerminalIcon className="w-6 h-6 text-[#14B8A6]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#14B8A6]" />;
      default: return <TerminalIcon className="w-6 h-6 text-[#14B8A6]" />;
    }
  };
  
  return (
    <section id="comparison" className="py-20 bg-[#111827] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            {comparisonSection.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {comparisonSection.subtitle}
          </p>
        </div>
        
        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {comparisonSection.advantages.map((advantage, idx) => (
            <div key={idx} className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800 flex">
              <div className="w-12 h-12 flex items-center justify-center bg-[#14B8A6]/10 rounded-md mr-4 flex-shrink-0">
                {getIcon(advantage.icon)}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Example Commands */}
        <h3 className="text-2xl font-bold mb-8 text-center">Terminal Superpowers</h3>
        <div className="space-y-8">
          {comparisonSection.examples.map((example, idx) => (
            <div key={idx} className="bg-[#1E293B]/70 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-semibold text-[#14B8A6]">{example.title}</h4>
              </div>
              <p className="text-gray-300 mb-4">{example.description}</p>
              <Terminal>
                <code className="text-sm sm:text-base">
                  <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">
                    {example.command}
                  </span>
                </code>
              </Terminal>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Simplify your API operations and boost your team's productivity with hit.
          </p>
          <a 
            href="#installation" 
            className="inline-flex items-center bg-[#14B8A6] text-black font-medium py-3 px-6 rounded-full hover:bg-[#0E9382] transition"
          >
            Try hit today <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;