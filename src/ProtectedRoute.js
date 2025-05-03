import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, role }) {
  const storedRole = localStorage.getItem('role');
  if (storedRole !== role) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
