import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-3xl font-bold text-gray-900 mb-6">Redux Counter App</h1>
  <Counter />
</div>

  );
}

export default App;
