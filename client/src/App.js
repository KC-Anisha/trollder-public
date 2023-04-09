import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar';
import './styles/app.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage';
import DashboardPage from './components/Dashboard';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Spinner from 'react-bootstrap/Spinner';

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    // Unsubscribe on unmount
    return unsubscribe
  }, [])

  return (
    <div className='waves'>
      <MyNavbar />
      {loading ?
        <div className='both-center'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        :
        <Router>
          <Routes>
            <Route path="/"
              element={user ? <DashboardPage user={user} /> : <HomePage />} />
            <Route
              path="/dashboard"
              element={user ? <DashboardPage user={user} /> : <Navigate to="/" />}
            />
            {/* <Route path="/profile/:id" element={<ProfilePage />} /> */}
          </Routes>
        </Router>}
    </div>
  );
}