
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.bookList);

  const book = books.find((book) => book.id === parseInt(id));

  const navigate = useNavigate();

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="book-details-container"> {/* Add this class */}
      <h1 className="book-title">{book.title}</h1>
      <img src={book.image} alt={book.title} className="book-image" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating ? book.rating : 'N/A'}</p>
      <button className="back-button" onClick={() => navigate('/browse-books')}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
