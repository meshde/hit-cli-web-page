import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import CodeBlock from '../../components/CodeBlock';

const RequestHeaders: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocumentationLayout title="Request Headers">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          Many APIs require specific headers for authentication, content type specification, or other purposes. <code>hit</code> allows you to define headers for your API requests.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Headers can be added to your command configuration like this:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\",\n" +
"        \"headers\": {\n" +
"            \"Content-Type\": \"application/json\",\n" +
"            \"Accept\": \"application/json\",\n" +
"            \"Authorization\": \"Bearer YOUR_TOKEN\"\n" +
"        }\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          You can also use environment variables in headers, which is particularly useful for authentication tokens:
        </p>
        
        <CodeBlock language="json" code={
"\"headers\": {\n" +
"    \"Authorization\": \"Bearer ${AUTH_TOKEN}\"\n" +
"}"} />

        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Setting Default Headers</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          If you find yourself using the same headers across multiple commands, you can set default headers at the root level of your config:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"headers\": {\n" +
"    \"Content-Type\": \"application/json\",\n" +
"    \"Accept\": \"application/json\"\n" +
"  },\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\",\n" +
"        \"headers\": {\n" +
"            \"Authorization\": \"Bearer ${AUTH_TOKEN}\"\n" +
"        }\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          In this example, all commands will include the <code>Content-Type</code> and <code>Accept</code> headers, while the <code>list-users</code> command will additionally include the <code>Authorization</code> header.
        </p>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
            Command-specific headers will override default headers with the same name. This allows you to customize headers for specific commands when needed.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default RequestHeaders;