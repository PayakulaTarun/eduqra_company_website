import React from 'react';
import { motion } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-rings"></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-hero-content"
        >
          <h1 className="about-hero-title">Empowering The Future Through Smart Learning</h1>
          <p className="about-hero-subtitle">
            We are on a mission to democratize high-quality education using the power of Artificial Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
