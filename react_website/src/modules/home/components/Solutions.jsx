import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  return (
    <section className="solutions section" id="ai-solutions">
      <div className="container solutions-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="solutions-content"
        >
          <span className="section-subtitle" style={{ textAlign: 'left' }}>Core Features</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering Education With Artificial Intelligence</h2>
          <p className="solutions-desc" style={{ textAlign: 'left' }}>
            We provide a suite of AI tools designed to make learning more efficient, engaging, and personalized than ever before.
          </p>
          <ul className="check-list">
            {[
              'AI Personalized Learning Paths',
              'Real-Time Skill Assessment Reports',
              '24/7 AI Tutor Support',
              'Interactive & Practical Simulations'
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
              >
                <div className="check-icon-wrapper"><span className="check-icon">&#10004;</span></div> <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <a href="/courses" className="btn btn-primary" style={{ marginTop: '20px' }}>Start Learning Now &rarr;</a>
        </motion.div>
        
        <div className="solutions-grid">
          {[
            { title: 'AI Tutor', text: 'An AI tutor will guide you every step you take towards your learning.', color: 'bg-blue', delay: 0.1 },
            { title: 'Mentorship', text: 'Access to 1-on-1 expert mentorship to guide you efficiently.', color: 'bg-purple', delay: 0.2 },
            { title: 'Assessment', text: 'Advanced algorithms to track your performance and speed.', color: 'bg-orange', delay: 0.3 },
            { title: 'Masterclasses', text: 'Access to masterclasses for free and premium resources.', color: 'bg-green', delay: 0.4 }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className={`solution-card block-${card.title.toLowerCase()}`}
            >
              <div className={`icon-wrapper ${card.color}`}>
                <Stethoscope size={24} />
              </div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
