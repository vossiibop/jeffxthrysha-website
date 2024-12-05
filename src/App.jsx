import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  useState("")
  const [auth, setAuth] = useState(false);

  return (
    <Router basename='jeffxthrysha-website'>
      <AnimatedRoutes />
    </Router>
  );
}