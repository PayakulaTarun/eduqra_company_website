import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, Share2, Camera } from 'lucide-react';
import './ContactView.css';

const ContactView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <section className="contact-hero section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-text-contact"
          >
            <span className="section-subtitle">Get In Touch</span>
            <h1 className="section-title">Contact Us</h1>
            <p className="contact-hero-desc">Have questions or want to collaborate? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="contact-info-panel"
            >
              <div className="info-card">
                <div className="info-item">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="text-box">
                    <h3>Our Location</h3>
                    <p>Gallery milinium plaza, upperpally chintalmate road, Rangareddy Hyderabad 500048</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="text-box">
                    <h3>Phone Number</h3>
                    <p>+91 9618344086</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="text-box">
                    <h3>Email Address</h3>
                    <p>sureshpeddinti221@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><Clock size={24} /></div>
                  <div className="text-box">
                    <h3>Working Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#"><Globe /></a>
                  <a href="#"><Send /></a>
                  <a href="#"><Share2 /></a>
                  <a href="#"><Camera /></a>
                </div>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="6" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="map-section section">
        <div className="container">
          <div className="map-placeholder">
            <Globe className="globe-icon" size={100} />
            <h2>Interactive Map Coming Soon</h2>
            <p>We are located in the heart of Hyderabad, India.</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ContactView;
