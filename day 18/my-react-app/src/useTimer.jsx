import { useState, useEffect, useRef } from 'react';

export function useTimer(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {                                               //starts timer whn isrun is true
      intervalRef.current = setInterval(() => {                     //Stores the interval ID in intervalRef.current so we can later clear it
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);           //Stops the timer using the ID stored in intervalRef
            setIsRunning(false);                                 //isrun is in pause state
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);        //Ensures no duplicate intervals run anad clear the prev one bef nw one starts
  }, [isRunning]);

  const startTimer = () => {
    if (!isRunning && secondsLeft > 0) {                         //s till time left to count down
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);                       //timer is no longer running& stops the timer by clearing the current interval
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);                              //Clears the active interval and reset bakc to original state
    setSecondsLeft(initialSeconds);
  };

  return {
    secondsLeft,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}
