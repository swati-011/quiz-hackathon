import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    className="theme-toggle"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    title="Toggle theme"
  >
    {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
  </button>
);

export default ThemeToggle;
