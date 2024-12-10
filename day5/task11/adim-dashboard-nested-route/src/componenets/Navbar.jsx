import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ Current_user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
           {  Current_user==="admin" || Current_user==="registered" &&
            <li className="nav-item">
              <Link className="nav-link active" to="/user">User</Link>
            </li>
            }
            {Current_user === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link active" to="/admin">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
