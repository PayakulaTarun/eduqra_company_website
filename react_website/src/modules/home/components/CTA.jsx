import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="cta">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-card"
        >
          <h2>Start Your Learning Journey Today</h2>
          <p>
            Join thousands of learners who are deeply impacting their careers and lives by starting with Eduqra's learning platform.
          </p>
          <div className="cta-actions">
            <Link to="/join" className="btn" style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: '600', padding: '12px 30px' }}>Get Started Now</Link>
            <Link to="/contact" className="btn btn-outline-white" style={{ padding: '12px 30px' }}>Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
