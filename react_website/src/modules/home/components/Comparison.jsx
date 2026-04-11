import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './Comparison.css';

const Comparison = () => {
  const traditional = [
    'One-size-fits-all approach',
    'Static content',
    'Limited personalization'
  ];

  const eduqra = [
    'AI-powered adaptive learning',
    'Personalized learning paths',
    'Real-time feedback',
    'Skill-focused training'
  ];

  return (
    <section className="comparison section bg-light">
      <div className="container comparison-container">
        
        <div className="comparison-header">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
            style={{ display: 'block', margin: '0 auto 10px', textAlign: 'center' }}
          >
            The Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
            style={{ textAlign: 'center' }}
          >
            Eduqra vs Traditional Learning
          </motion.h2>
        </div>

        <div className="comparison-cards-wrapper">
          {/* Traditional Card */}
          <motion.div 
            className="comp-card traditional-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="comp-card-header">
              <h3>Traditional Learning</h3>
            </div>
            <ul className="comp-list">
              {traditional.map((item, index) => (
                <li key={index}>
                  <XCircle size={20} className="icon-traditional" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider (Decorative) */}
          <div className="vs-badge">VS</div>

          {/* Eduqra Card */}
          <motion.div 
            className="comp-card eduqra-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="comp-card-header">
              <div className="premium-glow"></div>
              <h3>Eduqra</h3>
            </div>
            <ul className="comp-list">
              {eduqra.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 size={20} className="icon-eduqra" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="comparison-outro"
        >
          Eduqra ensures faster, smarter, and more effective learning outcomes.
        </motion.p>
      </div>
    </section>
  );
};

export default Comparison;
