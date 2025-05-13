import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';

// Create a style for all code elements
const codeStyle = `
  background-color: #1a2033;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
  color: #14B8A6;
  white-space: nowrap;
`;

const Installation: React.FC = () => {
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `code { ${codeStyle} }`;
    document.head.appendChild(styleEl);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Clean up function
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <DocumentationLayout title="Installation">
      <section>
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">macOS</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> can be installed using Homebrew:
        </p>
        <Terminal>
          <p>brew tap meshde/hit</p>
          <p>brew install hit</p>
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