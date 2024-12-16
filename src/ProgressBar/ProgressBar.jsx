import React, { useEffect, useState } from "react";
import "./index.css";

const ProgressBar = () => {
  const [isbar, setIsBar] = useState(0);

  useEffect(() => {
    let BarInterval = setInterval(() => {
      setIsBar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(BarInterval);
          return prevBar;
        }
        return prevBar + 5;
      });
    }, 150);

    return () => clearInterval(BarInterval);
  }, []);
  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${isbar - 100}%)` }}
        className="progress"
      ></div>
    </div>
  );
};

export default ProgressBar;
