import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section" id="cta">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="cta-card"
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Start Your Learning Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join thousands of learners who are deeply impacting their careers and lives by starting with Eduqra's learning platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="cta-actions"
          >
            <Link to="/join" className="btn" style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: '600', padding: '12px 30px' }}>Get Started Now</Link>
            <Link to="/contact" className="btn btn-outline-white" style={{ padding: '12px 30px' }}>Contact Us</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
