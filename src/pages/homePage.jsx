import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>This is a simple homepage built with React.</p>
      <button onClick={() => alert('Button clicked!')}>
        Get Started
      </button>
      <Link to="/login" className="login-link">
        Login
      </Link>
    </div>
  );
}
