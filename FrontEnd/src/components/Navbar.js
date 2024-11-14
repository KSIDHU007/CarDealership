import React from 'react';
import '../Style.K/styles.css'; // Correct path to your global styles
// Uncomment if using Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left-aligned Logo Section */}
        <div className="logo">
          <img src="/Images/MAJHAIL_DEALERSHIP-removebg-preview.png" alt="Car Dealership Logo" className="logo-image" />
          <h1>MAJHAIL DEALERSHIP</h1>
        </div>

        {/* Right-aligned Navigation Links, CTA, and Profile Icon */}
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#inventory">Inventory</a>
            <a href="#repair">Auto Repair</a>
            <a href="#wheels">Wheels and Tires</a>
            <a href="#finance">Finance</a>
            <a href="#about">About Us</a>
          </nav>
          <button className="cta-button">Location</button>
          
          {/* User Profile Icon */}
          {/* Option A: Font Awesome Icon */}
          {<FontAwesomeIcon icon={faUserCircle} className="profile-icon" />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
