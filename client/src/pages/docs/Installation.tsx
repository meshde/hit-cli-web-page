import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';
import { applyCodeStyles } from '../../lib/codeStyles';

const Installation: React.FC = () => {
  useEffect(() => {
    // Apply styles to inline code elements
    applyCodeStyles();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocumentationLayout title="Installation">
      <section>
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">macOS</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> can be installed using Homebrew:
        </p>
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">brew</span> <span className="text-[#8B5CF6]">tap</span> meshde/hit
            <br />
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">brew</span> <span className="text-[#8B5CF6]">install</span> hit
          </code>
        </Terminal>

        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Linux</h3>
        <p className="text-gray-300 leading-relaxed">
          Support coming soon!
        </p>

        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Windows</h3>
        <p className="text-gray-300 leading-relaxed">
          Support coming soon!
        </p>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
            After installation, you can verify that hit CLI is properly installed by running <code>hit --version</code> in your terminal.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Installation;