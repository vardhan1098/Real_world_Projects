import React, { useEffect, useRef, useState } from "react";

function Count() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartandStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleLaps = () => {
    setLaps((prevLap) => [...prevLap, formattedTime()]);
  };

  const formattedTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}: ${milliseconds.toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <h2>StopWatch:{formattedTime()}</h2>
      {isRunning ? (
        <button onClick={handleStartandStop}>stop</button>
      ) : (
        <button onClick={handleStartandStop}>Start</button>
      )}
      <button onClick={handleLaps} disabled={!isRunning}>🚩</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap: {index + 1}
            {lap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Count;
