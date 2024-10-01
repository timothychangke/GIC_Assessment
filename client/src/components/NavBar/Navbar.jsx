import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useMediaQuery } from '@mui/material';
import './Navbar.css';
import logo from '../../assets/images/afe-15.png';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuThreshold = 1000;
  const isMobileScreen = useMediaQuery(`(max-width:${mobileMenuThreshold}px)`);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cafes', label: 'Cafes' },
    { path: '/employees', label: 'Employees' },
  ];

  useEffect(() => {
    if (!isMobileScreen) {
      setIsMenuOpen(false);
    }
  }, [isMobileScreen]);

  return (
    <>
      <nav className="bg-white text-white py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-[80%] mx-auto">
          <Link to="/" className="logo">
            <img src={logo} alt="Web Application Logo" className="logo-image" />
          </Link>
          {!isMobileScreen && (
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ path, label }) => (
                <div key={path}>
                  <Link
                    to={path}
                    className={`nav-link ${pathname === path ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          )}
          {isMobileScreen && (
            <button
              className=" text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-950 z-40 flex flex-col items-center justify-center space-y-8">
          {navItems.map(({ path, label }) => (
            <div key={path}>
              <Link
                to={path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`nav-link text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200 ease-in-out ${
                  pathname === path ? 'active' : ''
                }`}
              >
                {label}
              </Link>
            </div>
          ))}

          <button
            className="absolute top-4 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
