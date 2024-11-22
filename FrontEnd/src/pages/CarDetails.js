import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../Style.K/CarDetails.css';
import { Link } from 'react-router-dom';

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
            {/* Navbar */}
            <Navbar />

            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Inventory
            </button>

            <div className="car-details-page-container">
                {/* Car Header */}
                <div className="car-details-header">
                    <h2>{car.year} {car.make} {car.name}</h2>
                </div>

                <div className="car-details-content">
                    {/* Image Section */}
                    <div className="car-image-section">
                        <img src={car.image} alt={`${car.make} ${car.name}`} className="main-car-image" />

                        {/* Thumbnails */}
                        {car.thumbnails && car.thumbnails.length > 0 && (
                            <div className="thumbnail-container">
                                {car.thumbnails.map((thumbnail, index) => (
                                    <img
                                        src={thumbnail}
                                        key={index}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail"
                                    />
                                ))}
                            </div>
                        )}

                        {/* Description Section */}
                        <div className="car-description">
                            <h3>Description</h3>
                            <p>{car.description || 'No description available.'}</p>
                        </div>
                    </div>

                    {/* Specifications and Actions */}
                    <div className="car-specs-and-actions">
                        {/* Specifications */}
                        <div className="car-specs">
                            <h3>Specifications</h3>
                            <ul>
                                <li><strong>Make:</strong> {car.make}</li>
                                <li><strong>Name:</strong> {car.name}</li>
                                <li><strong>Year:</strong> {car.year}</li>
                                <li><strong>Body Style:</strong> {car.bodyStyle || 'N/A'}</li>
                                <li><strong>Odometer:</strong> {car.odometer.toLocaleString()} {car.odometerUnit}</li>
                                <li><strong>Transmission:</strong> {car.transmission || 'N/A'}</li>
                                <li><strong>Engine:</strong> {car.engine || 'N/A'}</li>
                                <li><strong>Fuel Type:</strong> {car.fuelType || 'N/A'}</li>
                                <li><strong>Exterior:</strong> {car.color || 'N/A'}</li>
                                <li><strong>Passengers:</strong> {car.passengers || 'N/A'}</li>
                                <li><strong>Price:</strong> ${car.price.toLocaleString()}</li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="actionbuttons">
                            <Link to="/booking" className="info-button">Get More Information</Link>
                            <Link to="/apply-financing" className="finance-button">Apply for Financing</Link>
                            <Link to="/directions" className="directions-button">Get Directions</Link>
                        </div>

                        {/* Location Information */}
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
