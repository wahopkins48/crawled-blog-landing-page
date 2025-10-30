import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-white">
          Wesley Hopkins
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#blog" className="text-white hover:text-gray-300 transition-colors">Blog</a>
          <a href="#capabilities" className="text-white hover:text-gray-300 transition-colors">Capabilities</a>
          <a href="https://crawled.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            Substack
          </a>
          <a href="#contact" className="bg-white text-black font-medium py-2 px-4 rounded-sm hover:bg-gray-200 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;