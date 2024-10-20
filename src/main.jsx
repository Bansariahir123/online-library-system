import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './store/bookSlice';
import App from './App';

const store = configureStore({
  reducer: {
    books: bookReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
