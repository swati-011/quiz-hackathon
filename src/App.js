import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import './theme.css';

const App = () => {
  // persist theme in localStorage so it sticks across visits
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <header>
        <h1>🧠 React Quiz App</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <Quiz />
    </div>
  );
};

export default App;

