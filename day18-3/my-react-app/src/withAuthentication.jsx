import React from 'react';
import { useAuth } from './AuthContext';

function withAuthentication(WrappedComponent) {
  return function AuthWrapped(props) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <p>Please log in to view this content.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuthentication;
