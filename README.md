# SlimeTECH Download Website

A modern React website for downloading the SlimeTECH Minecraft plugin.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with React and TailwindCSS for a sleek, professional appearance
- **Interactive Banner**: Clickable banner that redirects to Galactiq.net for server hosting
- **Download Section**: Clear download interface with system requirements
- **Plugin Features**: Showcase of key plugin features
- **Server Hosting CTA**: Prominent call-to-action for server hosting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd main-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
main-site/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.tsx             # Main application component
│   ├── App.css             # App-specific styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles with Tailwind
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Create React App**: Development environment and build setup

## Customization

### Colors

The theme uses custom SlimeTECH brand colors defined in `tailwind.config.js`:
- `slimetch-primary`: #00d4aa (primary slime green)
- `slimetch-secondary`: #00a888 (secondary slime green)
- `slimetch-accent`: #1a4d42 (dark accent)

### Download URL

To update the download URL, modify the `handleDownload` function in `src/App.tsx`:

```typescript
const handleDownload = () => {
  const element = document.createElement('a');
  element.href = 'YOUR_DOWNLOAD_URL_HERE'; // Update this
  element.download = 'SlimeTECH.jar';
  element.click();
};
```

## Deployment

This website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

Simply run `npm run build` and deploy the contents of the `build` directory.

## License

© 2024 SlimeTECH. All rights reserved.
