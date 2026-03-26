import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

const partners = [
  'Google', 'Microsoft', 'NVIDIA', 'Meta', 'OpenAI', 'Anthropic'
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <p className="partners-label">Trusted by industry leaders worldwide</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="partner-logo"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
