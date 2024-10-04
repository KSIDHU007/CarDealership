import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import FilterPanel from '../components/FilterPanel';
import CarCard from '../components/CarCard';
import '../styles.css'; // Ensure your styles are imported here

const Home = () => {
  const [cars, setCars] = useState([
      {
        image: 'https://www.mitsubishi-motors-pr.ca/wp-content/uploads/2020/10/15493_2018_Eclipse_Cross.jpg',  // Mitsubishi Eclipse Cross
        model: '2018 Mitsubishi Eclipse Cross',
        price: '$14,990',
        km: '149,661 km',
        fuel: 'Gasoline',
      },
      {
        image: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/13183/2019-Volkswagen-Tiguan-front_13183_032_1846x867_0Q0Q_cropped.png?downsize=750:*',  // Volkswagen Tiguan
        model: '2019 Volkswagen Tiguan',
        price: '$16,990',
        km: '98,446 km',
        fuel: 'Gasoline',
      },
      {
        image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25847570a1e3d8e88cb/stills_0640_png/MY2018/12661/12661_st0640_116.png',  // Hyundai Tucson
        model: '2018 Hyundai Tucson',
        price: '$14,990',
        km: '193,425 km',
        fuel: 'Gasoline',
      }
    // Add more car data here
  ]);

  return (
    <div className="App">
      {/* Render Navbar at the top */}
      <Navbar />

      {/* Banner Section */}
      <div className="banner">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" alt="Banner" className="Custbanner-image" />
      </div>

      <div className="container">
        {/* Filter panel on the left */}
        <FilterPanel />

        {/* Car listing on the right */}
        <div className="car-list">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
