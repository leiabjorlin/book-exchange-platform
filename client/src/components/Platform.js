import React, { useState } from 'react';

const Platform = () => {
  // List of books available for exchange (with genre and condition)
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', owner: 'Alice', genre: 'Fiction', condition: 'Good' },
    { id: 2, title: '1984', author: 'George Orwell', owner: 'Bob', genre: 'Dystopian', condition: 'Excellent' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', owner: 'Charlie', genre: 'Classic', condition: 'Fair' },
    { id: 4, title: 'Moby-Dick', author: 'Herman Melville', owner: 'Diana', genre: 'Adventure', condition: 'Good' },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', owner: 'Eve', genre: 'Romance', condition: 'Excellent' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', owner: 'Frank', genre: 'Fantasy', condition: 'Good' },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', owner: 'Grace', genre: 'Classic', condition: 'Fair' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', owner: 'Hank', genre: 'Dystopian', condition: 'Excellent' },
    { id: 9, title: 'The Odyssey', author: 'Homer', owner: 'Irene', genre: 'Epic', condition: 'Good' },
    { id: 10, title: 'Harry Potter and the Sorcerer’s Stone', author: 'J.K. Rowling', owner: 'Jack', genre: 'Fantasy', condition: 'Excellent' },
    { id: 11, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', owner: 'Lily', genre: 'Mystery', condition: 'Good' }, // Mystery genre
    { id: 12, title: 'Dune', author: 'Frank Herbert', owner: 'Mason', genre: 'Sci-Fi', condition: 'Excellent' }, // Sci-Fi genre
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle genre filter change
  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  // Function to handle condition filter change
  const handleConditionChange = (e) => {
    setFilterCondition(e.target.value);
  };

  // Filter books based on search query, genre, and condition
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = filterGenre ? book.genre === filterGenre : true;
    const matchesCondition = filterCondition ? book.condition === filterCondition : true;
    return matchesSearch && matchesGenre && matchesCondition;
  });

  // Function to request a book (book exchange logic)
  const handleRequestBook = (bookTitle) => {
    setMessage(`You have requested "${bookTitle}"`);
  };

  return (
    <div className="platform-container">
      <h1>Book Exchange Platform</h1>
      <p>Find, exchange, and share books with others in the community.</p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Genre Filter */}
      <select value={filterGenre} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
        <option value="Adventure">Adventure</option>
        <option value="Romance">Romance</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Epic">Epic</option>
      </select>

      {/* Condition Filter */}
      <select value={filterCondition} onChange={handleConditionChange}>
        <option value="">All Conditions</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>

      {/* Display book listings */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Owner: {book.owner}</p>
              <p>Genre: {book.genre}</p>
              <p>Condition: {book.condition}</p>
              <button onClick={() => handleRequestBook(book.title)}>Request Exchange</button>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>

      {/* Display message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Platform;
