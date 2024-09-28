import React, { useState } from 'react';
import './App.css';
import SwipingPage from './SwipingPage';

function LandingPage({ onStart }) {
  return (
    <div className='landing-page'>
      <h1>Welcome to the Peer-to-Peer Book Exchange Platform</h1>
      <p>Find and exchange books with others in your community</p>
      <div className='buttons'>
        <button onClick={onStart}>
          Start Swiping
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showSwiping, setShowSwiping] = useState(false);

  const handleStartSwiping = () => {
    setShowSwiping(true);
  };

  return (
    <div className='app'>
      {showSwiping ? <SwipingPage /> : <LandingPage onStart={handleStartSwiping} />}
    </div>
  );
}

export default App;
