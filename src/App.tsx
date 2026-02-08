import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const handleBannerClick = () => {
    window.open('https://galactiq.net/', '_blank');
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
              Experience SlimeTECH, a completely independent Minecraft plugin. 
              While inspired by similar concepts, we've coded everything from scratch 
              to create a unique industrial experience for your server.
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16 animate-slide-up">
          <div className="max-w-4xl mx-auto glass-card glass-card-hover p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 ios-text-primary">
              Download SlimeTECH
            </h2>

            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold mb-4 ios-text-secondary">All Versions</h3>
              <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator max-w-2xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { version: 'v0.0.1', date: '2026-02-07' }
                  ].map((version, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(`https://github.com/Voltarian-Technologies/SlimeTECH1/releases/tag/${version.version}`, '_blank')}
                      className="rounded-lg p-3 text-left hover:bg-slimetch-primary/10 transition-colors duration-200"
                    >
                      <div className="ios-text-secondary text-sm font-semibold">{version.version}</div>
                      <div className="ios-text-tertiary text-xs">{version.date}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="ios-surface rounded-2xl p-6 mb-4 border border-ios-separator max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-2 ios-text-secondary">Requirements</h3>
                <ul className="ios-text-tertiary text-sm space-y-1">
                  <li>• Minecraft Server 1.17+</li>
                  <li>• Spigot/Paper fork</li>
                  <li>• Java 16 or Higher</li>
                  <li>• 1GB+ RAM (Optimized)</li>
                  <li>• Not Slimefun 4 compatible</li>
                  <li>• Standalone plugin</li>
                </ul>
              </div>
              <p className="ios-text-tertiary text-sm">
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
                { title: 'Independent Plugin', desc: 'Completely standalone - coded from scratch' },
                { title: 'Java 16 or Higher', desc: 'Requires Java 16 or higher to run' },
                { title: 'Hundreds of Items', desc: 'New machines, tools, and materials for your server' },
                { title: 'Energy Systems', desc: 'Advanced power generation and distribution networks' },
                { title: 'Auto-Crafting', desc: 'Automated crafting systems for complex recipes' },
                { title: 'Cargo Management', desc: 'Smart item transport and sorting systems' },
                { title: 'Enhanced GUIs', desc: 'Improved user interfaces for better usability' },
                { title: 'Performance Optimized', desc: 'Runs well on servers with 1GB RAM' },
                { title: '1.0.0 Updates', desc: 'Updates follow semantic versioning format' },
                { title: 'Moving Away from Slimefun', desc: 'Developing independent identity' },
                { title: 'Cross-Platform', desc: 'Works with Spigot, Paper, and their forks' },
                { title: 'Easy Installation', desc: 'Simple setup with detailed documentation' },
                { title: 'Extensible API', desc: 'Plugin API for custom addons and integrations' },
                { title: 'Multi-Language', desc: 'Support for multiple server languages' },
                { title: 'Backup Compatible', desc: 'Works with existing server worlds' }
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
                { title: 'Independent Plugin', desc: 'Completely standalone - coded from scratch' },
                { title: 'Java 16 or Higher', desc: 'Requires Java 16 or higher to run' },
                { title: 'Hundreds of Items', desc: 'New machines, tools, and materials for your server' },
                { title: 'Energy Systems', desc: 'Advanced power generation and distribution networks' },
                { title: 'Auto-Crafting', desc: 'Automated crafting systems for complex recipes' },
                { title: 'Cargo Management', desc: 'Smart item transport and sorting systems' },
                { title: 'Enhanced GUIs', desc: 'Improved user interfaces for better usability' },
                { title: 'Performance Optimized', desc: 'Runs well on servers with 1GB RAM' },
                { title: '1.0.0 Updates', desc: 'Updates follow semantic versioning format' },
                { title: 'Moving Away from Slimefun', desc: 'Developing independent identity' },
                { title: 'Cross-Platform', desc: 'Works with Spigot, Paper, and their forks' },
                { title: 'Easy Installation', desc: 'Simple setup with detailed documentation' },
                { title: 'Extensible API', desc: 'Plugin API for custom addons and integrations' },
                { title: 'Multi-Language', desc: 'Support for multiple server languages' },
                { title: 'Backup Compatible', desc: 'Works with existing server worlds' }
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
