import React, { useState } from 'react';
import './Book.css';  // Import Book-specific CSS

const Book = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBookClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="book" onClick={handleBookClick}>
      <div className={`cover ${isFlipped ? 'flipped' : ''}`}>
        <h2>Book Title</h2>
      </div>
      <div className="page">
        <div className="page-content">
          <h3>Page 1</h3>
          <p>This is the first page of the book.</p>
        </div>
      </div>
      <div className="page" style={{ zIndex: -1 }}>
        <div className="page-content">
          <h3>Page 2</h3>
          <p>This is the second page of the book.</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
