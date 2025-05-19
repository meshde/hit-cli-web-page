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

const EphemeralEnvironmentVariables: React.FC = () => {
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
    <DocumentationLayout title="Ephemeral Environment Variables">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          Sometimes you need to use environment variables that you don't want to commit to your repository, such as API keys or other sensitive information. <code>hit</code> allows you to specify these variables when running commands.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          For example, if your API requires an API key for authentication, you can add it to your config like this:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"list-users\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\",\n" +
"        \"headers\": {\n" +
"            \"Authorization\": \"Bearer ${API_KEY}\"\n" +
"        }\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          However, you wouldn't want to add your API key to the environment configuration in the config file, since that would be committed to your repository. Instead, you can provide it when running the command:
        </p>
        
        <Terminal>
          <p>hit run list-users --api-key YOUR_API_KEY</p>
        </Terminal>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Alternatively, you can add this to your <code>.hit/env</code> file (which should be excluded from your repository via <code>.gitignore</code>):
        </p>
        
        <CodeBlock language="text" code={
"API_KEY=YOUR_API_KEY"} />
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          Variables defined in the <code>.hit/env</code> file will be loaded automatically when you run commands, and they won't be committed to your repository.
        </p>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Security Tip:</span> 
            Never store sensitive API keys or tokens in your config files. Always use ephemeral environment variables for sensitive information.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Precedence of Environment Variables</h3>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          <code>hit</code> resolves environment variables in the following order of precedence:
        </p>
        
        <ol className="list-decimal pl-6 text-gray-300 leading-relaxed space-y-2">
          <li>Variables passed directly in the command line (<code>--api-key YOUR_API_KEY</code>)</li>
          <li>Variables defined in the <code>.hit/env</code> file</li>
          <li>Variables defined in the environment config in <code>.hit/config.json</code></li>
          <li>Variables from the system environment</li>
        </ol>
        
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          This allows you to override variables defined in config files with ephemeral variables when needed.
        </p>
      </section>
    </DocumentationLayout>
  );
};

export default EphemeralEnvironmentVariables;