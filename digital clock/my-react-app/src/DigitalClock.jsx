import React, { useState, useEffect } from "react";
import { use } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {       //starts a timer that runs every 1000 milliseconds 
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);          //stops the timer, so it doesn’t keep running
        }
    }, []);
  
    const formatTime = (date) => {
    return date.toLocaleTimeString();            //formats the date as a human-readable time string based on the user's local time settings
  };
  
    return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <div className="clock">{formatTime(time)}</div>
    </div>
  ); 
}
export default DigitalClock