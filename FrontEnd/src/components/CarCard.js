import React from 'react';
import '../Style.K/styles.css'; // Ensure your styles are correctly imported

const CarCard = ({ car, onViewDetails }) => {
  return (
    <div className="car-card">
      {/* Display the car image */}
      <img
        src={car.image || 'default-image-url.jpg'} // Provide a fallback image
        alt={car.name || 'Car Image'}
        className="car-image"
      />

      {/* Display car details */}
      <div className="car-info">
        <h4>{car.name || 'Unknown Car'}</h4>
        <p>
          <strong>Price:</strong> $
          {car.price !== null && car.price !== undefined
            ? car.price.toLocaleString()
            : 'N/A'}
        </p>
        <p>
          <strong>Odometer:</strong> 
          {car.odometer !== null && car.odometer !== undefined
            ? car.odometer.toLocaleString()
            : 'N/A'}{' '}
          {car.odometerUnit || ''}
        </p>
        <p>
          <strong>Fuel Type:</strong> {car.fuelType || 'N/A'}
        </p>
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
