import { useState, useCallback } from 'react';

// Basic loading hook
export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const executeWithLoading = useCallback(async <T>(
    asyncFunction: () => Promise<T>
  ): Promise<T> => {
    try {
      startLoading();
      const result = await asyncFunction();
      return result;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  return {
    isLoading,
    startLoading,
    stopLoading,
    executeWithLoading
  };
};

// Debounced loading hook
export const useDebouncedLoading = (delay: number = 300) => {
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const setLoading = useCallback((loading: boolean) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (loading) {
      setIsLoading(true);
    } else {
      const id = setTimeout(() => {
        setIsLoading(false);
      }, delay);
      setTimeoutId(id);
    }
  }, [delay, timeoutId]);

  return {
    debouncedLoading: isLoading,
    setLoading
  };
};

// Async operation hook
interface UseAsyncOperationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onFinally?: () => void;
}

export const useAsyncOperation = <T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOperationOptions<T> = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await asyncFunction();
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      options.onError?.(error);
      throw error;
    } finally {
      setIsLoading(false);
      options.onFinally?.();
    }
  }, [asyncFunction, options]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
    execute,
    reset
  };
};

// Multiple loading states hook
export const useMultipleLoading = (keys: string[]) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    keys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const setLoading = useCallback((key: string, loading: boolean) => {
    setLoadingStates(prev => ({ ...prev, [key]: loading }));
  }, []);

  const setAllLoading = useCallback((loading: boolean) => {
    setLoadingStates(prev => 
      Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: loading }), {})
    );
  }, []);

  const isAnyLoading = Object.values(loadingStates).some(Boolean);
  const isAllLoading = Object.values(loadingStates).every(Boolean);

  return {
    loadingStates,
    setLoading,
    setAllLoading,
    isAnyLoading,
    isAllLoading
  };
};

// Loading with retry hook
interface UseLoadingWithRetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  onRetry?: (attempt: number) => void;
}

export const useLoadingWithRetry = <T>(
  asyncFunction: () => Promise<T>,
  options: UseLoadingWithRetryOptions = {}
) => {
  const { maxRetries = 3, retryDelay = 1000, onRetry } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (): Promise<T> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        setIsLoading(true);
        setError(null);
        const result = await asyncFunction();
        setRetryCount(0);
        return result;
      } catch (err) {
        lastError = err instanceof Error ? err : new Error('Unknown error');
        
        if (attempt < maxRetries) {
          setRetryCount(attempt + 1);
          onRetry?.(attempt + 1);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
        }
      } finally {
        setIsLoading(false);
      }
    }
    
    setError(lastError);
    throw lastError;
  }, [asyncFunction, maxRetries, retryDelay, onRetry]);

  const reset = useCallback(() => {
    setRetryCount(0);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    retryCount,
    error,
    execute,
    reset
  };
};
