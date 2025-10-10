import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'insight-theme';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // apply theme to document on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null;
      const initial = saved ?? 'dark';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    } catch (e) {
      // If localStorage is not available, default to dark
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  };
  const isDark = theme === 'dark';
  return (
    <button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggle}
      className="group relative inline-flex items-center w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 hover:scale-105 active:scale-95"
      style={{
        background: isDark ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
      }}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{
          background: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(251, 191, 36, 0.4)'
        }}
      />
      <div className="absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
        style={{
          transform: isDark ? 'translateX(0)' : 'translateX(24px)',
          background: isDark ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
        }}
      >
      {isDark ? (<Moon className="w-4 h-4 text-white" />) : (<Sun className="w-4 h-4 text-amber-500" />)}
      </div>
    </button>
  );
};

export default ThemeToggle;
