import React, { useState } from 'react'
import {  AnimatePresence } from 'motion/react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login'
import ProtectedRoute from './ProtectedRoute';
import ProtectedPage from './ProtectedPage';

function AnimatedRoutes() {
    useState("")
    const [auth, setAuth] = useState(false);
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Login setAuth={setAuth} />} />
            <Route path="/home" element={
                <ProtectedRoute auth={auth}>
                  <ProtectedPage />
                </ProtectedRoute>
            }
            />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes