import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const { phoneNumber, password } = formData;

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

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with matching phone number and password
    const user = users.find((user) => user.phoneNumber === phoneNumber && user.password === password);
    if (user) {
      setMessage('Login successful');
    } else {
      setMessage('Invalid phone number or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone number:</label>
          <input type="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}

      {/* Link to the Register Page */}
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;