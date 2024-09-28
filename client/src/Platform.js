import React, { useState } from 'react';
import './App.css';
import SwipingCards from './SwipingCards';
import ChatsPage from './ChatsPage';

function Platform() {
  const [currentPage, setCurrentPage] = useState('book-swipe');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#book-swipe" onClick={() => handleNavClick('book-swipe')}>
              Swipe Books
            </a>
          </li>
          <li>
            <a href="#chats" onClick={() => handleNavClick('chats')}>
              Chats
            </a>
          </li>
        </ul>
      </nav>
      {currentPage === 'book-swipe' ? (
        <SwipingCards />
      ) : currentPage === 'chats' ? (
        <ChatsPage />
      ) : null}
    </div>
  );
}

export default Platform;