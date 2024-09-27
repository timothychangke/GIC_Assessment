// Navbar.js
import React from "react";
import { Link } from "@tanstack/react-router";
import "./Navbar.css"; 
import logo from "../../assets/images/gicafeLogo"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/cafes" className="nav-link">Cafes</Link>
          </li>
          <li>
            <Link to="/employees" className="nav-link">Employees</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
