import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import { applyCodeStyles } from '../../lib/codeStyles';

const Postscripts: React.FC = () => {
  useEffect(() => {
    // Apply styles to inline code elements
    applyCodeStyles();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocumentationLayout title="Postscripts">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          Postscripts are a powerful feature of <code>hit</code> that allow you to run custom code after an API call completes. This can be used for a variety of purposes, such as:
        </p>
        
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2 mb-6">
          <li>Transforming the response data</li>
          <li>Extracting specific information</li>
          <li>Validating response values</li>
          <li>Performing additional actions based on the response</li>
          <li>Formatting output for better readability</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Basic Postscript Usage</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          You can add a postscript to a command by including a <code>postscript</code> property in your command configuration:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"      \"url\": \"https://your.api.com/users\",\n" +
"      \"method\": \"GET\",\n" +
"      \"postscript\": \"function(response) { return response.users.map(user => user.name); }\"\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          With this postscript, running <code>hit run list-users</code> would return just the user names from the response, instead of the full user objects:
        </p>
        
        <Terminal>
          <code className="text-sm sm:text-base">
            <span className="text-[#6EE7B7]">$</span> <span className="text-[#14B8A6]">hit</span> <span className="text-[#8B5CF6]">run</span> list-users
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
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Advanced Postscript Examples</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Postscripts can be as simple or as complex as needed. Here are some examples of more advanced usage:
        </p>
        
        <h4 className="text-xl font-semibold text-[#F9FAFB] mt-6 mb-3">Formatting a table with response data:</h4>
        
        <CodeBlock language="json" code={
"\"postscript\": \"function(response) {\n" +
"  const users = response.users;\n" +
"  let result = 'ID\\tName\\t\\tEmail\\n';\n" +
"  result += '----------------------------------------------------\\n';\n" +
"  for (const user of users) {\n" +
"    result += `${user.id}\\t${user.name}\\t${user.email}\\n`;\n" +
"  }\n" +
"  return result;\n" +
"}\""} />

        <h4 className="text-xl font-semibold text-[#F9FAFB] mt-6 mb-3">Creating a condensed summary of a complex response:</h4>
        
        <CodeBlock language="json" code={
"\"postscript\": \"function(response) {\n" +
"  return {\n" +
"    totalUsers: response.users.length,\n" +
"    activeUsers: response.users.filter(u => u.status === 'active').length,\n" +
"    adminUsers: response.users.filter(u => u.role === 'admin').length\n" +
"  };\n" +
"}\""} />

        <h4 className="text-xl font-semibold text-[#F9FAFB] mt-6 mb-3">Extracting and processing specific information:</h4>
        
        <CodeBlock language="json" code={
"\"postscript\": \"function(response) {\n" +
"  // Extract all email domains\n" +
"  const emails = response.users.map(user => user.email);\n" +
"  const domains = emails.map(email => email.split('@')[1]);\n" +
"  \n" +
"  // Count occurrences of each domain\n" +
"  const domainCounts = {};\n" +
"  for (const domain of domains) {\n" +
"    domainCounts[domain] = (domainCounts[domain] || 0) + 1;\n" +
"  }\n" +
"  \n" +
"  return domainCounts;\n" +
"}\""} />

        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Note:</span> 
            Postscripts have access to the full response object, including headers and status code. The postscript function receives the following parameters:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><code>response.body</code>: The parsed response body (for JSON responses) or the raw body as a string</li>
              <li><code>response.headers</code>: An object containing the response headers</li>
              <li><code>response.status</code>: The HTTP status code</li>
              <li><code>response.statusText</code>: The HTTP status text</li>
            </ul>
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default Postscripts;