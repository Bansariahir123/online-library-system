
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    image: '', // Store Base64 image string here
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook((prevBook) => ({ ...prevBook, image: reader.result }));
      };
      reader.readAsDataURL(file); // Convert file to Base64 string
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.category || !newBook.image) {
      alert("Please fill out all fields");
      return;
    }

    // Dispatch the new book data with the Base64 image string
    dispatch(addBook({ ...newBook, id: Date.now(), rating: 0 }));
    navigate('/browse-books');
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        />
        
        {/* Category selection */}
        <select
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
        </select>

        {/* File upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
