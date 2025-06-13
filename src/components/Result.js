import React, { useState } from 'react';
import { saveScore } from '../services/storageService';
import Leaderboard from './Leaderboard';

const Result = ({ score, total, onRestart }) => {
  const percent = ((score / total) * 100).toFixed(0);
  const [name, setName] = useState('');

  const handleSave = async () => {
    if (name.trim()) await saveScore({ name, score, total });
    setName('');
  };

  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Score: <strong>{score}</strong> / {total} ({percent}%)
      </p>

      <div className="save-score">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleSave}>Save to Leaderboard</button>
      </div>

      <button onClick={onRestart}>🔄 Restart Quiz</button>

      <Leaderboard />
    </div>
  );
};

export default Result;
