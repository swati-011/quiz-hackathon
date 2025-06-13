import React, { useEffect, useState } from 'react';

const Timer = ({ seconds, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds);          // reset when question changes
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      onExpire();
      return;                      // stop here
    }
    const id = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft, onExpire]);

  return (
    <div className="timer">
      ⏱ {timeLeft}s
    </div>
  );
};

export default Timer;
