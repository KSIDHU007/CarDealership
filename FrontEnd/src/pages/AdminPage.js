import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({});

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const response = await axios.get('http://localhost:8080/api/admin/inventory');
        setCars(response.data);
    };

    const handleAddCar = async () => {
        await axios.post('http://localhost:8080/api/admin/inventory', newCar);
        fetchCars();
    };

    const handleUpdateCar = async (id, updatedCar) => {
        await axios.put(`http://localhost:8080/api/admin/inventory/${id}`, updatedCar);
        fetchCars();
    };

    const handleDeleteCar = async (id) => {
        await axios.delete(`http://localhost:8080/api/admin/inventory/${id}`);
        fetchCars();
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <div>
                <h2>Add New Car</h2>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
            <div>
                <h2>Car Inventory</h2>
                {cars.map((car) => (
                    <div key={car.id}>
                        <p>{car.name}</p>
                        <button onClick={() => handleUpdateCar(car.id, { ...car, name: 'Updated Car Name' })}>
                            Update
                        </button>
                        <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
