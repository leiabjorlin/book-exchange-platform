
import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const db = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    condition: 'Good',
    owner: 'Alice',
    match: 'yes'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    condition: 'Excellent',
    owner: 'Bob',
    match: 'yes'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    condition: 'Fair',
    owner: 'Charlie',
    match: 'yes'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    condition: 'Good',
    owner: 'Diana',
    match: 'no'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    condition: 'Excellent',
    owner: 'Eve',
    match: 'yes'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    condition: 'Good',
    owner: 'Frank',
    match: 'no'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Classic',
    condition: 'Fair',
    owner: 'Grace',
    match: 'yes'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    condition: 'Excellent',
    owner: 'Hank',
    match: 'yes'
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    genre: 'Epic',
    condition: 'Good',
    owner: 'Irene',
    match: 'no'
  },
  {
    title: 'Harry Potter and the Sorcerer’s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    condition: 'Excellent',
    owner: 'Jack',
    match: 'yes'
  },
  {
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
    condition: 'Good',
    owner: 'Lily',
    match: 'no'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Sci-Fi',
    condition: 'Excellent',
    owner: 'Mason',
    match: 'no'
  }
];

function SwipingCards() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [showMatch, setShowMatch] = useState(false);
  const [matchedBook, setMatchedBook] = useState(null);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () => Array(db.length).fill(0).map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, titleToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    
    if (direction === 'right' && db[index].match === 'yes') {
      setMatchedBook(db[index]);
      setShowMatch(true);
    }
  };

  const outOfFrame = (title, idx) => {
    console.log(`${title} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className='cards'>
      <h1>Book Swipe</h1>
      <div className="cardContainer">
        {db.map((book, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={book.title}
            onSwipe={(dir) => swiped(dir, book.title, index)}
            onCardLeftScreen={() => outOfFrame(book.title, index)}
          >
            <div className="card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Condition: {book.condition}</p>
              <p>Owner: {book.owner}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
          onClick={() => swipe('left')}
        >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canGoBack && '#c3c4d3' }}
          onClick={() => goBack()}
        >
          Undo swipe!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
          onClick={() => swipe('right')}
        >
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get undo button available!
        </h2>
      )}
      <Popup open={showMatch} closeOnDocumentClick onClose={() => setShowMatch(false)}>
        <div className="popup-content">
          <h2>Yay, it's a match!</h2>
          {matchedBook && (
            <p>You can now chat with {matchedBook.owner} in your chats to arrange the details of the book exchange.</p>
          )}
          <button onClick={() => setShowMatch(false)}>Close</button>
        </div>
      </Popup>
    </div>
  );
}

export default SwipingCards;