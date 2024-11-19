import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import Navbar from '../components/Navbar'; // Import Navbar component
import '../Style.T/SignIn.css'; // Import CSS for styling

const SignIn = ({ onSignIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigation

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username,
                email,
                mobile,
                password,
            });
            alert('Sign up successful! Redirecting to login...');
            onSignIn(response.data); // Pass the signup response to parent (optional)
            navigate('/login'); // Redirect to login page after signup
        } catch (error) {
            console.error('Sign up failed', error);
            alert(error.response?.data?.message || 'Sign up failed: Please try again.');
        }
    };

    return (
        <div>
            <Navbar /> {/* Navbar at the top */}
            <div className="sign-in-page">
                <div className="sign-in-container">
                    <h1>BE A MAJHAIL!!</h1>
                    <form onSubmit={handleSignIn}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Mobile Number"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
