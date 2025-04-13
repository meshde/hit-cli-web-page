/**
 * Website Content
 * 
 * This file contains all the text content for the landing page.
 * Edit this file to change text across the website without having to modify component files.
 */

// Hero Section Content
export const heroSection = {
  title: "API commands at your fingertips",
  subtitle: "A productivity-focused command-line API client that converts API endpoints into simple commands.",
  primaryButton: "Get Started",
  secondaryButton: "View Examples",
  terminalExamples: [
    { command: "hit run list-users", 
      output: [
        "[",
        "  { \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" },",
        "  { \"id\": 2, \"name\": \"Jane Smith\", \"email\": \"jane@example.com\" }",
        "]"
      ]
    },
    { command: "hit run get-user --user-id 1", 
      output: ["{ \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" }"]
    },
    { command: "hit env use dev", 
      output: ["✓ Switched to dev environment"]
    }
  ]
};

// Features Section Content
export const featuresSection = {
  title: "Why developers love hit",
  subtitle: "Designed by developers for developers, hit eliminates repetitive tasks and streamlines your workflow.",
  features: [
    {
      icon: 'Zap',
      title: 'API Commands',
      description: 'Convert API endpoints into simple command-line commands for quick access and execution.'
    },
    {
      icon: 'GitBranch',
      title: 'Environment Variables',
      description: 'Easily switch between different environments (production, development, staging) with a single command.'
    },
    {
      icon: 'Terminal',
      title: 'Route Parameters',
      description: 'Use route params and query params directly from the command line without modifying config files.'
    },
    {
      icon: 'Share2',
      title: 'Team Sharing',
      description: 'Share API configurations with your team via Git, ensuring everyone has the same setup.'
    },
    {
      icon: 'Lock',
      title: 'Authentication Support',
      description: 'Handle authentication tokens and credentials securely across different environments.'
    },
    {
      icon: 'History',
      title: 'Response Inspection',
      description: 'Inspect full API responses including headers and status codes with the "hit last view" command.'
    }
  ]
};

// Installation Section Content
export const installationSection = {
  title: "Quick Installation",
  subtitle: "Get up and running in seconds with these simple installation methods.",
  macOsOption: {
    title: "macOS with Homebrew",
    commands: [
      "brew tap meshde/hit",
      "brew install hit"
    ],
    description: "The recommended installation method for macOS users with the Homebrew package manager."
  },
  comingSoon: {
    title: "Coming Soon",
    linux: {
      title: "Linux Support",
      description: "Linux installation support is coming soon. We're working on providing binaries and package manager integration."
    },
    windows: {
      title: "Windows Support",
      description: "Windows installation support is coming soon. We're working on providing executables and package manager integration."
    }
  },
  verifyInstallation: {
    text: "After installation, verify that hit is installed correctly:",
    command: "hit --version",
    output: "hit v1.0.0"
  }
};

// Usage Examples Section Content
export const usageExamplesSection = {
  title: "Usage Examples",
  subtitle: "See how hit makes your API workflows simpler with these common use cases.",
  tabs: {
    basic: {
      title: "Basic Commands",
      description: "Basic API Commands",
      configExample: `{
  "commands": {
    "list-users": {
      "url": "https://your.api.com/users",
      "method": "GET"
    }
  }
}`,
      commandExample: "hit run list-users",
      output: [
        "[",
        "  { \"id\": 1, \"name\": \"John Doe\", \"email\": \"john@example.com\" },",
        "  { \"id\": 2, \"name\": \"Jane Smith\", \"email\": \"jane@example.com\" }",
        "]"
      ]
    },
    params: {
      title: "Route Parameters",
      description: "Route Parameters",
      configExample: `{
  "commands": {
    "get-user": {
      "url": "https://your.api.com/users/:userId",
      "method": "GET"
    }
  }
}`,
      commandExample: "hit run get-user --user-id 47",
      output: ["{ \"id\": 47, \"name\": \"Alice Johnson\", \"email\": \"alice@example.com\" }"]
    },
    envs: {
      title: "Environments",
      description: "Environment Variables",
      configExample: `{
  "envs": {
    "prod": {
      "API_URL": "https://prod.api.com"
    },
    "dev": {
      "API_URL": "https://dev.api.com"
    }
  },
  "commands": {
    "list-users": {
      "url": "{{API_URL}}/users",
      "method": "GET"
    }
  }
}`,
      commandExample: "hit env use dev\n\nhit run list-users",
      output: ["✓ Switched to dev environment", "// This now calls https://dev.api.com/users"]
    },
    auth: {
      title: "Authentication",
      description: "Authentication Support",
      configExample: `{
  "commands": {
    "get-profile": {
      "url": "https://your.api.com/profile",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer {{API_TOKEN}}"
      }
    }
  }
}`,
      commandExample: "hit env set API_TOKEN \"my-secret-token\"\n\nhit run get-profile",
      output: ["✓ Set API_TOKEN in current environment", "{ \"id\": 123, \"name\": \"John Doe\", \"email\": \"john@example.com\", \"role\": \"admin\" }"]
    }
  },
  responsesSection: {
    title: "Inspecting Responses",
    description: "View full API responses including headers and status codes:",
    command: "hit run list-users\n\nhit last view",
    output: [
      "[...] // Response body",
      "Status: 200 OK",
      "Headers:",
      "content-type: application/json",
      "cache-control: max-age=0, private, must-revalidate",
      "Body:",
      "[...]"
    ]
  },
  teamSection: {
    title: "Team Collaboration",
    description: "Share API configuration with your team via Git:",
    commands: [
      "git add .hit/",
      "git commit -m \"Add API config\"",
      "git push"
    ]
  },
  authSection: {
    title: "Authentication",
    description: "Add authentication to your requests:",
    command: "hit ephenv set API_TOKEN \"my-secret-token\"",
    output: ["✓ Set API_TOKEN in current environment"]
  }
};

// Get Started Section Content
export const getStartedSection = {
  title: "Ready to simplify your API workflows?",
  subtitle: "Join developers who have transformed their API interactions with hit. Configure once, share with your team, and use everywhere.",
  primaryButton: {
    text: "Install Now",
    link: "#installation"
  },
  secondaryButton: {
    text: "GitHub Repository",
    link: "https://github.com/meshde/hit-cli"
  }
};

// Footer Content
export const footerSection = {
  description: "A productivity-focused command-line API client that converts API endpoints into simple commands.",
  socialLinks: {
    github: "https://github.com/meshde/hit-cli",
    twitter: "https://twitter.com/meshde"
  },
  quickLinks: [
    { text: "Features", link: "#features" },
    { text: "Installation", link: "#installation" },
    { text: "Usage Examples", link: "#usage" }
  ],
  resources: [
    { text: "GitHub Repository", link: "https://github.com/meshde/hit-cli" },
    { text: "Release Notes", link: "https://github.com/meshde/hit-cli/releases" },
    { text: "Report Issues", link: "https://github.com/meshde/hit-cli/issues" }
  ],
  copyright: `© ${new Date().getFullYear()} hit CLI. All rights reserved.`
};

// Header Content
export const headerSection = {
  navLinks: [
    { text: "Features", link: "#features" },
    { text: "Installation", link: "#installation" },
    { text: "Usage", link: "#usage" }
  ],
  githubLink: "https://github.com/meshde/hit-cli"
};