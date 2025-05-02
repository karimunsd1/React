import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SmartDataFetcher from './SmartDataFetcher';

function App() {
  const [resourceId, setResourceId] = useState('1');            //initially set to the string '1' if we change update it '2' render the component to new value
  const [workspaceEnabled, setWorkspaceEnabled] = useState(true);     //boolean state variable that determines workspace is active or not

  return (
    <div className="p-4">
      <h1>Smart Data Fetcher Demo</h1>
      <button onClick={() => setWorkspaceEnabled(prev => !prev)}>
        Toggle Workspace ({workspaceEnabled ? 'Enabled' : 'Disabled'})
      </button>
      <input
        type="text"
        value={resourceId}
        onChange={(e) => setResourceId(e.target.value)}
        placeholder="Enter Resource ID"
        className="ml-2 border p-1"
      />
      <SmartDataFetcher resourceId={resourceId} workspaceEnabled={workspaceEnabled} />
    </div>
  );
}


export default App
