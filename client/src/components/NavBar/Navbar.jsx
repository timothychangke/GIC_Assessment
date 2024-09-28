// Navbar.js
import React from 'react';
import { Link } from '@tanstack/react-router';
import './Navbar.css';
import logo from '../../assets/images/afe-14.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Web Application Logo" className="logo-image" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cafes" className="nav-link">
              Cafes
            </Link>
          </li>
          <li>
            <Link to="/employees" className="nav-link">
              Employees
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
