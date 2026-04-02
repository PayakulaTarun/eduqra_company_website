import React from 'react';
import { motion } from 'framer-motion';
import './AboutStory.css';

const AboutStory = () => {
  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="about-story section">
      <div className="container story-grid">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-image-wrapper"
        >
          <div className="story-blue-frame">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Our Story" />
          </div>
        </motion.div>
        
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="story-content"
        >
          <motion.span variants={itemVariants} className="story-subtitle">Our Story</motion.span>
          <motion.h2 variants={itemVariants} className="story-title">Built To Transform Traditional Education</motion.h2>
          <motion.p variants={itemVariants}>
            Eduqra was born out of a simple observation: traditional education systems are often too slow to adapt to the rapidly changing tech landscape. We saw a gap between what is taught in classrooms and what is required in the real world.
          </motion.p>
          <motion.p variants={itemVariants}>
            By leveraging AI, we've created a platform that doesn't just deliver content, but understands each learner's unique needs, strengths, and weaknesses.
          </motion.p>
          
          <div className="story-stats">
            <motion.div variants={itemVariants} className="story-stat">
              <span className="stat-value">2025</span>
              <span className="stat-label">Founded</span>
            </motion.div>
            <motion.div variants={itemVariants} className="story-stat">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Active Learners</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
