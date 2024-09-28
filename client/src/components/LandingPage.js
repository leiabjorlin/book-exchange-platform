import React from 'react';
import Login from './Login'; // Ensure to import your Login component

const LandingPage = () => {
    return (
        <div className="app-container">
            <div className="welcome-section">
                <h1>Welcome to the Book Exchange Platform!</h1>
                <p>Exchange books with fellow readers and discover new stories!</p>
            </div>
            <div className="form-section">
                <div className="form-container">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
