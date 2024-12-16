import React, { useEffect, useRef, useState } from "react";

const Watch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunnning] = useState(false);
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartandStop = () => {
    setIsRunnning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunnning(false);
    setTime(0);
  };

  const handleLaps = () => {
    setLaps((prev) => [...prev, formattedTime(laps)]);
  };

  const formattedTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}: ${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stop Watch :{formattedTime()}</h1>
      <>
        <button onClick={handleLaps} disabled={!isRunning}>🚩</button>
        {isRunning ? (
          <button onClick={handleStartandStop}>Stop</button>
        ) : (
          <button onClick={handleStartandStop}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </>
      <>
        {laps.map((item, index) => (
          <li key={item}>
            {index + 1}: Laps {item}
          </li>
        ))}
      </>
    </div>
  );
};

export default Watch;
