// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import axios from 'axios';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../Style.T/Login.css'; // Import CSS for styling

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
            onLogin(response.data);
            navigate('/profile'); // Redirect to profile or desired route upon successful login
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed: Incorrect username or password.');
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password'); // Navigate to Forgot Password page
    };

    const handleSignUp = () => {
        navigate('/sign-up'); // Navigate to Sign Up page
    };

    return (
        <div>
            <Navbar />
            <div className="login-page">
                <div className="login-container">
                    <h1>BE A MAJHAIL!!</h1>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Username" 
                            required 
                        />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            required 
                        />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <p className="forgot-password">
                        Forgot Password? <span className="sign-up" onClick={handleForgotPassword}>Click Here</span>
                    </p>
                    <p className="sign-up">
                        Don’t have an account? <span className="sign-up-link" onClick={handleSignUp}>Sign Up</span>
                    </p>
                    <div className="social-buttons">
                        <button className="facebook-button">Facebook</button>
                        <button className="google-button">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
