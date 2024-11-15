// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.K/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="/Images/MAJHAIL_DEALERSHIP-removebg-preview.png" alt="Car Dealership Logo" className="logo-image" />
          </Link>
          <h1>MAJHAIL DEALERSHIP</h1>
        </div>
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/repair">Auto Repair</Link>
            <Link to="/wheels">Wheels and Tires</Link>
            <Link to="/finance">Finance</Link>
            <Link to="/about">About Us</Link>
          </nav>
          <button className="cta-button">Location</button>
          <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
