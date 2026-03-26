import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section className="features section bg-light">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Why Choose Us?
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Smart AI Learning Platform
        </motion.h2>
        
        <div className="features-grid">
          {[
            { title: 'AI-Driven', text: 'Learning paths adapted directly to your learning styles and goals.' },
            { title: 'Skill-Focused', text: 'Curriculum that focuses heavily on practical and hands-on case studies.' },
            { title: 'Career-Oriented', text: 'Career-oriented skills to turn you into a premium resource.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="feature-card"
            >
              <div className="icon-wrapper">
                <Stethoscope size={24} className="icon" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
