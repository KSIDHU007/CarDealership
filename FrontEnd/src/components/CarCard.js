import React from 'react';
import '../Style.K/styles.css'; // Ensure your styles are correctly imported

const CarCard = ({ car, onViewDetails }) => {
  return (
    <div className="car-card">
      {/* Display the car image */}
      <img src={car.image} alt={car.name} className="car-image" />

      {/* Display car details */}
      <div className="car-info">
        <h4>{car.name}</h4>
        <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        <p><strong>Odometer:</strong> {car.odometer.toLocaleString()} {car.odometerUnit}</p>
        <p><strong>Fuel Type:</strong> {car.fuelType}</p>
      </div>

      {/* Action buttons */}
      <div className="car-actions">
        <button onClick={onViewDetails} className="view-details-button">View Details</button>
        <button className="contact-button">Contact Us</button>
        <button className="finance-button">Financing</button>
      </div>
    </div>
  );
};

export default CarCard;
