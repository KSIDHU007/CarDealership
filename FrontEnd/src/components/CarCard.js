import React from 'react';
import '../Style.K/styles.css'; // Correct path to your global styles

const CarCard = ({ car, onViewDetails }) => {
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
      <button onClick={onViewDetails} className="view-details-button">View Details</button>
      <button>Contact Us</button>
      <button>Financing</button>
      </div>
    </div>
  );
};

export default CarCard;
