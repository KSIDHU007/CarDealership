import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Your Car Dealership</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
            <li><a href="#finance">Finance</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Image Section (below header) */}
      <section className="banner-image" id="home">
        <img
          src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Car Dealership Banner"
          className="img-fluid"
        />
      </section>

      {/* Contact Form and Dealership Info Section */}
      <section className="main-section" id="contact">
        <div className="container-fluid">
          <div className="row d-flex align-items-start">
            {/* Contact Form */}
            <div className="col-md-5 col-sm-12 form-container">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="first-name">First Name (required)</label>
                  <input type="text" className="form-control" id="first-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name (required)</label>
                  <input type="text" className="form-control" id="last-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email (required)</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (required)</label>
                  <input type="tel" className="form-control" id="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control message-box" id="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Dealership Info (Right-hand side) */}
            <div className="col-md-5 col-sm-12 dealership-info-container">
              <div className="dealership-info">
                <h3>About Us</h3>
                <p>
                  Welcome to Your Dealership! While nothing can compare to the experience of visiting our lot in person, we are excited to introduce ourselves.
                  We are a licensed used car dealer in Alberta. Our dealership adheres to all provincial regulations and standards set by the Alberta Motor Vehicle Industry Council (AMVIC). 
                  AMVIC is responsible for enforcing the Fair Trading Act and ensuring that consumers are protected in the marketplace. Their mission is to maintain a fair and informed automotive market in Alberta by upholding consumer rights, enhancing industry professionalism, and ensuring open and honest competition among licensed motor vehicle dealers.
                </p>
                <p>Address: ABC123, Calgary, AB</p>
                <p>Phone: 123456789</p>
                <p>Email: info@yourdealership.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Sales and Service Side by Side */}
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            {/* Sales Info */}
            <div className="footer-col">
              <h4>Your DEALERSHIP (Sales)</h4>
              <p>ABC123, Calgary, AB</p>
              <p>Monday - Friday: 10:00AM - 8:00PM</p>
              <p>Saturday: 10:00AM - 7:00PM</p>
              <p>Sunday: 11:00AM - 5:00PM</p>
            </div>

            {/* Service Info */}
            <div className="footer-col">
              <h4>Your DEALERSHIP (Service)</h4>
              <p>ABC123, Calgary, AB</p>
              <p>Monday - Friday: 9:00AM - 7:00PM</p>
              <p>Saturday: 9:00AM - 5:00PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="footer-row">
            <div className="col-md-12">
              <p className="copyright">© 2024 Your DEALERSHIP. Privacy Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
