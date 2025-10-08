import React, { useState, useEffect } from 'react';
import { Code, FileText, BarChart3, Brain, Zap, Shield, GitBranch, Package, Search, FileCode, Terminal, CheckCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faJava, faPhp, faRust, faSwift, faGolang, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faTerminal, faGem, faBolt, faBullseye, faCircle } from '@fortawesome/free-solid-svg-icons';
import LanguageModal from '../components/LanguageModal';
import { useLoading } from '../hooks/useLoading';
import { CardSkeleton, GridSkeleton } from '../components/__test__/LoadingSkeleton';
import { InlineLoader, LoadingButton } from '../components/Spinner';

const Features: React.FC = () => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isMainFeaturesLoading, setIsMainFeaturesLoading] = useState(true);
  const [isAdditionalFeaturesLoading, setIsAdditionalFeaturesLoading] = useState(true);
  const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
  const { isLoading: isModalLoading, executeWithLoading } = useLoading();

  // Simulate loading states
  useEffect(() => {
    const timer1 = setTimeout(() => setIsMainFeaturesLoading(false), 1000);
    const timer2 = setTimeout(() => setIsAdditionalFeaturesLoading(false), 1500);
    const timer3 = setTimeout(() => setIsLanguagesLoading(false), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleLanguageModalOpen = async () => {
    await executeWithLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLanguageModalOpen(true);
    });
  };
  const mainFeatures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Analyze 30+ File Types",
      description: "Support for Python, JavaScript, TypeScript, HTML, CSS, JSON, YAML, and many more programming languages and formats. Insight automatically detects file types and applies appropriate analysis strategies.",
      details: [
        "Python (.py) - Full AST analysis",
        "JavaScript/TypeScript (.js, .ts, .jsx, .tsx)",
        "Web technologies (HTML, CSS, SCSS)",
        "Configuration files (JSON, YAML, XML)",
        "Shell scripts (.sh, .bash)",
        "And 20+ more formats"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Generate Markdown Reports",
      description: "Beautiful, structured reports in Markdown format with comprehensive analysis and insights. Reports include syntax highlighting, tables, and visualizations that are easy to read and share.",
      details: [
        "Structured sections with clear hierarchy",
        "Syntax-highlighted code snippets",
        "Formatted tables for metrics",
        "Embedded charts and graphs",
        "Export-ready documentation",
        "GitHub-compatible formatting"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Collect Static Metrics",
      description: "Detailed metrics including lines of code, functions, classes, imports, and comment ratios. Get a complete picture of your codebase's structure and complexity.",
      details: [
        "Lines of Code (LOC) analysis",
        "Function and class counting",
        "Import dependency tracking",
        "Comment ratio calculation",
        "Cyclomatic complexity metrics",
        "Code duplication detection"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Explanations",
      description: "Get intelligent code analysis with LLM probability scores and actionable insights. Our AI understands context and provides meaningful recommendations.",
      details: [
        "Context-aware code explanations",
        "Confidence scores for predictions",
        "Actionable improvement suggestions",
        "Pattern recognition and best practices",
        "Security vulnerability detection",
        "Performance optimization hints"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized algorithms ensure quick analysis even for large codebases"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "All analysis happens locally - your code never leaves your machine"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Git Integration",
      description: "Analyze specific branches, commits, or track changes over time"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Dependency Analysis",
      description: "Understand your project's dependencies and their relationships"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Pattern Detection",
      description: "Identify common patterns, anti-patterns, and code smells"
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: ".insightignore Support",
      description: "Exclude files and directories from analysis with gitignore-style patterns"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "CLI & Scriptable",
      description: "Integrate into your CI/CD pipeline or automation workflows"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Scoring",
      description: "Get an overall quality score based on multiple code health metrics"
    }
  ];

  const supportedLanguages = [
    { name: "Python", icon: faPython, color: "text-blue-400" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: faJs, color: "text-blue-500" },
    { name: "Java", icon: faJava, color: "text-red-500" },
    { name: "C/C++", icon: faCode, color: "text-blue-600" },
    { name: "Go", icon: faGolang, color: "text-cyan-400" },
    { name: "Rust", icon: faRust, color: "text-orange-500" },
    { name: "PHP", icon: faPhp, color: "text-purple-500" },
    { name: "Ruby", icon: faGem, color: "text-red-400" },
    { name: "Swift", icon: faSwift, color: "text-orange-400" },
    { name: "Kotlin", icon: faCircle, color: "text-purple-400" },
    { name: "Dart", icon: faBullseye, color: "text-blue-400" },
    { name: "HTML/CSS", icon: faHtml5, color: "text-orange-500" },
    { name: "SQL", icon: faDatabase, color: "text-cyan-500" },
    { name: "Shell", icon: faTerminal, color: "text-green-400" },
    { name: "And 15+ more", icon: faBolt, color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced code analysis capabilities powered by cutting-edge AI technology
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-24 mb-32">
          <InlineLoader 
            isLoading={isMainFeaturesLoading} 
            fallback={<div className="space-y-24"><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /></div>}
          >
            {mainFeatures.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="feature-card">
                  <div className="feature-icon-wrapper mb-6">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="feature-card bg-gray-800/50">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Capabilities:</h3>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            ))}
          </InlineLoader>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Additional Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Even more features to enhance your code analysis workflow
            </p>
          </div>
          <InlineLoader 
            isLoading={isAdditionalFeaturesLoading} 
            fallback={<GridSkeleton items={8} columns={4} />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card group hover:scale-105 transition-transform">
                <div className="feature-icon-wrapper mb-4">
                  <div className="feature-icon bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              ))}
            </div>
          </InlineLoader>
        </div>

        {/* Supported Languages */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Supports 30+ Languages
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive support for modern development stacks
            </p>
          </div>
          
          <InlineLoader 
            isLoading={isLanguagesLoading} 
            fallback={<GridSkeleton items={16} columns={4} />}
          >
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {supportedLanguages.map((lang, index) => (
                <div key={index} className="feature-card text-center py-4 hover:scale-105 transition-transform">
                  <div className="mb-2">
                    <FontAwesomeIcon icon={lang.icon} className={`text-3xl ${lang.color}`} />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{lang.name}</span>
                </div>
                ))}
              </div>
            </div>
          </InlineLoader>

          <div className="text-center">
            <LoadingButton
              isLoading={isModalLoading}
              onClick={handleLanguageModalOpen}
              className="neon-button mx-auto"
            >
              <span>View All Supported Languages & File Types</span>
            </LoadingButton>
            <p className="text-gray-400 text-sm mt-4">
              Click to see detailed file extensions and how each language is evaluated
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Code Reviews</h3>
              <p className="text-gray-300 leading-relaxed">
                Get comprehensive insights before reviewing pull requests. Identify potential issues and understand code changes better.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Onboarding</h3>
              <p className="text-gray-300 leading-relaxed">
                Help new team members understand the codebase quickly with detailed reports and AI-powered explanations.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">Maintenance</h3>
              <p className="text-gray-300 leading-relaxed">
                Track code quality over time, identify technical debt, and prioritize refactoring efforts effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <LanguageModal 
        isOpen={isLanguageModalOpen} 
        onClose={() => setIsLanguageModalOpen(false)} 
      />
    </div>
  );
};

export default Features;
