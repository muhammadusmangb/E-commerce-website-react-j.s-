import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">SHOP.CO</h2>
          <p className="footer-desc">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="social-links">
            <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
            <a href="#" className="social-btn" aria-label="Facebook">f</a>
            <a href="#" className="social-btn" aria-label="Instagram">📷</a>
            <a href="#" className="social-btn" aria-label="GitHub">⌥</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Features</Link></li>
              <li><Link to="#">Works</Link></li>
              <li><Link to="#">Career</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li><Link to="#">Customer Support</Link></li>
              <li><Link to="#">Delivery Details</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FAQ</h4>
            <ul>
              <li><Link to="#">Account</Link></li>
              <li><Link to="#">Manage Deliveries</Link></li>
              <li><Link to="#">Orders</Link></li>
              <li><Link to="#">Payments</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>RESOURCES</h4>
            <ul>
              <li><Link to="#">Free eBooks</Link></li>
              <li><Link to="#">Development Tutorial</Link></li>
              <li><Link to="#">How to - Blog</Link></li>
              <li><Link to="#">YouTube Playlist</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-methods">
          <span className="payment-icon">VISA</span>
          <span className="payment-icon">MC</span>
          <span className="payment-icon">PayPal</span>
          <span className="payment-icon">Apple Pay</span>
          <span className="payment-icon">G Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
