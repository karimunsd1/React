import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [elapsedtime, setElapsedTime] = useState(0);         //state that keeps track of how much time has passed
    const [isRunning, setIsRunning] = useState(false);     //boolean state to know if the stopwatch is currently running or paused
    const intervalIdRef = useRef(null);                 //It will store the ID of your running timer
    const startTimeRef = useRef(0);               //It will remember the time when the stopwatch was started

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current=setInterval(() => {                      //stores the ID of this timer so you can stop it later
                setElapsedTime(Date.now() - startTimeRef.current);      //how much time has passed since you started
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);               //when isRunning changes (true → false or false → true)
        }

    }, [isRunning]); 

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedtime;                      //starts the timer
    }
     
    function stop() {                        
        setIsRunning(false);                           // which will trigger the cleanup in your useEffect and stops timer
    }
     
    function reset() {
        setElapsedTime(0);                             //Resets the time back to 0 and stops the timer
        setIsRunning(false);
    }

    function formatTime() {

        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedtime / (1000) % 60);
        let milliseconds = Math.floor((elapsedtime % 1000) / 10);
        
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");
        return `${minutes}:${seconds}:${milliseconds}`;
    }
    return (<div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button onClick={start} className="start-button">Start</button>
            <button onClick={stop} className="stop-button">Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>
        </div>
    </div>);
}
 export default Stopwatch