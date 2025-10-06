import React, { useState } from 'react';
import { RotateCcw, Zap, Code, FileText, BarChart3, Brain } from 'lucide-react';
import { useLoading, useAsyncOperation, useDebouncedLoading } from '../../hooks/useLoading';
import { 
  TextSkeleton, 
  ListSkeleton, 
  TerminalSkeleton, 
  GridSkeleton,
  TimelineSkeleton 
} from './LoadingSkeleton';
import Spinner, { 
  DotsSpinner, 
  BounceSpinner, 
  GradientSpinner,
  LoadingOverlay,
  InlineLoader,
  LoadingButton 
} from '../Spinner';

const LoadingDemo: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(false);
  const { isLoading, executeWithLoading } = useLoading();
  const { debouncedLoading, setLoading } = useDebouncedLoading(500);
  
  // Simulate async operations
  const simulateDataFetch = async (delay: number = 2000): Promise<string[]> => {
    await new Promise(resolve => setTimeout(resolve, delay));
    return ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'];
  };

  const { data, isLoading: asyncLoading, execute: fetchData } = useAsyncOperation(
    () => simulateDataFetch(1500),
    {
      onSuccess: (data) => console.log('Data fetched:', data),
      onError: (error) => console.error('Error:', error)
    }
  );

  const handleAsyncOperation = async () => {
    await executeWithLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      return 'Operation completed!';
    });
  };

  const handleDebouncedLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
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
    <div className="min-h-screen py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Loading States Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interactive demonstration of loading skeletons, spinners, and loading states
          </p>
        </div>

        {/* Spinner Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Spinner Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Default Spinner</h3>
              <Spinner size="lg" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Dots Spinner</h3>
              <DotsSpinner color="purple" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Bounce Spinner</h3>
              <BounceSpinner color="accent" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Gradient Spinner</h3>
              <GradientSpinner size="lg" />
            </div>
          </div>
        </section>

        {/* Loading States Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Loading States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Basic Loading Hook</h3>
              <div className="space-y-4">
                <LoadingButton
                  isLoading={isLoading}
                  onClick={handleAsyncOperation}
                  className="neon-button w-full"
                >
                  {isLoading ? 'Processing...' : 'Start Async Operation'}
                </LoadingButton>
                <p className="text-gray-400 text-sm">
                  Click to simulate a 3-second async operation
                </p>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Debounced Loading</h3>
              <div className="space-y-4">
                <button
                  onClick={handleDebouncedLoading}
                  className="neon-button-outline w-full"
                >
                  Trigger Debounced Loading
                </button>
                <div className="flex items-center justify-center py-4">
                  {debouncedLoading ? (
                    <div className="flex items-center space-x-2">
                      <Spinner size="sm" />
                      <span className="text-gray-300">Loading with delay...</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">Ready</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skeleton Showcase */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Skeleton Components</h2>
            <button
              onClick={() => setShowSkeletons(!showSkeletons)}
              className="neon-button flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{showSkeletons ? 'Hide' : 'Show'} Skeletons</span>
            </button>
          </div>

          {showSkeletons ? (
            <div className="space-y-12">
              {/* Card Skeletons */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Card Skeletons</h3>
                <GridSkeleton items={4} columns={4} />
              </div>

              {/* Text Skeletons */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Text Skeletons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <TextSkeleton lines={4} />
                  <TextSkeleton lines={3} lastLineWidth="40%" />
                </div>
              </div>

              {/* List Skeletons */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-400">List Skeletons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ListSkeleton items={5} />
                  <ListSkeleton items={3} />
                </div>
              </div>

              {/* Terminal Skeleton */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Terminal Skeleton</h3>
                <TerminalSkeleton />
              </div>

              {/* Timeline Skeleton */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Timeline Skeleton</h3>
                <TimelineSkeleton />
              </div>
            </div>
          ) : (
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
          )}
        </section>

        {/* Inline Loading Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Inline Loading States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Async Data Fetching</h3>
              <div className="space-y-4">
                <LoadingButton
                  isLoading={asyncLoading}
                  onClick={fetchData}
                  className="neon-button w-full"
                >
                  {asyncLoading ? 'Fetching Data...' : 'Fetch Data'}
                </LoadingButton>
                
                <InlineLoader isLoading={asyncLoading} fallback={<TextSkeleton lines={3} />}>
                  {data && (
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">Fetched Data:</h4>
                      <ul className="space-y-1">
                        {data.map((item, index) => (
                          <li key={index} className="text-gray-300 flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-cyan-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </InlineLoader>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Loading Overlay</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setShowOverlay(true)}
                  className="neon-button-outline w-full"
                >
                  Show Loading Overlay
                </button>
                <p className="text-gray-400 text-sm">
                  Click to show a full-screen loading overlay
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Usage Examples</h2>
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Code Examples</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Basic Loading Hook</h4>
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`const { isLoading, executeWithLoading } = useLoading();

const handleSubmit = async () => {
  await executeWithLoading(async () => {
    await fetch('/api/data');
  });
};`}
                  </code>
                </pre>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Skeleton Usage</h4>
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`<InlineLoader isLoading={loading} fallback={<CardSkeleton />}>
  <YourContent />
</InlineLoader>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Loading Overlay */}
      <LoadingOverlay 
        isVisible={showOverlay} 
        text="Processing your request..."
      />
      
      {/* Close overlay button */}
      {showOverlay && (
        <button
          onClick={() => setShowOverlay(false)}
          className="fixed top-4 right-4 z-50 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default LoadingDemo;
