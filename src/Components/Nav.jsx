import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../contexts/BookContext";

export default function Nav() {
  const { books } = useBookContext();
  const totalBooks = books.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Book Library</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">All Books ({totalBooks})</Link>
            <Link className="nav-link" to="/addbook">AddP Book</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
