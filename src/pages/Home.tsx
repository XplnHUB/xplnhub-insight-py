import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Github, Star, ChevronRight, Code, FileText, BarChart3, Brain } from 'lucide-react';
import { useLoading } from '../hooks/useLoading';
import { GridSkeleton } from '../components/__test__/LoadingSkeleton';
import { InlineLoader, LoadingButton } from '../components/Spinner';

interface HomeProps {
  onOpenOnboarding: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenOnboarding }) => {
  const [isFeaturesLoading, setIsFeaturesLoading] = useState(true);
  const { isLoading: isOnboardingLoading, executeWithLoading } = useLoading();

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Watch for theme changes
  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
    setTheme(initialTheme);

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

  // Simulate features loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFeaturesLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = async () => {
    await executeWithLoading(async () => {
      // Simulate some async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      onOpenOnboarding();
    });
  };

  const isDark = theme === 'dark';

  const featureHighlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "30+ File Types",
      description: "Comprehensive language support"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Markdown Reports",
      description: "Beautiful structured output"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Static Metrics",
      description: "Detailed code analysis"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered",
      description: "Intelligent insights"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-cyan-400 via-purple-400 to-pink-400'
                  : 'from-cyan-600 via-purple-600 to-pink-600'
              }`}>
                Analyze Your Codebases
              </span>
              <br />
              <span className={isDark ? 'text-white' : 'text-gray-900'}>with AI-Powered Insights</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Insight is a Python CLI tool that generates detailed reports combining 
              static code analysis with AI explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LoadingButton
                isLoading={isOnboardingLoading}
                onClick={handleGetStarted}
                className={`group relative w-full sm:w-auto px-6 py-3.5 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden ${
                  isDark
                    ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white shadow-purple-500/30 hover:shadow-purple-500/50'
                    : 'bg-gradient-to-r from-purple-200 via-violet-300 to-indigo-300 hover:from-purple-500 hover:via-violet-600 hover:to-indigo-600 text-white shadow-purple-500/40 hover:shadow-purple-500/60'
                }`}
              >
                <div className="relative z-10 flex items-center justify-center space-x-2 whitespace-nowrap">
                  <Play className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="flex-shrink-0">Get Started</span>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </LoadingButton>
              <a href="https://github.com/XplnHUB/Insight-Py" target="_blank" rel="noopener noreferrer">
                <button className={`group w-full px-6 py-3.5 backdrop-blur-sm border-2 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  isDark
                    ? 'bg-slate-900/50 hover:bg-slate-800/60 border-slate-700 hover:border-slate-600 text-white'
                    : 'bg-white/70 hover:bg-white/90 border-gray-300 hover:border-gray-400 text-gray-900'
                }`}>
                  <div className="flex items-center justify-center space-x-2 whitespace-nowrap">
                    <Github className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                    <span className="flex-shrink-0">View on GitHub</span>
                    <Star className="w-4 h-4 flex-shrink-0 group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-all" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Insight
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A next-generation code analysis tool that bridges the gap between traditional static analysis and AI-powered insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="feature-card">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">What is Insight?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Insight is a powerful Python CLI tool designed to help developers understand their codebases better. 
                  It combines traditional static code analysis with cutting-edge AI technology to provide comprehensive, 
                  actionable insights about your code structure, quality, and complexity.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Why Insight?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're onboarding to a new project, conducting code reviews, or maintaining legacy systems, 
                  Insight provides the clarity you need. Get instant reports with metrics, visualizations, and AI-powered 
                  explanations that help you make informed decisions about your code.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="feature-card">
                <h3 className="text-2xl font-semibold mb-4 text-pink-400">Key Highlights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Support for 30+ programming languages and file formats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Detailed metrics including LOC, complexity, and code patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>AI-powered explanations with confidence scores</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Beautiful Markdown reports ready to share</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Easy integration into your development workflow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Feature Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover what makes Insight the ultimate code analysis tool
            </p>
            <Link to="/features">
              <button className="neon-button-subtle flex items-center space-x-2 mx-auto">
                <span>Explore All Features</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <InlineLoader
            isLoading={isFeaturesLoading}
            fallback={<GridSkeleton items={4} columns={4} />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureHighlights.map((feature, index) => (
                <div key={index} className="feature-card group">
                  <div className="feature-icon-wrapper mb-6">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </InlineLoader>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-32 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quick Installation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with Insight in seconds
          </p>
          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 typewriter">pip install insight-cli-sarang</span>
              </div>
              <div className="terminal-line delay-1">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 typewriter">insight-cli-sarang .</span>
              </div>
              <div className="terminal-line delay-2">
                <span className="text-cyan-400 typewriter">✓ Analysis complete! Report saved to insight_report.md</span>
              </div>
            </div>
          </div>
          <Link to="/implementation">
            <button className="neon-button-outline flex items-center space-x-2 mx-auto">
              <span>View Full Implementation Guide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            What's Coming Next
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Exciting features on our roadmap
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="feature-card">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">HTML & PDF Export</h3>
              <p className="text-gray-400 text-sm">In Progress - Q2 2025</p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Local AI Engines</h3>
              <p className="text-gray-400 text-sm">Planned - Q3 2025</p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-semibold mb-2 text-pink-400">Interactive Dashboard</h3>
              <p className="text-gray-400 text-sm">Planned - Q4 2025</p>
            </div>
          </div>
          <Link to="/roadmap">
            <button className="neon-button-subtle flex items-center space-x-2 mx-auto">
              <span>View Full Roadmap</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
