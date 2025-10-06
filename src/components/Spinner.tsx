import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  return (
    <div 
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      data-testid="spinner"
    >
      <svg 
        className="w-full h-full" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

// Dots Spinner
interface DotsSpinnerProps {
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DotsSpinner: React.FC<DotsSpinnerProps> = ({ 
  color = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  const colorClasses = {
    primary: 'bg-cyan-400',
    secondary: 'bg-purple-400',
    accent: 'bg-pink-400',
    white: 'bg-white',
    gray: 'bg-gray-400'
  };

  return (
    <div className={`flex space-x-1 ${className}`} data-testid="dots-spinner">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '0ms' }}
      />
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '150ms' }}
      />
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
};

// Bounce Spinner
interface BounceSpinnerProps {
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BounceSpinner: React.FC<BounceSpinnerProps> = ({ 
  color = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'bg-cyan-400',
    secondary: 'bg-purple-400',
    accent: 'bg-pink-400',
    white: 'bg-white',
    gray: 'bg-gray-400'
  };

  return (
    <div className={`flex space-x-1 ${className}`} data-testid="bounce-spinner">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '0ms' }}
      />
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '100ms' }}
      />
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '200ms' }}
      />
    </div>
  );
};

// Ring Spinner
interface RingSpinnerProps {
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const RingSpinner: React.FC<RingSpinnerProps> = ({ 
  color = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-cyan-400',
    secondary: 'border-purple-400',
    accent: 'border-pink-400',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin ${className}`}
      data-testid="ring-spinner"
    />
  );
};

// Gradient Spinner
interface GradientSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const GradientSpinner: React.FC<GradientSpinnerProps> = ({ 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${className}`}
      data-testid="gradient-spinner"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin">
        <div className="w-full h-full rounded-full bg-gray-900 m-0.5"></div>
      </div>
    </div>
  );
};

// Loading Overlay
interface LoadingOverlayProps {
  isVisible: boolean;
  text?: string;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isVisible, 
  text = 'Loading...',
  className = '' 
}) => {
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center ${className}`}
      data-testid="loading-overlay"
    >
      <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-8 flex flex-col items-center space-y-4 border border-cyan-500/20">
        <GradientSpinner size="lg" />
        <p className="text-white text-lg font-medium">{text}</p>
      </div>
    </div>
  );
};

// Inline Loader
interface InlineLoaderProps {
  isLoading: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const InlineLoader: React.FC<InlineLoaderProps> = ({ 
  isLoading, 
  fallback, 
  children,
  className = '' 
}) => {
  return (
    <div className={className} data-testid="inline-loader">
      {isLoading ? fallback : children}
    </div>
  );
};

// Loading Button
interface LoadingButtonProps {
  isLoading: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  spinnerSize?: 'sm' | 'md' | 'lg';
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  isLoading, 
  onClick, 
  children, 
  className = '',
  disabled = false,
  spinnerSize = 'sm'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${className} ${(disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
      data-testid="loading-button"
    >
      <div className="flex items-center justify-center space-x-2">
        {isLoading && <Spinner size={spinnerSize} />}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Spinner;
