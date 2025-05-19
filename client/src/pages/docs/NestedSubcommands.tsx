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

const NestedSubcommands: React.FC = () => {
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
    <DocumentationLayout title="Nested Sub-Commands">
      <section>
        <p className="text-gray-300 leading-relaxed mb-4">
          Many APIs are organized in a hierarchical structure. For example, you might have endpoints for users, posts, comments, etc. <code>hit</code> allows you to organize your commands in a similar way using nested sub-commands.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Here's an example of how you might organize a simple blog API:
        </p>
        
        <CodeBlock language="json" code={
"{\n" +
"  \"commands\": {\n" +
"    \"users\": {\n" +
"      \"list\": {\n" +
"        \"url\": \"https://your.api.com/users\",\n" +
"        \"method\": \"GET\"\n" +
"      },\n" +
"      \"get\": {\n" +
"        \"url\": \"https://your.api.com/users/:userId\",\n" +
"        \"method\": \"GET\"\n" +
"      },\n" +
"      \"posts\": {\n" +
"        \"list\": {\n" +
"          \"url\": \"https://your.api.com/users/:userId/posts\",\n" +
"          \"method\": \"GET\"\n" +
"        },\n" +
"        \"get\": {\n" +
"          \"url\": \"https://your.api.com/users/:userId/posts/:postId\",\n" +
"          \"method\": \"GET\"\n" +
"        }\n" +
"      }\n" +
"    },\n" +
"    \"posts\": {\n" +
"      \"list\": {\n" +
"        \"url\": \"https://your.api.com/posts\",\n" +
"        \"method\": \"GET\"\n" +
"      },\n" +
"      \"get\": {\n" +
"        \"url\": \"https://your.api.com/posts/:postId\",\n" +
"        \"method\": \"GET\"\n" +
"      }\n" +
"    }\n" +
"  }\n" +
"}"} />

        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          With this configuration, you can run commands like:
        </p>
        
        <Terminal>
          <p># List all users</p>
          <p>hit run users list</p>
          <p></p>
          <p># Get a specific user</p>
          <p>hit run users get --user-id 123</p>
          <p></p>
          <p># List all posts for a user</p>
          <p>hit run users posts list --user-id 123</p>
          <p></p>
          <p># Get a specific post from a user</p>
          <p>hit run users posts get --user-id 123 --post-id 456</p>
          <p></p>
          <p># List all posts</p>
          <p>hit run posts list</p>
          <p></p>
          <p># Get a specific post</p>
          <p>hit run posts get --post-id 456</p>
        </Terminal>
        
        <p className="text-gray-300 leading-relaxed mt-6 mb-4">
          This hierarchical structure helps organize your API commands in a way that matches the logical structure of your API, making it more intuitive for users.
        </p>
        
        <h3 className="text-2xl font-bold text-[#F9FAFB] mt-8 mb-4">Benefits of Nested Commands</h3>
        
        <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-2">
          <li>Better organization of API endpoints</li>
          <li>More intuitive command structure</li>
          <li>Reduced repetition in URL paths</li>
          <li>Easy to extend with new sub-commands</li>
        </ul>
        
        <div className="p-4 bg-[#1E293B] rounded-md mt-8 mb-6">
          <p className="text-gray-300 font-medium">
            <span className="text-[#14B8A6] font-bold mr-2">Pro Tip:</span> 
            You can nest commands as deeply as needed to match your API's structure. There's no limit to the nesting depth.
          </p>
        </div>
      </section>
    </DocumentationLayout>
  );
};

export default NestedSubcommands;