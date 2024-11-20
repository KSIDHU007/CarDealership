import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import axios from 'axios';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../Style.T/Login.css'; // Import CSS for styling

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for UX
    const navigate = useNavigate(); // Initialize navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state
        try {
            const response = await axios.post('http://localhost:8080/auth/login', { username, password });
            onLogin(response.data); // Pass user data to parent (optional)
            alert('Login successful! Redirecting to the home page...');
            navigate('/'); // Redirect to LandingPage ("/") after successful login
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Login failed: Incorrect username or password.');
        } finally {
            setLoading(false); // Hide loading state
        }
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
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <p className="forgot-password">
                        Don’t have an account?{' '}
                        <span className="sign-up-link" onClick={() => navigate('/signup')}>
                            Sign Up Here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
