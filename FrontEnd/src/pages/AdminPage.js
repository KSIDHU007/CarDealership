import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style.T/AdminPage.css';

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [newCar, setNewCar] = useState({
    name: '',
    price: '',
    odometer: '',
    odometerUnit: 'km',
    fuelType: '',
    image: '',
    make: '',
    model: '',
    year: '',
    bodyStyle: '',
    color: '',
    transmission: '',
    engine: '',
    passengers: '',
    description: '',
  });
  const [editCar, setEditCar] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchInventory();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/appointments');
      setAppointments(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/inventory');
      setInventory(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleAddCar = async () => {
    if (!newCar.name || !newCar.price || !newCar.image || !newCar.fuelType) {
      alert('Please fill out all required fields (Name, Price, Image, Fuel Type).');
      return;
    }
    try {
      await axios.post('http://localhost:8081/api/inventory', newCar);
      alert('Car added successfully!');
      setNewCar({
        name: '',
        price: '',
        odometer: '',
        odometerUnit: 'km',
        fuelType: '',
        image: '',
        make: '',
        model: '',
        year: '',
        bodyStyle: '',
        color: '',
        transmission: '',
        engine: '',
        passengers: '',
        description: '',
      });
      fetchInventory();
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Failed to add car. Please try again.');
    }
  };

  const handleEditCar = async (car) => {
    if (!editCar.name || !editCar.price) {
      alert('Name and Price are required fields.');
      return;
    }
    try {
      await axios.put(`http://localhost:8081/api/inventory/${car.id}`, editCar);
      alert('Car updated successfully!');
      setEditCar(null);
      fetchInventory();
    } catch (error) {
      console.error('Error updating car:', error);
      alert('Failed to update car. Please try again.');
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      await axios.delete(`http://localhost:8081/api/inventory/${carId}`);
      alert('Car deleted successfully!');
      fetchInventory();
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete car. Please try again.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-sections">
        {/* Appointments Section */}
        <div className="appointments-section">
          <h2>Appointment History</h2>
          {appointments.length === 0 ? (
            <p>No appointments available</p>
          ) : (
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Contact</th>
                  <th>Vehicle</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.id}</td>
                    <td>{appointment.customerName || 'N/A'}</td>
                    <td>{appointment.contact || 'N/A'}</td>
                    <td>{appointment.vehicle || 'N/A'}</td>
                    <td>{appointment.date || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Inventory Management Section */}
        <div className="inventory-section">
          <h2>Inventory Management</h2>
          {/* Add Car Form */}
          <div className="add-car-form">
            <h3>Add New Car</h3>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Car Name"
                value={newCar.name}
                onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Make"
                value={newCar.make}
                onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
              />
              <input
                type="number"
                placeholder="Year"
                value={newCar.year}
                onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                value={newCar.price}
                onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
              />
              <input
                type="number"
                placeholder="Odometer"
                value={newCar.odometer}
                onChange={(e) => setNewCar({ ...newCar, odometer: e.target.value })}
              />
              <select
                value={newCar.odometerUnit}
                onChange={(e) => setNewCar({ ...newCar, odometerUnit: e.target.value })}
              >
                <option value="km">km</option>
                <option value="miles">miles</option>
              </select>
              <input
                type="text"
                placeholder="Fuel Type"
                value={newCar.fuelType}
                onChange={(e) => setNewCar({ ...newCar, fuelType: e.target.value })}
              />
              <input
                type="text"
                placeholder="Body Style"
                value={newCar.bodyStyle}
                onChange={(e) => setNewCar({ ...newCar, bodyStyle: e.target.value })}
              />
              <input
                type="text"
                placeholder="Transmission"
                value={newCar.transmission}
                onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
              />
              <input
                type="text"
                placeholder="Engine"
                value={newCar.engine}
                onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
              />
              <input
                type="text"
                placeholder="Color"
                value={newCar.color}
                onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
              />
              <input
                type="number"
                placeholder="Passengers"
                value={newCar.passengers}
                onChange={(e) => setNewCar({ ...newCar, passengers: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newCar.image}
                onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={newCar.description}
                onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
              />
              <button onClick={handleAddCar} className="add-car-button">
                Add Car
              </button>
            </div>
          </div>

          {/* Inventory Table */}
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Odometer</th>
                <th>Fuel Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((car) => (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>${car.price}</td>
                  <td>
                    {car.odometer} {car.odometerUnit}
                  </td>
                  <td>{car.fuelType}</td>
                  <td>
                    <button onClick={() => setEditCar(car)}>Edit</button>
                    <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
