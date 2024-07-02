import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import './style.css'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo"><Link to="/" className="home-link">MCQ Master</Link></div>
                <nav>
                    <ul>
                        <li><Link to="/" className="link-hover">Home</Link></li>
                        <li><Link to="/about" className="link-hover">About</Link></li>
                        <li><Link to="/subject" className="link-hover">Courses</Link></li>
                        <li><Link to="/tick" className="link-hover">Practice Tests</Link></li>
                        <li><Link to="/contact" className="link-hover">Contact Us</Link></li>
                        <li><Link to="/login" className="link-hover">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
