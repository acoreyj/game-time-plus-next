import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  const [elapsedTime, setElapsedTime] = useState(initialState);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    const startTime = Date.now() - elapsedTime;
    countRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 10);
    setIsRunning(true);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsRunning(false);
    setElapsedTime(0);
  };

  return { elapsedTime, isRunning, handleStart, handlePause, handleReset };
};

export default useTimer;
