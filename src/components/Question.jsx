import React, { useEffect, useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected option;
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option); // Set the selected option
      setIsAnswered(true);
      onAnswer(option); // Call the parent function to process the answer
    }
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleOptionClick(option)}
          style={{
            backgroundColor: selectedOption === option ? "lightblue" : "white",
            color: selectedOption === option ? "white" : "black",
            padding: "10px",
            margin: "5px",
            borderRadius: "10px",
            border: "0.4px solid black",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
   
    </div>
  );
};

export default Question;
