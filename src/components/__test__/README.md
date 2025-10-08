# Loading Components Documentation

This directory contains comprehensive loading components and utilities for the Insight-Py web application, implementing loading skeletons and spinners to improve user experience while data is being fetched.

## Components Overview

### Spinner Components (`../Spinner.tsx`)

#### Basic Spinner
```tsx
import Spinner from '../Spinner';

<Spinner size="lg" color="primary" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `color`: 'primary' | 'secondary' | 'accent' | 'white' | 'gray' (default: 'primary')
- `className`: string (optional)

#### Specialized Spinners
- **DotsSpinner**: Three bouncing dots
- **BounceSpinner**: Three bouncing circles
- **RingSpinner**: Rotating ring
- **GradientSpinner**: Gradient-colored spinner

#### Loading Overlay
```tsx
import { LoadingOverlay } from '../Spinner';

<LoadingOverlay 
  isVisible={isLoading} 
  text="Loading your data..." 
/>
```

#### Inline Loader
```tsx
import { InlineLoader } from '../Spinner';

<InlineLoader 
  isLoading={loading} 
  fallback={<CardSkeleton />}
>
  <YourContent />
</InlineLoader>
```

#### Loading Button
```tsx
import { LoadingButton } from '../Spinner';

<LoadingButton
  isLoading={isLoading}
  onClick={handleClick}
  className="neon-button"
>
  Submit
</LoadingButton>
```

### Skeleton Components (`LoadingSkeleton.tsx`)

#### Card Skeleton
```tsx
import { CardSkeleton } from './LoadingSkeleton';

<CardSkeleton />
```

#### Text Skeleton
```tsx
import { TextSkeleton } from './LoadingSkeleton';

<TextSkeleton lines={4} lastLineWidth="60%" />
```

#### List Skeleton
```tsx
import { ListSkeleton } from './LoadingSkeleton';

<ListSkeleton items={5} />
```

#### Grid Skeleton
```tsx
import { GridSkeleton } from './LoadingSkeleton';

<GridSkeleton items={6} columns={3} />
```

#### Table Skeleton
```tsx
import { TableSkeleton } from './LoadingSkeleton';

<TableSkeleton rows={5} columns={4} />
```

#### Terminal Skeleton
```tsx
import { TerminalSkeleton } from './LoadingSkeleton';

<TerminalSkeleton />
```

#### Timeline Skeleton
```tsx
import { TimelineSkeleton } from './LoadingSkeleton';

<TimelineSkeleton />
```

### Loading Hooks (`../../hooks/useLoading.ts`)

#### Basic Loading Hook
```tsx
import { useLoading } from '../../hooks/useLoading';

const { isLoading, startLoading, stopLoading, executeWithLoading } = useLoading();

// Execute async operation with loading state
const handleSubmit = async () => {
  await executeWithLoading(async () => {
    await fetch('/api/data');
  });
};
```

#### Debounced Loading Hook
```tsx
import { useDebouncedLoading } from '../../hooks/useLoading';

const { debouncedLoading, setLoading } = useDebouncedLoading(500);

// Trigger loading with debounce
const handleSearch = () => {
  setLoading(true);
  // Loading will stop after 500ms of inactivity
};
```

#### Async Operation Hook
```tsx
import { useAsyncOperation } from '../../hooks/useLoading';

const { data, isLoading, error, execute } = useAsyncOperation(
  () => fetch('/api/data').then(res => res.json()),
  {
    onSuccess: (data) => console.log('Success:', data),
    onError: (error) => console.error('Error:', error)
  }
);
```

#### Multiple Loading States
```tsx
import { useMultipleLoading } from '../../hooks/useLoading';

const { loadingStates, setLoading, isAnyLoading, isAllLoading } = useMultipleLoading([
  'user', 'posts', 'comments'
]);

// Set individual loading states
setLoading('user', true);
setLoading('posts', false);
```

#### Loading with Retry
```tsx
import { useLoadingWithRetry } from '../../hooks/useLoading';

const { isLoading, retryCount, error, execute } = useLoadingWithRetry(
  () => fetch('/api/data'),
  { maxRetries: 3, retryDelay: 1000 }
);
```

## Usage Examples

### Page-Level Loading
```tsx
import React, { useState, useEffect } from 'react';
import { InlineLoader } from '../Spinner';
import { GridSkeleton } from './LoadingSkeleton';

const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(() => setIsLoading(false));
  }, []);

  return (
    <InlineLoader 
      isLoading={isLoading} 
      fallback={<GridSkeleton items={6} columns={3} />}
    >
      <div>
        {/* Your content here */}
      </div>
    </InlineLoader>
  );
};
```

### Button Loading State
```tsx
import { LoadingButton } from '../Spinner';
import { useLoading } from '../../hooks/useLoading';

const MyComponent = () => {
  const { isLoading, executeWithLoading } = useLoading();

  const handleSubmit = async () => {
    await executeWithLoading(async () => {
      await submitForm();
    });
  };

  return (
    <LoadingButton
      isLoading={isLoading}
      onClick={handleSubmit}
      className="neon-button"
    >
      Submit Form
    </LoadingButton>
  );
};
```

### Complex Loading States
```tsx
import { useMultipleLoading } from '../../hooks/useLoading';
import { InlineLoader } from '../Spinner';
import { CardSkeleton, TextSkeleton } from './LoadingSkeleton';

const Dashboard = () => {
  const { loadingStates, setLoading } = useMultipleLoading(['stats', 'charts', 'recent']);

  return (
    <div>
      <InlineLoader 
        isLoading={loadingStates.stats} 
        fallback={<CardSkeleton />}
      >
        <StatsComponent />
      </InlineLoader>

      <InlineLoader 
        isLoading={loadingStates.charts} 
        fallback={<TextSkeleton lines={3} />}
      >
        <ChartsComponent />
      </InlineLoader>
    </div>
  );
};
```

## Testing

### Demo Pages
- `/loading-demo` - Interactive demonstration of all loading components
- `/loading-test` - Comprehensive test suite for loading functionality

### Test Components
- `LoadingDemo.tsx` - Full-featured demo with interactive examples
- `LoadingTest.tsx` - Simple test component for verification

## Best Practices

1. **Use appropriate skeleton types** - Match skeleton shapes to actual content
2. **Implement loading states early** - Add loading states during initial development
3. **Use debounced loading** - For search and filter operations
4. **Provide feedback** - Always show loading indicators for async operations
5. **Handle errors gracefully** - Combine loading states with error handling
6. **Test loading states** - Verify loading components work in all scenarios

## Styling

All loading components use Tailwind CSS classes and follow the application's design system:
- Primary colors: cyan-400, purple-400, pink-400
- Background: gray-900 with various opacity levels
- Animations: smooth transitions and pulse effects
- Responsive: Works on all screen sizes

## Performance Considerations

- Skeletons are lightweight and render quickly
- Spinners use CSS animations for smooth performance
- Loading states are managed efficiently with React hooks
- Debounced loading prevents excessive API calls
- Components are optimized for re-rendering
