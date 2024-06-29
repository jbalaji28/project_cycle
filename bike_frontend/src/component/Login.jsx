// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import supabase from '../services/supabase';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const { user, error } = await supabase.auth.signIn({
        email: username,
        password: password
      });

      if (error) {
        setError(error.message);
      } else {
        handleLogin(user.email); // Example: Pass authenticated user email to parent component
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error">{error}</div>}
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username" 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
