import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';

import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="header">
        <h1 className="website-name">My Online Library</h1>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/browse-books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/browse-books" element={<BrowseBooks />} />
        
        <Route path="/books/:id" element={<BookDetails />} />
        
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
        {/* Add 404 Route here if needed */}
      </Routes>
    </Router>
  );
};

export default App;