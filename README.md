# Hit - Command Line API Client Landing Page

![Hit CLI Tool Landing Page](https://i.imgur.com/WK0z2Q9.png)

## About Hit

**Hit** is a productivity-focused command-line API client that helps fast-moving software engineering teams:

- Convert API endpoints into command-line commands
- Reduce time spent on repetitive support operations
- Streamline API endpoint management
- Share endpoint knowledge across teams through versioned configuration files 
- Replace sharing curl commands in notes or Slack with standardized configurations

This landing page showcases the features and benefits of the Hit CLI tool in a modern, engaging way.

## Project Overview

- **Tech Stack**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Design**: Modern, responsive design with a teal/purple color scheme
- **Features**: Interactive tabs, responsive layouts, animated elements, and smooth navigation
- **Mobile Experience**: Fully responsive with custom mobile navigation

## Running Locally

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation Steps

#### Running on Replit

This project is set up to run easily on Replit:

1. Simply press the "Run" button in the Replit interface
2. The "Start application" workflow will automatically:
   - Install all dependencies
   - Start the development server
   - Make the application available at the Replit URL

#### Running on Your Local Machine

If you want to run this project on your own computer:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hit-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

### Development Mode Features

- Hot module replacement (changes update instantly)
- Automatic server restarts when server files change
- Browser auto-refresh when client files change

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/         # UI components including sections and UI elements
│   │   │   ├── ComparisonSection.tsx   # "Hit vs Postman" comparison section
│   │   │   ├── FeaturesSection.tsx     # Features showcase
│   │   │   ├── GetStartedSection.tsx   # Call-to-action section
│   │   │   ├── Header.tsx              # Navigation and mobile menu
│   │   │   ├── HeroSection.tsx         # Main hero banner
│   │   │   ├── InstallationSection.tsx # Installation instructions
│   │   │   ├── Terminal.tsx            # Terminal UI component
│   │   │   ├── UsageExamplesSection.tsx # Code examples with tabbed interface
│   │   │   └── ui/                      # Shadcn UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility functions and helpers
│   │   ├── pages/              # Page components
│   │   ├── App.tsx             # Main App component with routing
│   │   ├── content.ts          # All website text and data centralized here
│   │   └── main.tsx            # App entry point
│   └── index.html              # HTML template
├── server/                     # Express.js server
│   ├── index.ts                # Server entry point
│   └── routes.ts               # API routes
├── shared/                     # Shared types and schemas
├── theme.json                  # Theme configuration for Shadcn UI
└── README.md                   # Project documentation
```

## Architecture

This project uses a modern front-end architecture:

1. **Component-Based Structure:** Each section of the landing page is a separate, reusable component.

2. **Content Separation:** All text content is stored in `content.ts`, making it easy to update without touching component logic.

3. **Responsive Design:** Built with a mobile-first approach using Tailwind CSS.

4. **Server Setup:** Express.js server serves the static files and handles any API requests.

5. **Build System:** Uses Vite for fast builds and an optimized development experience.

## Features

- **Modern Design**: Clean, professional interface with teal/purple accents
- **Responsive Layout**: Fully responsive on all screen sizes
- **Interactive Elements**: Custom tabs navigation with horizontal scrolling
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Optimized Performance**: Fast load times and smooth scrolling
- **SEO Friendly**: Semantic HTML structure

## Development

### Adding new sections

1. Create a new component in `client/src/components/`
2. Add content to `client/src/content.ts`
3. Import and include the new component in `client/src/pages/Home.tsx`

### Modifying styles

- Global styles are in `client/src/index.css`
- Component-specific styles are defined within each component using Tailwind CSS classes
- Theme configuration is in `theme.json`

## Customizing Content

The project is designed to make content updates easy:

1. Open `client/src/content.ts`
2. You'll find separate sections for:
   - Hero section text and buttons
   - Features list and descriptions
   - Installation instructions
   - Usage examples and code snippets
   - Comparison section ("Hit vs Postman")
   - Call-to-action text
   - Footer content
   - Navigation links

For example, to update a feature description:

```typescript
// In content.ts
export const featuresSection = {
  title: "Features",
  subtitle: "Everything you need to streamline your API operations",
  features: [
    {
      title: "Versioned Configuration",  // ← Change this
      description: "Share endpoints across your team with versioned config files instead of sending curl commands in Slack.",  // ← And this
      icon: "Git"
    },
    // Other features...
  ]
}
```

## Customizing Colors

To change the primary color scheme:

1. Edit `theme.json`
2. Update the `primary` color value
3. Choose a variant type ("professional", "tint", or "vibrant")
4. Set the appearance mode ("light", "dark", or "system")

```json
{
  "primary": "#14B8A6",
  "variant": "professional",
  "appearance": "dark",
  "radius": 0.5
}
```

## Deployment

This project is ready for deployment on various platforms:

### Deploying on Replit

1. Click the "Deploy" button in the Replit interface
2. Follow the prompts to configure your deployment

### Deploying on Other Platforms

The project can be deployed to:

- **Vercel**: Connect your repository and let Vercel detect the settings automatically
- **Netlify**: Connect your repository and set the build command to `npm run build` and the publish directory to `dist`
- **GitHub Pages**: Run `npm run build` and push the `dist` folder to your gh-pages branch

## License

[MIT or your preferred license]

## Contact

For questions or support, please [create an issue](https://github.com/yourusername/hit-landing-page/issues) on the GitHub repository.