import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../Style.K/CarDetails.css';

const CarDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state?.car;

    if (!car) {
        navigate('/');
        return null;
    }

    return (
        <div>
            <Navbar />

            <button className="back-button" onClick={() => navigate('/')}>Back to Inventory</button>
            
            <div className="car-details-page-container">
                <div className="car-details-header">
                    <h2>{car.year} {car.make} {car.model} | {car.features}</h2>
                </div>

                <div className="car-details-content">
                    <div className="car-image-section">
                        <img src={car.image} alt={`${car.make} ${car.model}`} className="main-car-image" />

                        <div className="thumbnail-container">
                            {car.thumbnails?.map((thumbnail, index) => (
                                <img src={thumbnail} key={index} alt="Car Thumbnail" className="thumbnail" />
                            ))}
                        </div>

                        <div className="car-description">
                            <h3>Description</h3>
                            <p>{car.description || 'No description available.'}</p>
                        </div>
                    </div>

                    <div className="car-specs-and-actions">
                        <div className="car-specs">
                            <h3>Specifications</h3>
                            <ul>
                                <li><strong>Make:</strong> {car.make}</li>
                                <li><strong>Model:</strong> {car.model}</li>
                                <li><strong>Year:</strong> {car.year}</li>
                                <li><strong>Body Style:</strong> {car.bodyStyle}</li>
                                <li><strong>Odometer:</strong> {car.odometer} km</li>
                                <li><strong>Transmission:</strong> {car.transmission}</li>
                                <li><strong>Engine:</strong> {car.engine}</li>
                                <li><strong>Fuel Type:</strong> {car.fuelType}</li>
                                <li><strong>Exterior:</strong> {car.color}</li>
                                <li><strong>Passengers:</strong> {car.passengers}</li>
                            </ul>
                        </div>

                        <div className="action-buttons">
                            <button className="info-button">Get More Information</button>
                            <button className="finance-button">Apply for Financing</button>
                            <button className="directions-button">Get Directions</button>
                        </div>

                        <div className="location-info">
                            <h3>Location</h3>
                            <p>22G Auto Sales</p>
                            <p>506 Main St. N</p>
                            <p>Brampton, Ontario L6V 1P9</p>
                            <p>Phone: 855-355-0022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
