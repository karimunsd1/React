import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import DashboardContent from './DashboardContent';
import withAuthentication from './withAuthentication';

const ProtectedDashboard = withAuthentication(DashboardContent);           //a function that takes a component (DashboardContent) as input and returns a new component

function AuthToggle() {
  const { isAuthenticated, toggleAuth } = useAuth();

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>                               
      <div style={{ padding: '2rem' }}>
        <h1>HOC Auth Example</h1>
        <AuthToggle />
        <ProtectedDashboard />
      </div>
    </AuthProvider>
  );
}

export default App;