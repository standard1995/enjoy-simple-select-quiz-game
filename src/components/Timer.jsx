import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds = 60 }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false); // Stop the timer when it reaches zero
    }

    // Cleanup function to clear the interval when the component unmounts
    // or when dependencies change and a new interval is set
    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft]); // Re-run effect when isRunning or secondsLeft changes

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  return (
    <div>
      <h1>Time Left: {secondsLeft}s</h1>
      <button onClick={startTimer} disabled={isRunning || secondsLeft === 0}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownTimer;