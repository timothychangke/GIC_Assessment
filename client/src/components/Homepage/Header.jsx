import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link, useLocation } from '@tanstack/react-router';
import logoName from '../../assets/images/afe-15-removebg-preview-3.png'

const Header = () => {
  return (
    <header className="relative bg-white text-white pb-10 md:pb-8">
      <div className="container mx-auto px-6 text-center relative">
        <div className="flex justify-center mr-20">
          <img
            src={logoName}
            alt="Web Application Logo"
            className="w-auto h-32 md:h-40 lg:h-48"
          />
        </div>

        <p className="text-blue-950 text-xl md:text-2xl mb-16 max-w-2xl mx-auto -mt-10 md:-mt-12 relative z-10">
          Are you ready to streamline and optimise your cafe operations with our
          powerful, intuitive management solution
        </p>

        <Link
          to="/cafes"
          className="bg-blue-950 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center"
        >
          Get Started
          <ChevronRightIcon className="ml-2" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
