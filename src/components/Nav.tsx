import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Github, Menu, X, ExternalLink } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/implementation', label: 'Implementation' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/loading-demo', label: 'Loading Demo' },
  { path: '/loading-test', label: 'Loading Test' }
];

const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Insight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="https://github.com/XplnHUB/Insight-Py" 
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-subtle flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        <div 
          className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gray-900 backdrop-blur-xl border-l border-cyan-500/20 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Menu
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-1 ${
                      isActive(link.path)
                        ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-4 border-cyan-400'
                        : 'text-gray-300 hover:bg-cyan-500/5 hover:text-cyan-400'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: mobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <a 
                href="https://github.com/XplnHUB/Insight-Py" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all duration-200 transform hover:translate-x-1"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-cyan-500/20 flex items-center justify-between">
              <ThemeToggle />
              <p className="text-xs text-gray-500 text-center">
                &copy; 2025 XplnHUB
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;