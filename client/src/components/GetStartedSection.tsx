import React from 'react';
import { getStartedSection } from '../content';

const GetStartedSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-[#14B8A6]/20 to-[#8B5CF6]/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            {getStartedSection.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#14B8A6]">{getStartedSection.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {getStartedSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={getStartedSection.primaryButton.link} 
              className="px-8 py-3 bg-[#14B8A6] text-gray-900 font-medium rounded-md hover:bg-[#14B8A6]/90 transition text-lg"
            >
              {getStartedSection.primaryButton.text}
            </a>
            <a 
              href={getStartedSection.secondaryButton.link} 
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-transparent border border-[#14B8A6] text-[#14B8A6] font-medium rounded-md hover:bg-[#14B8A6]/10 transition text-lg"
            >
              {getStartedSection.secondaryButton.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
