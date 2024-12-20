import React, { useState } from "react";

const questions = [
  {
    question: "ReactJS",
    Answer: "A React JS Library used bulid web applications..",
  },
  {
    question: "Redux",
    Answer:
      "A redux is statemangament library and that accessible to all components",
  },
  {
    question: "css",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quasi",
  },
];

const Accord = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div>
      <div>
        {questions.map((item, idx) => (
          <div
            key={idx}
            style={{ border: "1px solid black", marginBottom: "10px" }}
          >
            <h2>{item.question}</h2>
            <button onClick={() => handleToogle(idx)}>
              {isOpen ? "-" : "+"}
            </button>

            {isOpen === idx && (
              <div key={idx}>
                <h3>{item.Answer}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accord;
