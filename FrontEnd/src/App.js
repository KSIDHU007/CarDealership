import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import './Style.K/styles.css'; // Ensure your global styles are applied

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home onViewDetails={handleViewDetails} />} />

          {/* Route for Car Details page */}
          <Route path="/car-details" element={<CarDetails car={selectedCar} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
