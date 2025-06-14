 import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../services/storageService';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchLeaderboard().then(setScores);
  }, []);

  if (!scores.length) return null;

  return (
    <div className="leaderboard">
      <h3>🏆 Top Scores</h3>
      <ol>
        {scores.map((s, i) => (
          <li key={i}>
            <div className="score-info">
              <div className="rank-circle">{i + 1}</div>
              <span>{s.name}</span>
            </div>
            <span>{s.score}/{s.total}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
