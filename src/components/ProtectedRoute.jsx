// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth, children }) => {
  return auth ? children : <Navigate to="/jeffxthrysha-website/" />;
};

export default ProtectedRoute;
