import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="footer"
    >
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="/images/eduqra_logo.jpeg" alt="Eduqra" className="footer-logo" style={{ filter: 'brightness(0) invert(1)' }} />
          <p>AI-Powered Learning For Future Skills. Master AI, Data Science, and career-focused skills with personalized learning experiences.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/eduqra/" target="_blank" rel="noopener noreferrer"><span><InstagramIcon size={20} /></span></a>
            <a href="https://www.linkedin.com/company/eduqra/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><span><LinkedinIcon size={20} /></span></a>
          </div>
          <p className="copyright">&copy; 2026 Eduqra Technologies. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><Phone size={16} /> +91 7337312325</li>
              <li><Mail size={16} /> support@eduqra.com</li>
              <li><MapPin size={16} /> 302, c162, Allwyn Colony, Kukatpally, Hyderabad, 500072</li>
            </ul>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ai-solutions">AI Solutions</Link></li>
              <li><Link to="/products">Products</Link></li>
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
    </motion.footer>
  );
};

export default Footer;
