import SEOManager from '../../../shared/components/SEOManager';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../../../shared/components/SocialIcons';
import './ContactView.css';

const ContactView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <SEOManager 
        title="Contact Eduqra | Partners & Support for AI Education"
        description="Get in touch with the Eduqra team for support, partnerships, or inquiries about our AI-powered learning solutions. Located in Hyderabad, India."
        keywords="Eduqra contact, AI education support India, EdTech partnerships, contact artificial intelligence learning platform"
        canonical="/contact"
        schemaType="ContactPage"
      />
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
                    <p>302, c162, allwyn colony, kukatpally Hyderabad, 500072</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="text-box">
                    <h3>Phone Number</h3>
                    <p>+91 7337312325</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="text-box">
                    <h3>Email Address</h3>
                    <p>support@eduqra.com</p>
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
                  <a href="https://www.instagram.com/eduqra/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={24} /></a>
                  <a href="https://www.linkedin.com/company/eduqra/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={24} /></a>
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
          <div className="map-wrapper">
            <iframe 
              title="Eduqra Office Location"
              src="https://maps.google.com/maps?q=302,%20C162,%20Allwyn%20Colony,%20Kukatpally,%20Hyderabad,%20Telangana%20500072&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ContactView;
