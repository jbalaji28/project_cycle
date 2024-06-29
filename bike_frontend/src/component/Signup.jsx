// Signup.js

import React, { useState } from 'react';
import './signup.css'; // Import the CSS file for styling
import supabase from '../services/supabase'; // Import the Supabase client

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password || !confirmPassword) {
      setError('Please enter all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Use Supabase to sign up the user
      const { user, error } = await supabase.auth.signUp({
        email: username,
        password: password
      });

      if (error) {
        setError(error.message);
      } else {
        setError('');
        // Handle success (e.g., redirect to login page)
        console.log('User signed up:', user);
        // Redirect or handle success in your application
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
      setError('Signup failed. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
