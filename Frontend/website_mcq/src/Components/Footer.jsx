import React from 'react';
import './style.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className="newsletter-signup">
                    <input type="email" placeholder="Subscribe to our newsletter" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

