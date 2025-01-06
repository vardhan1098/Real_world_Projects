import React from "react";
import Resulted from "./Resulted";

const Result = ({ score, total, answers }) => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Quiz Completed</h2>
      <>
        <p>
          Your Score is {score} out of {total}
        </p>
        <h4>Review Answers..</h4>
        <ul>
          {answers.map((answer, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              <strong>
                Q{idx + 1}: {answer.question}
              </strong>
              <br />
              <span
                style={{
                  color:
                    answer.selectOption === answer.correctAnswer
                      ? "green"
                      : "red",
                }}
              >
                Your Answer: {answer.selectOption}
              </span>
              <br />
              <span>Correct Answer: {answer.correctAnswer}</span>
            </li>
          ))}
        </ul>
      </>
      <span>
        To Start Again <button onClick={handleRestart}>Restart Quiz</button>
      </span>
    </div>
  );
};

export default Result;
