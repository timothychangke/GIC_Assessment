const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2024 GICafe. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <div className="cursor-pointer">Privacy Policy</div>
          <div className="cursor-pointer">Terms of Service</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
