import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryBooks = () => {
  const { category } = useParams(); // Get the category from the URL params
  const books = useSelector((state) => state.books.bookList);

  // Use reduce to get the books that match the category
  const filteredBooks = books.reduce((acc, book) => {
    if (book.category.toLowerCase() === category.toLowerCase()) {
      acc.push(book);
    }
    return acc;
  }, []);

  return (
    <div className="category-books-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Books</h1>
      {filteredBooks.length === 0 ? (
        <p>No books available in this category.</p>
      ) : (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <img src={book.image} alt={book.title} style={{ width: '100px', height: '150px' }} />
              <Link to={`/books/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryBooks;
