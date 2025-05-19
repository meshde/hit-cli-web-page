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

const InspectingResponse: React.FC = () => {
  useEffect(() => {
    // Apply styles to all code elements
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach(el => {
      Object.assign(el.style, codeStyle);
    });
    
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
          <p>hit run list-users</p>
          <p></p>
          {jsonExample.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Verbose Mode</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          To see more details about the request and response, including headers and status code, you can use the <code>--verbose</code> flag:
        </p>
        
        <Terminal>
          <p>hit run list-users --verbose</p>
          <p></p>
          {verboseExample.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">JSON Path Filtering</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          For large JSON responses, you can filter the output using JSON path expressions. This is particularly useful when you only need a specific part of the response:
        </p>
        
        <Terminal>
          <p>hit run list-users --json-path "$.users[0].name"</p>
          <p></p>
          <p>"John Doe"</p>
        </Terminal>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          You can also extract multiple values:
        </p>
        
        <Terminal>
          <p>hit run list-users --json-path "$.users[*].name"</p>
          <p></p>
          <p>[</p>
          <p>  "John Doe",</p>
          <p>  "Jane Smith"</p>
          <p>]</p>
        </Terminal>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Saving the Response to a File</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          You can save the response to a file using the <code>--output</code> option:
        </p>
        
        <Terminal>
          <p>hit run list-users --output users.json</p>
          <p></p>
          <p>Response saved to users.json</p>
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