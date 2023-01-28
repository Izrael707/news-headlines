import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-info px-5 sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          FLASHY NEWS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
          aria-controls="#navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-center w-75">
            <li className="nav-item">
              <Link className="nav-link fs-6" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-6" to="/tops">
                Top Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-6" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
