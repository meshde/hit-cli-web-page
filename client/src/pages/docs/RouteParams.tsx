import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import Terminal from '../../components/Terminal';
import CodeBlock from '../../components/CodeBlock';
import { applyCodeStyles } from '../../lib/codeStyles';

const RouteParams: React.FC = () => {
  useEffect(() => {
    // Apply styles to inline code elements
    applyCodeStyles();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> get-user <span className="text-[#F59E0B]">--user-id</span> 47
          </code>
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
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> get-user <span className="text-[#F59E0B]">--user-id</span> 47
          </code>
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