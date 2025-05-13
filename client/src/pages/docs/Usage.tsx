import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';
import CodeBlock from '../../components/CodeBlock';

const codeStyle = {
  backgroundColor: '#1a2033',
  padding: '0.2rem 0.4rem',
  borderRadius: '0.25rem',
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  color: '#14B8A6',
  whiteSpace: 'nowrap',
};

const Usage: React.FC = () => {
  useEffect(() => {
    // Apply styles to all code elements
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach(el => {
      Object.assign(el.style, codeStyle);
    });
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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
        
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Route Parameters - For handling variable parts of API endpoints</li>
          <li>Environment Variables - For managing different API environments</li>
          <li>Ephemeral Environment Variables - For handling secrets</li>
          <li>Request Headers - For customizing request headers</li>
          <li>Nested Sub-Commands - For organizing complex API structures</li>
          <li>Inspecting Response - For debugging and analyzing API responses</li>
          <li>Postscripts - For automating actions after API calls</li>
        </ul>
      </section>
    </DocumentationLayout>
  );
};

export default Usage;