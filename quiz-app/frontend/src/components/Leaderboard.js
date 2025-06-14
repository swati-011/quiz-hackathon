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
            {s.name}: {s.score}/{s.total}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
