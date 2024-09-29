import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import './Navbar.css';
import logo from '../../assets/images/afe-14.png';

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cafes', label: 'Cafes' },
    { path: '/employees', label: 'Employees' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Web Application Logo" className="logo-image" />
        </Link>
        <ul className="nav-links">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link ${pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
