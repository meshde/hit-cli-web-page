import React, { useEffect } from 'react';
import { Link } from 'wouter';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';
import CodeBlock from '../../components/CodeBlock';

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

const Usage: React.FC = () => {
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
    <DocumentationLayout title="Basic Usage">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> works based on the config present in the current working directory. Specifically, the <code>.hit/config.json</code> file present in the current working directory. The contents of the config define what commands are available to run.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          For example, if the config looks something like:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Then this API call can be made like so:
        </p>

        <Terminal>
          <p>hit run list-users</p>
        </Terminal>

        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
            The <code>.hit/</code> directory is meant to be added to git and can be shared by developers in a team.
          </p>
        </div>
        
        <p className="text-gray-300 leading-relaxed mt-8">
          The following pages detail all the advanced features of the hit CLI that make it a powerful tool for API operations:
        </p>
        
        <ul className="pl-6 text-gray-300 leading-relaxed mt-4 space-y-4">
          <li className="group">
            <Link href="/docs/route-params" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Route Parameters
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For handling variable parts of API endpoints</p>
          </li>
          <li className="group">
            <Link href="/docs/environment-variables" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Environment Variables
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For managing different API environments</p>
          </li>
          <li className="group">
            <Link href="/docs/ephemeral-environment-variables" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Ephemeral Environment Variables
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For handling secrets</p>
          </li>
          <li className="group">
            <Link href="/docs/request-headers" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Request Headers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For customizing request headers</p>
          </li>
          <li className="group">
            <Link href="/docs/nested-subcommands" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Nested Sub-Commands
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For organizing complex API structures</p>
          </li>
          <li className="group">
            <Link href="/docs/inspecting-response" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Inspecting the Response
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For debugging and analyzing API responses</p>
          </li>
          <li className="group">
            <Link href="/docs/postscripts" className="inline-flex items-center text-[#14B8A6] hover:text-[#6EE7B7] font-medium transition-colors">
              Postscripts
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-1">For automating actions after API calls</p>
          </li>
        </ul>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Tip:</span> 
            Click on any feature above to view detailed documentation and examples.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Usage;