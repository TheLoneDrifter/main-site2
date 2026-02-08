import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const [fileSize, setFileSize] = useState<string>('');

  useEffect(() => {
    const fetchFileSize = async () => {
      try {
        const response = await fetch('./slimetch.jar', { method: 'HEAD' });
        if (response.ok) {
          const size = response.headers.get('content-length');
          if (size) {
            const fileSizeInBytes = parseInt(size);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(1);
            setFileSize(`${fileSizeInMB} MB`);
          }
        }
      } catch (error) {
        // Fallback if file doesn't exist or network error
        setFileSize('Unknown size');
      }
    };

    fetchFileSize();
  }, []);

  const handleBannerClick = () => {
    window.open('https://galactiq.net/', '_blank');
  };

  const handleDownload = () => {
    // Create a sample download for demonstration
    // In a real scenario, this would link to the actual SlimeTECH download
    const element = document.createElement('a');
    element.href = './slimetch.jar'; // Replace with actual download URL
    element.download = 'SlimeTECH.jar';
    element.click();
  };

  return (
    <div className="min-h-screen bg-ios-background relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slimetch-primary/10 via-transparent to-slimetch-secondary/10 pointer-events-none" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-slimetch-primary/20 rounded-full blur-3xl floating-element" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-slimetch-secondary/15 rounded-full blur-3xl floating-element" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-slimetch-primary/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}} />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 ios-text-primary animate-float">
              SlimeTECH
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-slimetch-primary to-slimetch-secondary mx-auto rounded-full" />
          </div>
          <p className="text-2xl md:text-3xl ios-text-secondary mb-8">
            The Ultimate Minecraft Plugin Experience
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="ios-text-tertiary text-lg leading-relaxed">
              Enhance your Minecraft server with SlimeTECH, a powerful Slimefun 4 fork. 
              Access hundreds of new items, machines, and gameplay mechanics to transform 
              your server into an industrial powerhouse.
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16 animate-slide-up">
          <div className="max-w-4xl mx-auto glass-card glass-card-hover p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 ios-text-primary">
              Download SlimeTECH
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator">
                  <h3 className="text-xl font-semibold mb-2 ios-text-secondary">Minecraft Plugin</h3>
                  <p className="ios-text-tertiary mb-4">Requires Spigot/Paper server</p>
                  <div className="text-sm ios-text-tertiary">
                    Version 1.0 • Size: {fileSize || 'Calculating...'}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator">
                  <h3 className="text-xl font-semibold mb-2 ios-text-secondary">Requirements</h3>
                  <ul className="ios-text-tertiary text-sm space-y-1">
                    <li>• Minecraft Server 1.16+</li>
                    <li>• Spigot/Paper fork</li>
                    <li>• Java 8 or higher</li>
                    <li>• 2GB+ RAM recommended</li>
                    <li>• Slimefun 4 compatible</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleDownload}
                className="ios-button text-lg px-12 py-4 text-white font-semibold rounded-2xl shadow-ios-card hover:shadow-ios-card-hover transform hover:scale-105 transition-all duration-300"
              >
                Download Now
              </button>
              <p className="ios-text-tertiary text-sm mt-4">
                Free to use • Open source • GPLv3 License
              </p>
            </div>
          </div>
        </section>

        {/* Complete Features Section with 3D Scrolling Effect */}
        <section className="mb-16 overflow-hidden -mx-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ios-text-primary">
            Complete Feature Set
          </h2>
          <div className="relative perspective-1000">
            {/* 3D Scrolling container */}
            <div className="flex animate-scroll-3d transform-gpu">
              {/* First set of cards */}
              {[
                { title: 'Slimefun Fork', desc: 'Enhanced Slimefun 4 with new features and improvements' },
                { title: 'Hundreds of Items', desc: 'New machines, tools, and materials for your server' },
                { title: 'Energy Systems', desc: 'Advanced power generation and distribution networks' },
                { title: 'Auto-Crafting', desc: 'Automated crafting systems for complex recipes' },
                { title: 'Cargo Management', desc: 'Smart item transport and sorting systems' },
                { title: 'Enhanced GUIs', desc: 'Improved user interfaces for better usability' },
                { title: 'Performance Optimized', desc: 'Reduced lag and improved server performance' },
                { title: 'Regular Updates', desc: 'Continuous development with new content' },
                { title: 'Community Driven', desc: 'Open source with community contributions' },
                { title: 'Cross-Platform', desc: 'Works with Spigot, Paper, and their forks' },
                { title: 'Easy Installation', desc: 'Simple setup with detailed documentation' },
                { title: 'Extensible API', desc: 'Plugin API for custom addons and integrations' },
                { title: 'Multi-Language', desc: 'Support for multiple server languages' },
                { title: 'Backup Compatible', desc: 'Works with existing Slimefun worlds' },
                { title: 'Active Support', desc: 'Discord community for help and suggestions' }
              ].map((feature, index) => (
                <div key={`first-${index}`} className="glass-card-3d rounded-2xl p-6 mx-4 min-w-[280px] flex-shrink-0 transform-gpu">
                  <div className="w-12 h-12 bg-gradient-to-br from-slimetch-primary to-slimetch-primary/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 ios-text-secondary">{feature.title}</h3>
                  <p className="ios-text-tertiary text-sm">{feature.desc}</p>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {[
                { title: 'Slimefun Fork', desc: 'Enhanced Slimefun 4 with new features and improvements' },
                { title: 'Hundreds of Items', desc: 'New machines, tools, and materials for your server' },
                { title: 'Energy Systems', desc: 'Advanced power generation and distribution networks' },
                { title: 'Auto-Crafting', desc: 'Automated crafting systems for complex recipes' },
                { title: 'Cargo Management', desc: 'Smart item transport and sorting systems' },
                { title: 'Enhanced GUIs', desc: 'Improved user interfaces for better usability' },
                { title: 'Performance Optimized', desc: 'Reduced lag and improved server performance' },
                { title: 'Regular Updates', desc: 'Continuous development with new content' },
                { title: 'Community Driven', desc: 'Open source with community contributions' },
                { title: 'Cross-Platform', desc: 'Works with Spigot, Paper, and their forks' },
                { title: 'Easy Installation', desc: 'Simple setup with detailed documentation' },
                { title: 'Extensible API', desc: 'Plugin API for custom addons and integrations' },
                { title: 'Multi-Language', desc: 'Support for multiple server languages' },
                { title: 'Backup Compatible', desc: 'Works with existing Slimefun worlds' },
                { title: 'Active Support', desc: 'Discord community for help and suggestions' }
              ].map((feature, index) => (
                <div key={`second-${index}`} className="glass-card-3d rounded-2xl p-6 mx-4 min-w-[280px] flex-shrink-0 transform-gpu">
                  <div className="w-12 h-12 bg-gradient-to-br from-slimetch-primary to-slimetch-primary/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 ios-text-secondary">{feature.title}</h3>
                  <p className="ios-text-tertiary text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Server Hosting CTA */}
        <section className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ios-text-primary">
              Want to Host Your Own Server?
            </h2>
            <p className="ios-text-tertiary mb-4">
            Get professional server hosting for your SlimeTECH server
          </p>
            <button
              onClick={handleBannerClick}
              className="ios-button text-lg px-12 py-4 text-white font-semibold rounded-2xl shadow-ios-card hover:shadow-ios-card-hover transform hover:scale-105 transition-all duration-300"
            >
              Start Hosting at Galactiq
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ios-surface border-t border-ios-separator py-8 mt-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="ios-text-tertiary mb-4">
            © {currentYear} Voltarian Technologies
          </p>
          <p className="ios-text-tertiary text-sm">
            Server hosting provided by <a href="https://galactiq.net/" target="_blank" rel="noopener noreferrer" className="ios-text-secondary hover:text-ios-primary transition-colors duration-300">Galactiq</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
