import React, { useEffect } from 'react';
import DocumentationLayout from '../../components/DocumentationLayout';
import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';

const codeStyle = {
  backgroundColor: '#1a2033',
  padding: '0.2rem 0.4rem',
  borderRadius: '0.25rem',
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  color: '#14B8A6',
  whiteSpace: 'nowrap',
};

const EnvironmentVariables: React.FC = () => {
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
    <DocumentationLayout title="Environment Variables">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          It's common for APIs to have different base URLs based on the environment. For instance, the dev environment would point to a locally running server, staging would point to the staging instance, and prod would point to the deployed production instance.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> has built-in support for environment variables, which can be accessed in the config file using <code>{"${VAR_NAME}"}</code> syntax.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          For example, the config can be modified to use the <code>BASE_URL</code> environment variable like so:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"${BASE_URL}/users\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Now, when running <code>hit run list-users</code>, the <code>BASE_URL</code> will be substituted into the URL.
        </p>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          But to make this actually useful, we need to be able to swap between environments easily. <code>hit</code> supports having multiple predefined environments per project.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          For this, we need to make a couple of changes to the config:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"env\": {\n" +
"    \"dev\": {\n" +
"      \"BASE_URL\": \"http://localhost:8080\"\n" +
"    },\n" +
"    \"prod\": {\n" +
"      \"BASE_URL\": \"https://api.yourdomain.com\"\n" +
"    }\n" +
"  },\n" +
"  \"defaultEnv\": \"dev\",\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"${BASE_URL}/users\",\n" +
"        \"method\": \"GET\"\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Let's break down what we've added:
        </p>
        
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2">
          <li>We've defined two environments: <code>dev</code> and <code>prod</code>, each with their own value for <code>BASE_URL</code>.</li>
          <li>We've set <code>defaultEnv</code> to <code>dev</code>, meaning that's the environment that will be used if none is specified.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Now, to run the command in the <code>dev</code> environment:
        </p>
        
        <Terminal>
          <p>hit run list-users</p>
          <p># or explicitly</p>
          <p>hit run --env dev list-users</p>
        </Terminal>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          And to run the command in the <code>prod</code> environment:
        </p>
        
        <Terminal>
          <p>hit run --env prod list-users</p>
        </Terminal>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Tip:</span> 
            You can use environment variables in more places than just the URL. They can be used in headers, the request body, and more.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default EnvironmentVariables;