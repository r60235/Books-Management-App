import { createContext, useState, useContext } from "react";

const BookContext = createContext();

export function useBookContext() {
  return useContext(BookContext);
}

export function BookContextProvider({ children }) {
  // load books initial render
  const loadBooks = () => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  };

  const [books, setBooks] = useState(loadBooks);

  // save
  const saveBooksToLocalStorage = (updatedBooks) => {
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // add
  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);  
  };

  // toggLe status read, unread
  const toggleReadStatus = (bookId) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, status: book.status === 'Read' ? 'Unread' : 'Read' } : book
    );
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);  
  };

  // del
  const deleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);  
  };

  const filterBooks = (status) => {
    if (status === 'All') return books;
    return books.filter((book) => book.status === status);
  };

  return (
    <BookContext.Provider value={{ books, addBook, toggleReadStatus, deleteBook, filterBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
