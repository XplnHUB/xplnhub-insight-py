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

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggle}
      className="theme-toggle inline-flex items-center justify-center w-10 h-10 rounded-full transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
