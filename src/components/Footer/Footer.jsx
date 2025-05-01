import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/Logo2.svg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="newsletter">
        <h3>Ready to Hire Smarter?</h3>
        <p>Untook Exclusive Insights Subseries to Our Newsletter</p>
        <button className="join-btn">Join Now</button>
      </div>
      <div className="footer-content">
        <div className="footer-section company-info">
          <div className="logo-container">
            <img src={logo} alt="SalesRank.Ai Logo" className="company-logo" />
            <span className="company-name">SalesRank.AI</span>
          </div>
          <p className="footer-description">
            SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.
          </p>
          <div className="social-icons">
            <a href="#facebook" className="social-icon-container"><FaFacebook className="social-icon" /></a>
            <a href="#twitter" className="social-icon-container"><FaTwitter className="social-icon" /></a>
            <a href="#linkedin" className="social-icon-container"><FaLinkedin className="social-icon" /></a>
            <a href="#instagram" className="social-icon-container"><FaInstagram className="social-icon" /></a>
          </div>
        </div>
        
        <div className="footer-links-container">
          <div className="footer-section nav-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#services">Service</a></li>
              <li><a href="#agency">Agency</a></li>
              <li><a href="#case-study">Case Study</a></li>
              <li><a href="#resources">Resource</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section license-section">
            <h3>Licence</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#copyright">Copyright</a></li>
              <li><a href="#email">Email Address</a></li>
            </ul>
          </div>
          
          <div className="footer-section contact-section">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li><FaPhone className="contact-icon" /> (406) 555-0120</li>
              <li><FaEnvelope className="contact-icon" /> Hey@boostim.com</li>
              <li><FaMapMarkerAlt className="contact-icon" /> 2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SalesRank.AI . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;