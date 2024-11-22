import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FilterPanel from '../components/FilterPanel';
import CarCard from '../components/CarCard';
import axios from 'axios';
import '../Style.K/styles.css';

const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]); // State to store inventory data

  // Fetch inventory data from the backend
  useEffect(() => {
    axios
      .get('http://localhost:8081/api/inventory') // API endpoint for inventory
      .then((response) => {
        setCars(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  }, []);

  // Function to handle "View Details" button
  const handleViewDetails = (car) => {
      navigate('/car-details', { state: { car } });
  };


  return (
    <div className="App">
      <Navbar />

      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Banner"
          className="Custbanner-image"
        />
      </div>

      <div className="container">
        <FilterPanel />

        <div className="car-list">
          {cars.length === 0 ? (
            <p>No cars available in inventory. Check back later!</p>
          ) : (
            cars.map((car, index) => (
              <CarCard
                key={index}
                car={car}
                onViewDetails={() => handleViewDetails(car)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
