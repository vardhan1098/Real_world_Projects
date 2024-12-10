import React, { useState } from 'react';

function Question({ question, options, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => handleAnswer(option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;