'use client';

import { useState, useEffect } from 'react';
import PasswordProtection from './PasswordProtection';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkAuth = () => {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const { expiresAt } = JSON.parse(auth);
        if (new Date().getTime() < expiresAt) {
          setIsAuthenticated(true);
        } else {
          // Clean up expired auth
          localStorage.removeItem('auth');
        }
      }
    };

    checkAuth();
  }, []);

  // Don't render anything until we're on the client side
  if (!isClient) {
    return null;
  }

  if (!isAuthenticated) {
    return <PasswordProtection />;
  }

  return children;
}
