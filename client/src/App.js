import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="welcome-section">
          <h1>Welcome to the Book Exchange Platform!</h1>
          <p>Find, exchange, and share books with others in your community.</p>
        </div>
        <div className="form-section">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
