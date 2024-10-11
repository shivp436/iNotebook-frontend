import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  element: React.ReactElement;
}

const Public: React.FC<PublicRouteProps> = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const token = localStorage.getItem('inotebook-token');
  const url = `http://localhost:3000/i-notebook/api/v1/auth/verify-token`;

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        const data = await response.json();
        if (data.success === true) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [token, url]);

  if (isAuthenticated === null) {
    // Optionally, you can return a loading spinner or some placeholder here
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Navigate to='/' /> : element;
};

export default Public;
