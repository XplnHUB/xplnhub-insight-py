import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Key, 
  Play, 
  BookOpen,
  Monitor,
  Smartphone,
  Zap,
  Sparkles
} from 'lucide-react';
import { LoadingButton } from './Spinner';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOS, setSelectedOS] = useState<'unix' | 'windows'>('unix');
  const [apiKey, setApiKey] = useState('');
  const [projectPath, setProjectPath] = useState('./my-project');
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isInstalling, setIsInstalling] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const markStepComplete = (stepIndex: number) => {
    setCompletedSteps(prev => new Set([...prev, stepIndex]));
  };

  const simulateInstallation = async () => {
    setIsInstalling(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsInstalling(false);
    markStepComplete(4); // Mark install step as complete
  };

  const simulateAnalysis = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 4000));
    setIsAnalyzing(false);
    markStepComplete(6); // Mark run step as complete
  };

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to Insight CLI',
      icon: <Sparkles className="w-8 h-8" />,
      content: (
        <div className="text-center space-y-6">
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Let's Get You Started
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We'll guide you through setting up Insight CLI in just a few simple steps. 
            Get ready to analyze your codebase with AI-powered insights!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['Clone', 'Setup', 'Configure', 'Analyze'].map((step, index) => (
              <div key={step} className="onboarding-step-preview">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-400 mt-2">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'clone',
      title: 'Clone Your Project',
      icon: <Download className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            First, let's get your project ready for analysis. Clone your repository or navigate to your existing project.
          </p>
          <div className="terminal-card">
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
                <span className="text-white ml-2 typewriter">git clone &lt;https://github.com/XplnHUB/Insight-Py.git&gt;</span>
                <button
                  onClick={() => copyToClipboard('git clone https://github.com/XplnHUB/Insight-Py.git', 'clone')}
                  className="copy-button ml-4"
                >
                  {copiedStates.clone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-1">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 typewriter">cd &lt;project-folder&gt;</span>
                <button
                  onClick={() => copyToClipboard('cd Insight-Py', 'cd')}
                  className="copy-button ml-4"
                >
                  {copiedStates.cd ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => markStepComplete(1)}
              className="neon-button-small"
            >
              <Check className="w-4 h-4 mr-2" />
              Project Ready
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'venv-create',
      title: 'Create Virtual Environment',
      icon: <Zap className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            Let's create an isolated Python environment for Insight CLI to keep your system clean.
          </p>
          <div className="terminal-card">
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
                <span className="text-white ml-2 typewriter">python3 -m venv venv</span>
                <button
                  onClick={() => copyToClipboard('python3 -m venv venv', 'venv-create')}
                  className="copy-button ml-4"
                >
                  {copiedStates['venv-create'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-1">
                <span className="text-cyan-400 typewriter">✓ Virtual environment created successfully!</span>
              </div>
            </div>
          </div>
          <div className="venv-visualization">
            <div className="venv-sphere">
              <div className="venv-core"></div>
              <div className="venv-ring"></div>
              <div className="venv-particles"></div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">Virtual Environment Created</p>
          </div>
        </div>
      )
    },
    {
      id: 'venv-activate',
      title: 'Activate Virtual Environment',
      icon: <Terminal className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            Now let's activate your virtual environment. Choose your operating system:
          </p>
          <div className="os-selector">
            <button
              onClick={() => setSelectedOS('unix')}
              className={`os-button ${selectedOS === 'unix' ? 'active' : ''}`}
            >
              <Monitor className="w-6 h-6 mb-2" />
              macOS / Linux
            </button>
            <button
              onClick={() => setSelectedOS('windows')}
              className={`os-button ${selectedOS === 'windows' ? 'active' : ''}`}
            >
              <Smartphone className="w-6 h-6 mb-2" />
              Windows
            </button>
          </div>
          <div className="terminal-card">
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
                <span className="text-white ml-2 typewriter">
                  {selectedOS === 'unix' ? 'source venv/bin/activate' : 'venv\\Scripts\\activate'}
                </span>
                <button
                  onClick={() => copyToClipboard(
                    selectedOS === 'unix' ? 'source venv/bin/activate' : 'venv\\Scripts\\activate',
                    'activate'
                  )}
                  className="copy-button ml-4"
                >
                  {copiedStates.activate ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-1">
                <div><span className="text-purple-400 typewriter">(venv)</span></div>
                <span className="text-green-400 ml-1">$</span>
                <span className="text-gray-400 ml-2">Environment activated!</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'install',
      title: 'Install Insight CLI',
      icon: <Download className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            Time to install Insight CLI! This will give you access to powerful code analysis tools.
          </p>
          <div className="terminal-card">
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
                <span className="text-purple-400">(venv)</span>
                <span className="text-green-400 ml-1">$</span>
                <span className="text-white ml-2 typewriter">pip install insight-cli-sarang</span>
                <button
                  onClick={() => copyToClipboard('pip install insight-cli-sarang', 'install')}
                  className="copy-button ml-4"
                >
                  {copiedStates.install ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-1">
                <span className="text-cyan-400 typewriter">✓ Successfully installed insight-cli-sarang</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <LoadingButton
              isLoading={isInstalling}
              onClick={simulateInstallation}
              loadingText="Installing..."
              className="neon-button w-full"
            >
              Install Insight CLI
            </LoadingButton>
            
            {isInstalling && (
              <div className="installation-progress">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <p className="text-sm text-gray-400 text-center mt-2">Installing dependencies...</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'api-key',
      title: 'Set Google API Key',
      icon: <Key className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            Configure your Google API key for AI-powered analysis features.
          </p>
          <div className="api-key-input">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Google API Key
            </label>
            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Google API key..."
                className="api-input"
              />
              <div className="input-glow"></div>
            </div>
          </div>
          <div className="terminal-card">
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
                <span className="text-purple-400">(venv)</span>
                <span className="text-green-400 ml-1">$</span>
                <span className="text-white ml-2 typewriter">
                  export GOOGLE_API_KEY="{apiKey || 'your-api-key'}"
                </span>
                <button
                  onClick={() => copyToClipboard(`export GOOGLE_API_KEY="${apiKey || 'your-api-key'}"`, 'export')}
                  className="copy-button ml-4"
                >
                  {copiedStates.export ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {selectedOS === 'windows' && (
                <div className="terminal-line delay-1">
                  <span className="text-gray-400 text-sm">Windows:</span>
                  <span className="text-white ml-2 typewriter">
                    set GOOGLE_API_KEY={apiKey || 'your-api-key'}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="api-tooltip">
            <p className="text-sm text-yellow-400">
              💡 Tip: Add this to your shell profile (~/.bashrc, ~/.zshrc) for persistence
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'run',
      title: 'Run Insight CLI',
      icon: <Play className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            You're all set! Now let's analyze your codebase with Insight CLI.
          </p>
          <div className="path-input">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Path
            </label>
            <div className="relative">
              <input
                type="text"
                value={projectPath}
                onChange={(e) => setProjectPath(e.target.value)}
                placeholder="./my-project"
                className="api-input"
              />
              <div className="input-glow"></div>
            </div>
          </div>
          <div className="terminal-card">
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
                <span className="text-purple-400">(venv)</span>
                <span className="text-green-400 ml-1">$</span>
                <span className="text-white ml-2 typewriter">insight-cli {projectPath}</span>
                <button
                  onClick={() => copyToClipboard(`insight-cli ${projectPath}`, 'run')}
                  className="copy-button ml-4"
                >
                  {copiedStates.run ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {isAnalyzing ? (
                <div className="terminal-line">
                  <span className="text-cyan-400 flex items-center space-x-2">
                    <Spinner size="sm" color="cyan" />
                    <span>Analyzing codebase...</span>
                  </span>
                </div>
              ) : (
                <>
                  <div className="terminal-line delay-1">
                    <span className="text-cyan-400 typewriter">🚀 Analyzing codebase...</span>
                  </div>
                  <div className="terminal-line delay-2">
                    <span className="text-green-400 typewriter">✓ Analysis complete! Report saved to insight_report.md</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-6">
            <LoadingButton
              isLoading={isAnalyzing}
              onClick={simulateAnalysis}
              loadingText="Analyzing..."
              className="neon-button w-full"
            >
              Run Analysis
            </LoadingButton>
          </div>
        </div>
      )
    },
    {
      id: 'help',
      title: 'Commands & Options',
      icon: <BookOpen className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-center mb-6">
            Here are some useful commands and options to get the most out of Insight CLI:
          </p>
          <div className="commands-grid">
            {[
              { cmd: 'insight-cli --help', desc: 'Show all available options' },
              { cmd: 'insight-cli --output custom.md', desc: 'Specify output filename' },
              { cmd: 'insight-cli --exclude "*.test.js"', desc: 'Exclude specific files' },
              { cmd: 'insight-cli --verbose', desc: 'Enable detailed logging' }
            ].map((command, index) => (
              <div key={index} className="command-card">
                <div className="flex items-center justify-between">
                  <code className="text-cyan-400 text-sm">{command.cmd}</code>
                  <button
                    onClick={() => copyToClipboard(command.cmd, `cmd-${index}`)}
                    className="copy-button-small"
                  >
                    {copiedStates[`cmd-${index}`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-2">{command.desc}</p>
              </div>
            ))}
          </div>
          <div className="success-message">
            <div className="success-icon">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're Ready to Go! 🎉</h3>
            <p className="text-gray-300">
              Start analyzing your codebase and discover insights you never knew existed.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="onboarding-overlay" onClick={handleOverlayClick}>
      <div className="onboarding-modal">
        <div className="onboarding-background">
          <div className="cyber-grid-modal"></div>
          <div className="particles-modal"></div>
        </div>
        
        <div className="onboarding-header">
          <div className="flex items-center space-x-4">
            <div className="step-icon">
              {steps[currentStep].icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{steps[currentStep].title}</h2>
              <p className="text-gray-400 text-sm">Step {currentStep + 1} of {steps.length}</p>
            </div>
          </div>
          <button onClick={onClose} className="close-button">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="progress-container">
          <div className="progress-track">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="progress-steps">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`progress-step ${index <= currentStep ? 'active' : ''} ${completedSteps.has(index) ? 'completed' : ''}`}
              >
                {completedSteps.has(index) ? <Check className="w-3 h-3" /> : index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-content">
          <div className="step-content">
            {steps[currentStep].content}
          </div>
        </div>

        <div className="onboarding-footer">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="nav-button prev"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          
          <div className="flex space-x-4">
            {currentStep === steps.length - 1 ? (
              <a
                href="https://github.com/insight-cli/insight"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button"
              >
                <Terminal className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            ) : (
              <button onClick={nextStep} className="nav-button next">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
