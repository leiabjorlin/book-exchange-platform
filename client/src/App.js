import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Platform from './components/Platform.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/platform" element={<Platform />} />
        </Routes>
    </Router>
  );
}

export default App;
