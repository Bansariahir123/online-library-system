import { createSlice } from '@reduxjs/toolkit';
import { books } from '../data/books';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: books,
    addedBooks: []
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
