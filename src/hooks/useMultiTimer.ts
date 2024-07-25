import { useRef } from 'react';

const useMultiTimer = () => {
  const timers = useRef<
    Record<
      string,
      {
        elapsedTime: number;
        intervalId: ReturnType<typeof setInterval> | null;
        isRunning: boolean;
      }
    >
  >({});
  const createTimer = (key: string, initialState = 0, running = false) => {
    if (running) {
      startTimer(key, initialState);
    } else {
      timers.current[key] ??= {
        elapsedTime: initialState,
        intervalId: null,
        isRunning: running,
      };
    }
  };
  const setTimer = (key: string, time = 0, running = false) => {
    timers.current[key] = {
      intervalId: null,
      ...(timers.current[key] ?? {}),
      isRunning: running,
      elapsedTime: time,
    };
    if (running) {
      startTimer(key, time);
    }
  };
  const startTimer = (key: string, initialState = 0) => {
    timers.current[key] ??= {
      elapsedTime: initialState,
      intervalId: null,
      isRunning: false,
    };

    const startTime = Date.now() - timers.current[key].elapsedTime;
    timers.current[key].intervalId = setInterval(() => {
      timers.current[key]!.elapsedTime = Date.now() - startTime;
    }, 1);
    timers.current[key].isRunning = true;
  };

  const pauseTimer = (key: string) => {
    if (timers.current[key]) {
      clearInterval(timers.current[key].intervalId!);
      timers.current[key].isRunning = false;
    }
  };

  const resetTimer = (key: string) => {
    if (timers.current[key]) {
      clearInterval(timers.current[key].intervalId!);
      timers.current[key].elapsedTime = 0;
      timers.current[key].isRunning = false;
    }
  };

  const getElapsedTime = (key: string) => {
    return timers.current[key]?.elapsedTime ?? 0;
  };

  const isTimerRunning = (key: string) => {
    return timers.current[key]?.isRunning ?? false;
  };

  return {
    startTimer,
    pauseTimer,
    createTimer,
    setTimer,
    resetTimer,
    getElapsedTime,
    isTimerRunning,
  };
};

export default useMultiTimer;
