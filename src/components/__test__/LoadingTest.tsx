import React, { useState } from 'react';
import { useLoading, useDebouncedLoading, useAsyncOperation } from '../../hooks/useLoading';
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

const LoadingTest: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { isLoading, executeWithLoading } = useLoading();
  const { debouncedLoading, setLoading } = useDebouncedLoading(500);
  
  // Test async operation
  const { data, isLoading: asyncLoading, execute: fetchData } = useAsyncOperation(
    () => new Promise<string[]>((resolve) => {
      setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 2000);
    })
  );

  const handleTestLoading = async () => {
    await executeWithLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
  };

  const handleDebouncedTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Loading Components Test
        </h1>

        {/* Spinner Tests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Spinner Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Default</h3>
              <Spinner size="lg" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Dots</h3>
              <DotsSpinner color="purple" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Bounce</h3>
              <BounceSpinner color="accent" />
            </div>
            <div className="feature-card text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Gradient</h3>
              <GradientSpinner size="lg" />
            </div>
          </div>
        </section>

        {/* Loading States Tests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Loading States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-white">Basic Loading</h3>
              <LoadingButton
                isLoading={isLoading}
                onClick={handleTestLoading}
                className="neon-button w-full mb-4"
              >
                {isLoading ? 'Loading...' : 'Test Loading'}
              </LoadingButton>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-white">Debounced Loading</h3>
              <button
                onClick={handleDebouncedTest}
                className="neon-button-outline w-full mb-4"
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
        </section>

        {/* Skeleton Tests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Skeleton Components</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Card Skeletons</h3>
              <GridSkeleton items={3} columns={3} />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Text Skeletons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextSkeleton lines={4} />
                <TextSkeleton lines={3} lastLineWidth="40%" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">List Skeletons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListSkeleton items={5} />
                <ListSkeleton items={3} />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Terminal Skeleton</h3>
              <TerminalSkeleton />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Timeline Skeleton</h3>
              <TimelineSkeleton />
            </div>
          </div>
        </section>

        {/* Async Operation Test */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-green-400">Async Operation Test</h2>
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-4 text-white">Data Fetching</h3>
            <LoadingButton
              isLoading={asyncLoading}
              onClick={fetchData}
              className="neon-button w-full mb-4"
            >
              {asyncLoading ? 'Fetching Data...' : 'Fetch Data'}
            </LoadingButton>
            
            <InlineLoader isLoading={asyncLoading} fallback={<TextSkeleton lines={3} />}>
              {data && (
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Fetched Data:</h4>
                  <ul className="space-y-1">
                    {data.map((item, index) => (
                      <li key={index} className="text-gray-300">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </InlineLoader>
          </div>
        </section>

        {/* Overlay Test */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">Overlay Test</h2>
          <div className="feature-card text-center">
            <button
              onClick={() => setShowOverlay(true)}
              className="neon-button-outline"
            >
              Show Loading Overlay
            </button>
          </div>
        </section>
      </div>

      {/* Loading Overlay */}
      <LoadingOverlay 
        isVisible={showOverlay} 
        text="Testing overlay functionality..."
      />
      
      {/* Close overlay button */}
      {showOverlay && (
        <button
          onClick={() => setShowOverlay(false)}
          className="fixed top-4 right-4 z-50 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default LoadingTest;
