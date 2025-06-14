// src/App.js
import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import ThemeToggle from './components/ThemeToggle';
import AuthForm from './components/Auth/AuthForm';
import CategorySelector from './components/CategorySelector'; // ✅ import it
import './App.css';
import './theme.css';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const [category, setCategory] = useState(null); // ✅ store selected category

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCategory(null); // reset category on logout
  };

  return (
    <div className="App">
      <header>
        <h1>🧠  Quiz App</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-btn">
            🔓 Logout
          </button>
        )}
      </header>

      {!isLoggedIn ? (
        <AuthForm onLogin={handleLogin} />
      ) : !category ? (
        <CategorySelector onSelect={setCategory} />
      ) : (
        <Quiz category={category} />
      )}
    </div>
  );
};

export default App;
