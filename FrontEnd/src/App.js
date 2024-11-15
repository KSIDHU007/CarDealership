// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Login from './pages/Login';
import './Style.K/styles.css';

function App() {
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Landing Page as the root page */}

          {/* Route for Home page - accessible via /inventory */}
          <Route path="/inventory" element={<Home onViewDetails={handleViewDetails} />} />

          {/* Route for Car Details page */}
          <Route path="/car-details" element={<CarDetails car={selectedCar} />} />

          {/* Route for Login page */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
