import React, { useEffect } from 'react';
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

const RouteParams: React.FC = () => {
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
    <DocumentationLayout title="Route Parameters">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          API endpoint routes often include variables. For example, an endpoint to retrieve a single user would include the id of the user to be retrieved in the route. <code>hit</code> lets you define these variables in your configuration.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Variables can be denoted by prefixing them with colon <code>:</code>. If the URL in the config has <code>:userId</code>, then <code>userId</code> would be a variable.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          For example, the route to retrieve a user can be added to our previous config like so:
        </p>

        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\"\n" +
"    },\n" +
"    \"get-user\": {\n" +
"        \"url\": \"https://your.api.com/users/:userId\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          And this can be invoked as follows to retrieve user with id <code>47</code>:
        </p>

        <Terminal>
          <p>hit run get-user --user-id 47</p>
        </Terminal>

        <p className="text-gray-300 leading-relaxed mt-6 mb-4">
          Something similar can be done if the user id were to be passed in the query params instead of route params:
        </p>

        <CodeBlock language="json" code={
"\"get-user\": {\n" +
"    \"url\": \"https://your.api.com/users?id=:userId\",\n" +
"    \"method\": \"GET\"\n" +
"}"} />

        <Terminal>
          <p>hit run get-user --user-id 47</p>
        </Terminal>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
            Route parameters are automatically converted to command-line options by transforming camelCase or PascalCase to kebab-case. For example, <code>:userId</code> becomes <code>--user-id</code>.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default RouteParams;