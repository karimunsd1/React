import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => setIsAuthenticated(prev => !prev);

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}                                                          
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


//holds and provides authentication-related state and functions across your entire React application