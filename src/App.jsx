import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedPage from './components/ProtectedPage';

import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  useState("")
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}