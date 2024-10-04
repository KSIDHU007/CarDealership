import React from 'react';
import '../styles.css'; // Ensure you import the styles here as well

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <div className="car-info">
        <h4>{car.model}</h4>
        <p>{car.price}</p>
        <p>{car.km}</p>
        <p>{car.fuel}</p>
      </div>
      <div className="car-actions">
        <button>View Details</button>
        <button>Contact Us</button>
        <button>Financing</button>
      </div>
    </div>
  );
};

export default CarCard;
