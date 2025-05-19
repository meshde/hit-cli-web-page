import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';
import CodeBlock from '../../components/CodeBlock';
import { applyCodeStyles } from '../../lib/codeStyles';

const InspectingResponse: React.FC = () => {
  useEffect(() => {
    // Apply styles to inline code elements
    applyCodeStyles();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const jsonExample = `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}`;

  const verboseExample = `Request:
  Method: GET
  URL: https://your.api.com/users
  Headers:
    Content-Type: application/json
    Accept: application/json

Response:
  Status: 200 OK
  Headers:
    Content-Type: application/json
    Content-Length: 157
    Date: Sat, 19 May 2025 12:34:56 GMT

Body:
${jsonExample}`;

  return (
    <DocumentationLayout title="Inspecting the Response">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          When working with APIs, it's often necessary to inspect the response to understand what data is being returned or to debug issues. <code>hit</code> provides several ways to inspect API responses.
        </p>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Basic Response Output</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          By default, <code>hit</code> outputs the response body to the console. For JSON responses, it formats the output for readability.
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
            <br /><br />
            {jsonExample.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                <span className="text-[#9CA3AF]">{line}</span><br />
              </React.Fragment>
            ))}
          </code>
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Verbose Mode</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          To see more details about the request and response, including headers and status code, you can use the <code>--verbose</code> flag:
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users <span className="text-[#F59E0B]">--verbose</span>
            <br /><br />
            {verboseExample.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                <span className="text-[#9CA3AF]">{line}</span><br />
              </React.Fragment>
            ))}
          </code>
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">JSON Path Filtering</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          For large JSON responses, you can filter the output using JSON path expressions. This is particularly useful when you only need a specific part of the response:
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users <span className="text-[#F59E0B]">--json-path</span> "$.users[0].name"
            <br /><br />
            <span className="text-[#9CA3AF]">"John Doe"</span>
          </code>
        </Terminal>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          You can also extract multiple values:
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users <span className="text-[#F59E0B]">--json-path</span> "$.users[*].name"
            <br /><br />
            <span className="text-[#9CA3AF]">[</span>
            <br />
            <span className="text-[#9CA3AF] ml-4">"John Doe",</span>
            <br />
            <span className="text-[#9CA3AF] ml-4">"Jane Smith"</span>
            <br />
            <span className="text-[#9CA3AF]">]</span>
          </code>
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Saving the Response to a File</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          You can save the response to a file using the <code>--output</code> option:
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users <span className="text-[#F59E0B]">--output</span> users.json
            <br /><br />
            <span className="text-[#9CA3AF]">Response saved to users.json</span>
          </code>
        </Terminal>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Tip:</span> 
            You can combine these options. For example, you can filter the response with JSON path and save the filtered output to a file:
            <code className="block mt-2">hit run list-users --json-path "$.users[*].email" --output emails.json</code>
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default InspectingResponse;