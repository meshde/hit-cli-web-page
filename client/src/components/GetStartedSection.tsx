import React from 'react';

const GetStartedSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-[#14B8A6]/20 to-[#8B5CF6]/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F9FAFB]">
            Ready to <span className="text-[#14B8A6]">supercharge</span> your workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already transformed their productivity with hit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#installation" 
              className="px-8 py-3 bg-[#14B8A6] text-gray-900 font-medium rounded-md hover:bg-[#14B8A6]/90 transition text-lg"
            >
              Install Now
            </a>
            <a 
              href="https://docs.hit-cli.dev" 
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-transparent border border-[#14B8A6] text-[#14B8A6] font-medium rounded-md hover:bg-[#14B8A6]/10 transition text-lg"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
