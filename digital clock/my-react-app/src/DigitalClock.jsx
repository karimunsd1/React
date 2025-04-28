import React, { useState, useEffect } from "react";
import { use } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);
  
    const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
  
    return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <div className="clock">{formatTime(time)}</div>
    </div>
  ); 
}
export default DigitalClock