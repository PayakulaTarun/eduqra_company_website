import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div variants={itemVariants} className="badge-pill">
            <span className="dot" /> Next-Gen Learning Platform
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            AI-Powered Smart Learning<br />
            <span className="text-gradient">For Future Skills</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-desc">
            Master AI, Data Science, and career-focused skills with personalized learning experiences designed for the modern era.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="/courses" className="btn btn-primary">
              Explore Courses <ArrowRight size={20} />
            </a>
            <a href="/join" className="btn btn-outline">Join Now</a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-proof-row">
            <div className="avatars-group">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="user" />
            </div>
            <div className="proof-text">
              <strong>12k+</strong>
              <span>Global active learners</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="hero-visual-section"
        >
          <div className="hero-main-img-wrapper">
            <img 
              src="/images/home_page_hero_section.jpeg" 
              alt="AI-Powered Learning Visualization" 
              className="hero-main-img" 
            />
            
            {/* Floating Badges - Hidden on small mobile */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="floating-badge badge-top desktop-only-flex"
            >
              <div className="badge-icon green-icon">
                <Users size={20} />
              </div>
              <div className="badge-info">
                <strong>24/7 Support</strong>
                <span>Always Available</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="floating-badge badge-bottom desktop-only-flex"
            >
              <div className="badge-icon blue-icon">
                <CheckCircle2 size={20} />
              </div>
              <div className="badge-info">
                <strong>Expert Mentors</strong>
                <span>Global Expertise</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
