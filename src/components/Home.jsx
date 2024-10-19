
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const books = useSelector((state) => state.books.bookList);
  
  // Hardcoded list of popular book IDs (adjust based on your actual book IDs)
  const popularBookIds = [1, 2, 3, 4, 5]; // Replace with actual IDs of popular books
  
  // Filter books to get popular books based on the hardcoded IDs
  const popularBooks = books.filter(book => popularBookIds.includes(book.id));

  return (
    <div className="container">
      <h1>Welcome to the Online Library</h1>
      <p>Explore a vast collection of books across various categories.</p>
      
      <h2>Book Categories</h2>
      <ul>
        <li>
          <Link to="/browse-books?category=Fiction">Fiction</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Non-Fiction">Non-Fiction</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Sci-Fi">Sci-Fi</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Fantasy">Fantasy</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Dystopian">Dystopian</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Romance">Romance</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Thriller">Thriller</Link>
        </li>
        <li>
          <Link to="/browse-books?category=Horror">Horror</Link>
        </li>
      </ul>

      <h2>Popular Books</h2>
      <div className="book-cards">
        {popularBooks.length > 0 ? (
          popularBooks.map(book => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.image} alt={book.title} />
              <Link to={`/books/${book.id}`}>View More Details</Link>
            </div>
          ))
        ) : (
          <p>No popular books available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
