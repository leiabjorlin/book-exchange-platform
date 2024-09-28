import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const { name, phoneNumber, password } = formData;

  //Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const existingUser = users.find((user) => user.phoneNumber === phoneNumber);
    if (existingUser) {
      setMessage('User already exists');
      return;
    }

    //Add new user to users array
    const newUser = { name, phoneNumber, password };
    users.push(newUser);

    //Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    setMessage('User registered successfully');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </div>
        <div>
          <label>phone number:</label>
          <input type="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      {/* Link to the Register Page */}
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default Register;