import React from 'react';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Name</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#repair">Auto Repair</a></li>
        <li><a href="#wheels">Wheels and Tires</a></li>
        <li><a href="#finance">Finance</a></li>
        <li><a href="#about">About Us</a></li>
        <li><button className="btn-location">Location</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
