import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import './Advantages.css';

const Advantages = () => {
  return (
    <section className="advantages section bg-light">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Why Choose Us
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          The Eduqra Advantage
        </motion.h2>
        
        <div className="advantages-grid">
          {[
            { icon: <Stethoscope size={32} />, title: 'Expert Mentors', text: 'Learn from top experts in the industry with years of experience.' },
            { icon: <Stethoscope size={32} />, title: 'AI Learning System', text: 'Adapt to learning styles, the process is faster and better.' },
            { icon: <Stethoscope size={32} />, title: 'Real Projects', text: 'Apply what you\'ve learned in the real world to get an edge in job placement.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="advantage-card"
            >
              <div className="icon-wrapper">
                <span className="icon">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="cert-card"
        >
          <div className="icon-wrapper">
            <span className="icon"><Stethoscope size={32} /></span>
          </div>
          <div className="cert-info">
            <h3>Certification</h3>
            <p>Get a recognized certificate after completing the courses.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
