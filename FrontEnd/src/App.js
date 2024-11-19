import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import LandingPage
import Home from './pages/Home'; // Import Home page for inventory
import CarDetails from './pages/CarDetails'; // Import CarDetails page
import Login from './pages/Login'; // Import Login page
import SignIn from './pages/SignIn'; // Import SignIn page
import './Style.K/styles.css'; // Ensure your global styles are applied

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route for Landing Page */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Route for Home page (Inventory) */}
                    <Route path="/inventory" element={<Home />} />

                    {/* Route for Car Details page */}
                    <Route path="/car-details" element={<CarDetails />} />

                    {/* Route for Login page */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />

                    {/* Route for Sign Up page */}
                    <Route path="/signup" element={<SignIn />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
