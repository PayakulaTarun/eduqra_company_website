import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Send, Share2, Camera } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="/images/eduqra_logo_1774263954243.png" alt="Eduqra" className="footer-logo" style={{ filter: 'brightness(0) invert(1)' }} />
          <p>AI-Powered Learning For Future Skills. Master AI, Data Science, and career-focused skills with personalized learning experiences.</p>
          <div className="social-links">
            <a href="#"><span><Globe size={18} /></span></a>
            <a href="#"><span><Send size={18} /></span></a>
            <a href="#"><span><Share2 size={18} /></span></a>
            <a href="#"><span><Camera size={18} /></span></a>
          </div>
          <p className="copyright">&copy; 2026 Eduqra Technologies. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><Phone size={16} /> +91 9618344086</li>
              <li><Mail size={16} /> sureshpeddinti221@gmail.com</li>
              <li><MapPin size={16} /> Hyderabad, India</li>
            </ul>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cookies">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
