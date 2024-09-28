import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';

const db = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    condition: 'Good',
    owner: 'Alice'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    condition: 'Excellent',
    owner: 'Bob'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    condition: 'Fair',
    owner: 'Charlie'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    condition: 'Good',
    owner: 'Diana'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    condition: 'Excellent',
    owner: 'Eve'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    condition: 'Good',
    owner: 'Frank'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Classic',
    condition: 'Fair',
    owner: 'Grace'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    condition: 'Excellent',
    owner: 'Hank'
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    genre: 'Epic',
    condition: 'Good',
    owner: 'Irene'
  },
  {
    title: 'Harry Potter and the Sorcerer’s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    condition: 'Excellent',
    owner: 'Jack'
  },
  {
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
    condition: 'Good',
    owner: 'Lily'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Sci-Fi',
    condition: 'Excellent',
    owner: 'Mason'
  }
];

function Advanced() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
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
    <div>
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
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}

export default Advanced;