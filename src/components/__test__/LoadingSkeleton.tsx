import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = '100%', 
  height = '1rem', 
  rounded = false,
  animate = true 
}) => {
  const baseClasses = 'relative bg-gray-800/80 overflow-hidden';
  const roundedClasses = rounded ? 'rounded-full' : 'rounded-lg';
  
  return (
    <div 
      className={`${baseClasses} ${roundedClasses} ${className}`}
      style={{ width, height }}
    >
      {animate && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
      )}
    </div>
  );
};

// Card skeleton for feature cards
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`feature-card ${className}`} data-testid="skeleton-card">
    <div className="flex items-center justify-center mb-6 w-16 h-16">
      <Skeleton width="4rem" height="4rem" rounded />
    </div>
    <Skeleton height="1.75rem" width="85%" className="mb-4" />
    <div className="space-y-3">
      <Skeleton height="1rem" width="100%" />
      <Skeleton height="1rem" width="95%" />
      <Skeleton height="1rem" width="75%" />
    </div>
  </div>
);

// Text skeleton for paragraphs
export const TextSkeleton: React.FC<{ 
  lines?: number; 
  className?: string;
  lastLineWidth?: string;
}> = ({ lines = 3, className = '', lastLineWidth = '60%' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton 
        key={index}
        height="1rem" 
        width={index === lines - 1 ? lastLineWidth : '100%'}
        data-testid="skeleton-line"
      />
    ))}
  </div>
);

// List skeleton for feature lists
export const ListSkeleton: React.FC<{ 
  items?: number; 
  className?: string;
}> = ({ items = 5, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-start space-x-3" data-testid="skeleton-list-item">
        <Skeleton width="1.25rem" height="1.25rem" rounded />
        <Skeleton height="1rem" width="85%" />
      </div>
    ))}
  </div>
);

// Table skeleton for data tables
export const TableSkeleton: React.FC<{ 
  rows?: number; 
  columns?: number;
  className?: string;
}> = ({ rows = 5, columns = 4, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {/* Header */}
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={index} height="1.25rem" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={colIndex} height="1rem" />
        ))}
      </div>
    ))}
  </div>
);

// Terminal skeleton for code blocks
export const TerminalSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`terminal-window ${className}`}>
    <div className="terminal-header">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <span className="text-gray-400 text-sm">Terminal</span>
    </div>
    <div className="terminal-content">
      <div className="space-y-2">
        <Skeleton height="1.25rem" width="60%" />
        <Skeleton height="1.25rem" width="45%" />
        <Skeleton height="1.25rem" width="70%" />
      </div>
    </div>
  </div>
);

// Grid skeleton for feature grids
export const GridSkeleton: React.FC<{ 
  items?: number; 
  columns?: number;
  className?: string;
}> = ({ items = 6, columns = 3, className = '' }) => (
  <div 
    className={`grid gap-6 ${className}`}
    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
  >
    {Array.from({ length: items }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
);

// Timeline skeleton for roadmap
export const TimelineSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-16 ${className}`}>
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="relative">
        <div className="flex items-center mb-8">
          <Skeleton width="4rem" height="4rem" rounded />
          <div className="ml-6">
            <Skeleton height="2rem" width="8rem" className="mb-2" />
            <Skeleton height="1.5rem" width="6rem" rounded />
          </div>
        </div>
        <div className="ml-24 space-y-4">
          <Skeleton height="2rem" width="60%" className="mb-4" />
          <Skeleton height="1rem" width="100%" className="mb-2" />
          <Skeleton height="1rem" width="90%" className="mb-2" />
          <Skeleton height="1rem" width="80%" />
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
