import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTimer } from './useTimer';


function App() {
  // object destructuring val&fun from reacthook usetIMER
  const { secondsLeft, isRunning, startTimer, pauseTimer, resetTimer } = useTimer(60); 

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Countdown Timer</h1>
      <h2>{secondsLeft} second{secondsLeft !== 1 ? 's' : ''} left</h2>             
      <p>Status: {isRunning ? 'Running' : 'Paused'}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;