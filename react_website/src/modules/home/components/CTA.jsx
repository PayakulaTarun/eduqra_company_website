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
            Start Your AI Learning Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join Eduqra and experience the future of education with AI-powered personalization, real-world skills, and career-focused learning paths.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="cta-actions"
          >
            <Link to="/join" className="btn btn-primary" style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: '700', padding: '14px 30px', boxShadow: '0 4px 14px rgba(255, 215, 0, 0.4)' }}>
              👉 Get Started for Free
            </Link>
            <Link to="/ai-solutions" className="btn btn-outline-white" style={{ padding: '14px 30px', fontWeight: '600' }}>
              👉 Explore Courses
            </Link>
            <Link to="/contact" className="btn btn-outline-white" style={{ padding: '14px 30px', fontWeight: '600', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              👉 Talk to an Expert
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
