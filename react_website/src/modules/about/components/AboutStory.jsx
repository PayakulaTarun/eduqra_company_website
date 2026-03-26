import React from 'react';
import { motion } from 'framer-motion';
import './AboutStory.css';

const AboutStory = () => {
  return (
    <section className="about-story section">
      <div className="container story-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-image"
        >
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Our Story" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-content"
        >
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title">Built To Transform Traditional Education</h2>
          <p>
            Eduqra was born out of a simple observation: traditional education systems are often too slow to adapt to the rapidly changing tech landscape. We saw a gap between what is taught in classrooms and what is required in the real world.
          </p>
          <p>
            By leveraging AI, we've created a platform that doesn't just deliver content, but understands each learner's unique needs, strengths, and weaknesses.
          </p>
          
          <div className="story-stats">
            <div className="story-stat">
              <span className="stat-value">2025</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="story-stat">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Active Learners</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
