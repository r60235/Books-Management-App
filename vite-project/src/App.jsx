import React from 'react';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom';
import AllBooks from './pages/AllBooks';
import AddBook from './pages/AddBook';
import { BookContextProvider } from './contexts/BookContext';

function App() {
  return (
    <BookContextProvider>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </div>
    </BookContextProvider>
  );
}

export default App;
