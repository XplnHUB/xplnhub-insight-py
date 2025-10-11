import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, ChevronRight, ExternalLink, Github, Twitter, Linkedin, Mail, Heart, Code2, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Get initial theme from data-theme attribute
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
    setTheme(initialTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/docs', label: 'Documentation' },
    { path: '/about', label: 'About' }
  ];

  return (
    <footer className={`relative mt-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Gradient blend overlay at top */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b pointer-events-none -mt-32 ${
        isDark 
          ? 'from-gray-950/0 via-gray-950/50 to-gray-950' 
          : 'from-gray-50/0 via-gray-50/50 to-gray-50'
      }`}></div>
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDark 
            ? 'from-transparent via-cyan-500/5 to-purple-500/10' 
            : 'from-transparent via-cyan-500/10 to-purple-500/15'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isDark 
            ? 'from-transparent via-purple-500/5 to-transparent' 
            : 'from-transparent via-purple-500/10 to-transparent'
        }`}></div>
        {/* Floating orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Animated border with particles */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className={`h-full bg-gradient-to-r animate-pulse ${
          isDark 
            ? 'from-transparent via-cyan-500/50 to-transparent' 
            : 'from-transparent via-cyan-500/70 to-transparent'
        }`}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
              <div className="relative">
                <Terminal className={`w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
                <div className={`absolute inset-0 blur-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-cyan-400/30 group-hover:bg-cyan-400/50' 
                    : 'bg-cyan-600/40 group-hover:bg-cyan-600/60'
                }`}></div>
              </div>
              <span className={`text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-cyan-400 via-purple-400 to-pink-400' 
                  : 'from-cyan-600 via-purple-600 to-pink-600'
              }`}>
                Insight
              </span>
              <Sparkles className={`w-5 h-5 animate-pulse ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`} />
            </div>
            <p className={`leading-relaxed text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              AI-powered code analysis tool that transforms how developers understand and navigate their codebases. 
              <span className={isDark ? 'text-cyan-400/80' : 'text-cyan-600/90'}> Intelligent insights, effortless exploration.</span>
            </p>
            {/* Stats badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                isDark 
                  ? 'bg-gray-800/50 border-cyan-500/20' 
                  : 'bg-white/80 border-cyan-500/30'
              }`}>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Open Source</span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                isDark 
                  ? 'bg-gray-800/50 border-purple-500/20' 
                  : 'bg-white/80 border-purple-500/30'
              }`}>
                <Code2 className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Developer First</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 flex items-center ${
              isDark ? 'text-cyan-400' : 'text-cyan-600'
            }`}>
              <div className={`w-8 h-px bg-gradient-to-r to-transparent mr-3 ${
                isDark ? 'from-cyan-500' : 'from-cyan-600'
              }`}></div>
              Navigate
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    className={`group flex items-center transition-all duration-300 ${
                      isDark 
                        ? 'text-gray-400 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-cyan-600'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 flex items-center ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              <div className={`w-8 h-px bg-gradient-to-r to-transparent mr-3 ${
                isDark ? 'from-purple-500' : 'from-purple-600'
              }`}></div>
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/XplnHUB/Insight-Py" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/XplnHUB/Insight-Py/blob/main/README.md" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/XplnHUB/Insight-Py/issues" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Issues</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/XplnHUB/Insight-Py/discussions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Discussions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Connect Section */}
          <div className="lg:col-span-3">
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 flex items-center ${
              isDark ? 'text-pink-400' : 'text-pink-600'
            }`}>
              <span className={`w-8 h-px bg-gradient-to-r to-transparent mr-3 ${
                isDark ? 'from-pink-500' : 'from-pink-600'
              }`}></span>
              Connect
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Join our community and stay updated with the latest features and improvements.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/XplnHUB/Insight-Py" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 border rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700/50 hover:border-cyan-500/50' 
                    : 'bg-white/80 hover:bg-white border-gray-300 hover:border-cyan-500/70'
                }`}
                title="GitHub"
              >
                <Github className={`w-5 h-5 transition-colors relative z-10 ${
                  isDark 
                    ? 'text-gray-400 group-hover:text-cyan-400' 
                    : 'text-gray-600 group-hover:text-cyan-600'
                }`} />
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-cyan-500/0 group-hover:bg-cyan-500/10' 
                    : 'bg-cyan-500/0 group-hover:bg-cyan-500/20'
                }`}></div>
              </a>
              <a 
                href="https://x.com/CodeMaverick143" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 border rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700/50 hover:border-cyan-500/50' 
                    : 'bg-white/80 hover:bg-white border-gray-300 hover:border-cyan-500/70'
                }`}
                title="Twitter"
              >
                <Twitter className={`w-5 h-5 transition-colors relative z-10 ${
                  isDark 
                    ? 'text-gray-400 group-hover:text-cyan-400' 
                    : 'text-gray-600 group-hover:text-cyan-600'
                }`} />
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-cyan-500/0 group-hover:bg-cyan-500/10' 
                    : 'bg-cyan-500/0 group-hover:bg-cyan-500/20'
                }`}></div>
              </a>
              <a 
                href="https://www.linkedin.com/in/arpitsarang/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 border rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700/50 hover:border-purple-500/50' 
                    : 'bg-white/80 hover:bg-white border-gray-300 hover:border-purple-500/70'
                }`}
                title="LinkedIn"
              >
                <Linkedin className={`w-5 h-5 transition-colors relative z-10 ${
                  isDark 
                    ? 'text-gray-400 group-hover:text-purple-400' 
                    : 'text-gray-600 group-hover:text-purple-600'
                }`} />
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-purple-500/0 group-hover:bg-purple-500/10' 
                    : 'bg-purple-500/0 group-hover:bg-purple-500/20'
                }`}></div>
              </a>
              <a 
                href="mailto:xplnhub@gmail.com" 
                className={`group relative p-3 border rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700/50 hover:border-pink-500/50' 
                    : 'bg-white/80 hover:bg-white border-gray-300 hover:border-pink-500/70'
                }`}
                title="Email"
              >
                <Mail className={`w-5 h-5 transition-colors relative z-10 ${
                  isDark 
                    ? 'text-gray-400 group-hover:text-pink-400' 
                    : 'text-gray-600 group-hover:text-pink-600'
                }`} />
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-pink-500/0 group-hover:bg-pink-500/10' 
                    : 'bg-pink-500/0 group-hover:bg-pink-500/20'
                }`}></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="relative">
          <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${
            isDark 
              ? 'from-transparent via-cyan-500/30 to-transparent' 
              : 'from-transparent via-cyan-500/50 to-transparent'
          }`}></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className={`flex items-center gap-2 text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <span>&copy; 2025 XplnHUB ~ CodeMaverick-143</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> for developers
              </span>
            </div>
            <div className={`flex items-center gap-6 text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
              }`}>Privacy</a>
              <span>•</span>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
              }`}>Terms</a>
              <span>•</span>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
              }`}>License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;