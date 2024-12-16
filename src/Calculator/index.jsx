import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [value, setValues] = useState(""); // Tracks the current input as a string
  const [result, setResult] = useState(null); // Stores the calculated result

  const handleValues = (num) => {
    setValues((prev) => prev + num);
  };
  console.log('first step', value);
  

  const calculateResult = () => {
    try {
      const calculated = Function(`return ${value}`);
      setResult(calculated)
    } catch (error) {
      setResult(error);
    }
  };

  const clearValues = () => {
    setValues(""); // Reset the input
    setResult(null); // Reset the result
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <div className="display">
        <p>Input: {value}</p>
        <p>Result: {result !== null ? result : "N/A"}</p>
      </div>
      <div className="column">
        <span onClick={() => handleValues("+")}>+</span>
        <span onClick={() => handleValues("-")}>-</span>
        <span onClick={() => handleValues("*")}>*</span>
        <span onClick={() => handleValues("/")}>/</span>
      </div>
      <div className="column">
        <span onClick={() => handleValues("7")}>7</span>
        <span onClick={() => handleValues("8")}>8</span>
        <span onClick={() => handleValues("9")}>9</span>
      </div>
      <div className="column">
        <span onClick={() => handleValues("4")}>4</span>
        <span onClick={() => handleValues("5")}>5</span>
        <span onClick={() => handleValues("6")}>6</span>
      </div>
      <div className="column">
        <span onClick={() => handleValues("1")}>1</span>
        <span onClick={() => handleValues("2")}>2</span>
        <span onClick={() => handleValues("3")}>3</span>
      </div>
      <div className="column">
        <span onClick={() => handleValues("00")}>00</span>
        <span onClick={() => handleValues("0")}>0</span>
        <span onClick={calculateResult}>=</span>
        <span onClick={clearValues}>C</span>
      </div>
    </div>
  );
};

export default Calculator;
