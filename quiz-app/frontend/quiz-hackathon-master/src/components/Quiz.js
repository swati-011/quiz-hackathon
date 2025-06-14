import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';
import Timer from './Timer';

const TIME_PER_QUESTION = 15; // seconds

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Fetch questions from backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Failed to load questions:', err));
  }, []);

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore((s) => s + 1);
    }
    nextQuestion();
  };

  const handleExpire = () => {
    nextQuestion();
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (questions.length === 0) {
    return <p>Loading quiz...</p>;
  }

  if (finished) {
    return (
      <Result
        score={score}
        total={questions.length}
        onRestart={restart}
      />
    );
  }

  return (
    <>
      <Timer seconds={TIME_PER_QUESTION} onExpire={handleExpire} />
      <Question
        data={questions[current]}
        onAnswer={handleAnswer}
        qNum={current + 1}
      />
    </>
  );
};

export default Quiz;
