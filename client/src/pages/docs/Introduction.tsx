import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';

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

const Introduction: React.FC = () => {
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
    <DocumentationLayout title="Hit CLI Documentation">
      <p className="text-xl text-gray-300 text-center mb-12">
        Everything you need to know to use the Hit CLI effectively
      </p>
      
      <section>
        <h2 className="text-3xl font-bold text-[#F9FAFB] mt-8 mb-6">Introduction</h2>
        <p className="text-gray-300 leading-relaxed">
          <code>hit</code> is a productivity-focused command-line API client that converts individual API endpoints into command-line commands. It enables fast-moving engineering teams to easily share and standardize API interactions.
        </p>
        
        <p className="text-gray-300 leading-relaxed mt-6">
          This documentation provides a comprehensive guide to installing and using the hit CLI tool. It covers everything from basic setup to advanced features like environment variables, request headers, and postscripts.
        </p>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Key Benefits:</span> 
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Transforms REST API endpoints into easy-to-use command-line commands</li>
              <li>Allows sharing API configuration through version control</li>
              <li>Supports multiple environments (production, staging, development)</li>
              <li>Handles authentication and headers consistently</li>
              <li>Provides postscript processing for automation</li>
            </ul>
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Introduction;