import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import './Navbar.css';
import logo from '../../assets/images/afe-14.png';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Web Application Logo" className="logo-image" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cafes"
              className={`nav-link ${pathname === '/cafes' ? 'active' : ''}`}
            >
              Cafes
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className={`nav-link ${
                pathname === '/employees' ? 'active' : ''
              }`}
            >
              Employees
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
