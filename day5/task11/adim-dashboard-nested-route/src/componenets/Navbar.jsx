import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ Current_user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MyApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            {(Current_user === "admin" || Current_user === "registered") && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/user">User</Link>
              </li>
            )}
            {Current_user === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
