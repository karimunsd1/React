import React from 'react';
import NotifyButton from './NotifyButton';
import Notification from './Notification';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Redux Notification App</h1>
      <NotifyButton />
      <Notification />
    </div>
  );
};

export default App;
