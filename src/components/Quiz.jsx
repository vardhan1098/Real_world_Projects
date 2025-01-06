import React, { useState } from "react";
import Result from "./Result";
import Question from "./Question";
import { Questions } from "../data/Questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectOption) => {
    const updatedAnwer = [
      ...answers,
      {
        question: Questions[currentQuestionIndex].question,
        selectOption,
        correctAnswer: Questions[currentQuestionIndex].answer,
      },
    ];
    setAnswers(updatedAnwer);

    const currentQuestion = Questions[currentQuestionIndex].answer;

    if (selectOption === currentQuestion) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < Questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} answers={answers} total={Questions.length} />
      ) : (
        <Question
          question={Questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
