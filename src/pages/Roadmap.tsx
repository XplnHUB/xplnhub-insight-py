import React, { useState, useEffect } from 'react';
import { GitBranch, CheckCircle, Clock, Lightbulb, Zap, Globe, Code, Palette, Shield, Sparkles } from 'lucide-react';
import { useLoading } from '../hooks/useLoading';
import { GridSkeleton, TimelineSkeleton } from '../components/__test__/LoadingSkeleton';
import { InlineLoader, LoadingButton } from '../components/Spinner';

const Roadmap: React.FC = () => {
  const [isRoadmapLoading, setIsRoadmapLoading] = useState(true);
  const [isFutureVisionLoading, setIsFutureVisionLoading] = useState(true);
  const { isLoading: isDiscussionsLoading, executeWithLoading } = useLoading();

  // Simulate loading states
  useEffect(() => {
    const timer1 = setTimeout(() => setIsRoadmapLoading(false), 1500);
    const timer2 = setTimeout(() => setIsFutureVisionLoading(false), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleDiscussionsClick = async () => {
    await executeWithLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      window.open('https://github.com/XplnHUB/Insight-Py/discussions', '_blank');
    });
  };

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "completed",
      icon: <CheckCircle className="w-6 h-6" />,
      items: [
        {
          title: ".insightignore Support",
          description: "Exclude files and directories from analysis using gitignore-style patterns. Perfect for ignoring build artifacts, dependencies, and generated code.",
          features: [
            "Gitignore-compatible syntax",
            "Pattern matching for files and directories",
            "Default exclusions for common patterns",
            "Custom ignore rules per project"
          ]
        }
      ]
    },
    {
      quarter: "Q2 2025",
      status: "in-progress",
      icon: <Clock className="w-6 h-6" />,
      items: [
        {
          title: "HTML & PDF Export",
          description: "Export your analysis reports in multiple formats for better sharing and presentation. Create beautiful, interactive HTML reports or professional PDF documents.",
          features: [
            "Interactive HTML reports with charts",
            "Professional PDF generation",
            "Custom themes and branding",
            "Embedded code syntax highlighting",
            "Responsive design for mobile viewing"
          ]
        },
        {
          title: "Enhanced Metrics Dashboard",
          description: "Visual representation of code metrics with charts and graphs directly in the reports.",
          features: [
            "Complexity trend charts",
            "Code quality heatmaps",
            "Dependency graphs",
            "Historical comparison views"
          ]
        }
      ]
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        {
          title: "Local AI Engines",
          description: "Run AI analysis completely offline using local language models. No API keys required, full privacy guaranteed.",
          features: [
            "Support for Ollama and LM Studio",
            "Multiple model options (CodeLlama, Mistral, etc.)",
            "GPU acceleration support",
            "Offline operation",
            "Customizable model parameters"
          ]
        },
        {
          title: "Code Quality Scoring",
          description: "Comprehensive quality scoring system based on industry best practices and standards.",
          features: [
            "Overall quality score (0-100)",
            "Category-specific scores",
            "Comparison with industry benchmarks",
            "Actionable improvement suggestions"
          ]
        }
      ]
    },
    {
      quarter: "Q4 2025",
      status: "planned",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        {
          title: "Interactive Dashboard",
          description: "Web-based dashboard for exploring analysis results with interactive visualizations and drill-down capabilities.",
          features: [
            "Real-time analysis updates",
            "Interactive code exploration",
            "Customizable widgets and views",
            "Team collaboration features",
            "Historical trend analysis",
            "Export and sharing capabilities"
          ]
        },
        {
          title: "Multi-Repository Analysis",
          description: "Analyze multiple repositories simultaneously and compare metrics across projects.",
          features: [
            "Batch analysis of multiple repos",
            "Cross-project comparisons",
            "Unified reporting",
            "Organization-wide insights"
          ]
        }
      ]
    },
    {
      quarter: "Q1 2026",
      status: "planned",
      icon: <Globe className="w-6 h-6" />,
      items: [
        {
          title: "Cloud Sync & Collaboration",
          description: "Store and share analysis reports in the cloud. Collaborate with your team on code insights and track changes over time.",
          features: [
            "Cloud storage for reports",
            "Team workspaces",
            "Real-time collaboration",
            "Version history tracking",
            "Commenting and annotations",
            "Access control and permissions"
          ]
        },
        {
          title: "CI/CD Integrations",
          description: "Pre-built integrations for popular CI/CD platforms.",
          features: [
            "GitHub Actions integration",
            "GitLab CI/CD support",
            "Jenkins plugin",
            "CircleCI orb",
            "Automated quality gates"
          ]
        }
      ]
    },
    {
      quarter: "Q2 2026",
      status: "planned",
      icon: <Code className="w-6 h-6" />,
      items: [
        {
          title: "VSCode Extension",
          description: "Analyze your code directly from Visual Studio Code. Get instant insights without leaving your editor.",
          features: [
            "Inline code analysis",
            "Quick actions and refactoring suggestions",
            "Real-time quality indicators",
            "Integration with VSCode problems panel",
            "Custom keyboard shortcuts",
            "Configurable analysis triggers"
          ]
        },
        {
          title: "IDE Plugins",
          description: "Extend support to other popular IDEs.",
          features: [
            "IntelliJ IDEA plugin",
            "PyCharm integration",
            "Sublime Text package",
            "Vim/Neovim plugin"
          ]
        }
      ]
    }
  ];

  const futureVision = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Analysis",
      description: "Advanced security vulnerability detection and OWASP compliance checking"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Insights",
      description: "Identify performance bottlenecks and optimization opportunities"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Themes",
      description: "Fully customizable report themes and branding options"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-400 to-emerald-400';
      case 'in-progress':
        return 'from-yellow-400 to-orange-400';
      case 'planned':
        return 'from-blue-400 to-cyan-400';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Product Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our vision for the future of code analysis. See what's coming next and help shape the direction of Insight.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Roadmap items */}
          <InlineLoader 
            isLoading={isRoadmapLoading} 
            fallback={<TimelineSkeleton />}
          >
            <div className="space-y-16">
              {roadmapItems.map((period, periodIndex) => (
              <div key={periodIndex} className="relative">
                {/* Quarter marker */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getStatusColor(period.status)} flex items-center justify-center shadow-lg z-10`}>
                    {period.icon}
                  </div>
                  <div className="ml-6">
                    <h2 className="text-3xl font-bold text-white">{period.quarter}</h2>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getStatusBadge(period.status)} mt-2`}>
                      {period.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Items for this quarter */}
                <div className="ml-24 space-y-8">
                  {period.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="feature-card group hover:scale-[1.02] transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <GitBranch className="w-6 h-6 text-cyan-400 flex-shrink-0 ml-4" />
                      </div>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
          </InlineLoader>
        </div>

        {/* Future Vision */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond our current roadmap, we're exploring these exciting possibilities
            </p>
          </div>
          <InlineLoader 
            isLoading={isFutureVisionLoading} 
            fallback={<GridSkeleton items={3} columns={3} />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureVision.map((item, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="feature-icon-wrapper mb-6 mx-auto">
                  <div className="feature-icon">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              ))}
            </div>
          </InlineLoader>
        </div>

        {/* Community Input */}
        <div className="feature-card text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Help Shape Our Roadmap
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We value your feedback! Have ideas for features or improvements? 
            Join our community and let us know what you'd like to see next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoadingButton
              isLoading={isDiscussionsLoading}
              onClick={handleDiscussionsClick}
              className="neon-button flex items-center space-x-2"
            >
              <GitBranch className="w-5 h-5" />
              <span>Join Discussions</span>
            </LoadingButton>
            <a 
              href="https://github.com/XplnHUB/Insight-Py/issues/new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-button-outline flex items-center space-x-2"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Request a Feature</span>
            </a>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-gray-400 text-sm">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-gray-400 text-sm">Planned</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
