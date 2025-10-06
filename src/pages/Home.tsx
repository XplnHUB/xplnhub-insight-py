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
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Analyze Your Codebases
              </span>
              <br />
              <span className="text-white">with AI-Powered Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Insight is a Python CLI tool that generates detailed reports combining 
              static code analysis with AI explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LoadingButton
                isLoading={isOnboardingLoading}
                onClick={handleGetStarted}
                className="neon-button group flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </LoadingButton>
              <a href="https://github.com/XplnHUB/Insight-Py" target="_blank" rel="noopener noreferrer">
                <button className="neon-button-outline flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                  <Star className="w-4 h-4" />
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
