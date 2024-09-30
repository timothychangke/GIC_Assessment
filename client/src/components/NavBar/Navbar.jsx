import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import './Navbar.css';
import logo from '../../assets/images/afe-15.png';

import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import CodeIcon from '@mui/icons-material/Code';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cafes', label: 'Cafes' },
    { path: '/employees', label: 'Employees' },
  ];

  return (
    // <nav className="bg-white text-white py-4 px-6 sticky top-0 z-50">
    //   <div className="flex justify-between items-center max-w-[80%] mx-auto">
    //     <Link to="/" className="logo">
    //       <img src={logo} alt="Web Application Logo" className="logo-image" />
    //     </Link>
    //     <ul className="nav-links">
    //       {navItems.map(({ path, label }) => (
    //         <li key={path}>
    //           <Link
    //             to={path}
    //             className={`nav-link ${pathname === path ? 'active' : ''}`}
    //           >
    //             {label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>
    // <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    <>
      <nav className="bg-white text-white py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-[80%] mx-auto">
          <Link to="/" className="logo">
            <img src={logo} alt="Web Application Logo" className="logo-image" />
          </Link>
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
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 white z-40 flex flex-col items-center justify-center space-y-8">
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

          <button
            className="absolute top-4 right-6 text-blue-950"
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
