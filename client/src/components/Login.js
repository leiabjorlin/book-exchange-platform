import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const { email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      // Save the logged-in user's info (email, favoriteGenres) to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({
        email: user.email,
        favoriteGenres: user.favoriteGenres
      }));
      
      setMessage('Login successful');
      navigate('/platform'); // Redirect to the platform after successful login
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className='app-container'>
      <div className="welcome-section">
        <h1>Welcome to the Book Exchange Platform!</h1>
        <p>Find, exchange, and share books with others in your community.</p>
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
        <p><Link to="/register">Don't have an account? Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
