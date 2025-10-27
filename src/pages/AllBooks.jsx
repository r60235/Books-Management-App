import React, { useState } from "react";
import { useBookContext } from "../contexts/BookContext";

export default function AllBooks() {
  const { books, toggleReadStatus, deleteBook, filterBooks } = useBookContext();
  const [filter, setFilter] = useState("All");

  const filteredBooks = filterBooks(filter);

  const readCount = books.filter((book) => book.status === "Read").length;
  const unreadCount = books.filter((book) => book.status === "Unread").length;

  return (
    <div className="container text-center mb-6">
      <h2 className="py-4">All Books</h2>
      <div className="mb-3">
        <button onClick={() => setFilter("All")} className="btn btn-info mx-2">
          All Books ({books.length})
        </button>
        <button onClick={() => setFilter("Read")} className="btn btn-success mx-2">
          Read Books ({readCount}) 
        </button>
        <button onClick={() => setFilter("Unread")} className="btn btn-warning mx-2">
          Unread Books ({unreadCount})  
        </button>
      </div>

      <h3 className="mt-5">
        {filter === "All" && "All Books"}
        {filter === "Read" && "Read Books"}
        {filter === "Unread" && "Unread Books"}
      </h3>

      {filteredBooks.length === 0 ? (
        <h4 className="mt-5">No books available.</h4>
      ) : (
        <ul className="list-group mt-5 py-2">
          {filteredBooks.map((book) => (
            <li key={book.id} className="list-group-item">
              <span>{book.title} by {book.author} - {book.status}</span>
              <button onClick={() => toggleReadStatus(book.id)} className="btn btn-primary mx-2">
                Toggle Status
              </button>
              <button onClick={() => deleteBook(book.id)} className="btn btn-danger">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
