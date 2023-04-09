import React from 'react';
import MyNavbar from './components/Navbar';
import './styles/app.css';

export default function App() {

  return (
    <div className='waves'>
      <MyNavbar />
      <div className='both-center'>
          <h1 className='hero-text'>Meet your #1 <br></br> match! </h1>
          <button className='hero-signup-button'>Get Started</button>
          <button className='hero-login-button'>Log In</button>
        </div>
    </div>
  );
}