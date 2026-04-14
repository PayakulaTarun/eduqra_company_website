import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero premium-light-hero">
      <div className="about-hero-glow"></div>
      <div className="about-hero-mesh"></div>
      <div className="container">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="about-hero-content"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="about-hero-eyebrow"
          >
            Empowering Students, Innovators, and Visionaries
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="about-hero-title"
          >
            Master the Future with the World’s Foremost <span className="text-gradient">AI Learning Platform</span>.
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="about-hero-subtitle"
          >
            Education shouldn't be one-size-fits-all. We deliver <strong>personalized education</strong> that dynamically adapts to your pace, goals, and learning style. Stop memorizing outdated concepts—master the <strong>future skills</strong> that matter, build real-world expertise, and accelerate your path to the industry-leading jobs of tomorrow.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="about-hero-actions"
          >
            <Link to="/ai-solutions" className="about-btn-primary">
              Start Your AI Journey
            </Link>
            <a href="#mission" className="about-btn-secondary">
              Explore Our Mission
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
