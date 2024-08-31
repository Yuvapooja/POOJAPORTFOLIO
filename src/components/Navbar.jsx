import React from 'react';
import '../styles/Navbar.scss';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
