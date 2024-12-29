import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 text-gray-900 bg-gray-200 rounded-full shadow-md dark:bg-gray-700 dark:text-gray-100"
    >
      {isDark ? (
        <FaSun className="text-xl text-white" />
      ) : (
        <FaMoon className="text-xl text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
