//src/components/Question.js
import React from 'react';

const Question = ({ data, onAnswer, qNum }) => (
  <div className="question-card">
    <h2>Question {qNum}</h2>
    <p>{data.question}</p>
    {data.options.map((opt, i) => (
      <button key={i} onClick={() => onAnswer(opt)}>
        {opt}
      </button>
    ))}
  </div>
);

export default Question;
