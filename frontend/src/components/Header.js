import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Multikart</Link>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
