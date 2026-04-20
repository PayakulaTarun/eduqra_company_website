import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../shared/lib/firebase';
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
            AI-powered <br />
            <span className="text-gradient">personalized learning platform</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-desc">
            Stop struggling with generic education. Eduqra provides a smart learning system tailored to your unique pace. Experience predictive progress tracking, real-time AI tutoring, and mastery-based curriculums in India and beyond.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <Link 
              to="/ai-solutions" 
              className="btn btn-primary"
              onClick={() => trackEvent('cta_click', { button_name: 'Start Learning - Hero', location: 'Hero Area' })}
            >
              Start Learning <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline"
              onClick={() => trackEvent('cta_click', { button_name: 'Try AI Demo - Hero', location: 'Hero Area' })}
            >
              Try AI Demo
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-proof-row">
            <div className="proof-metrics">
              <div className="metric">
                <strong>100k+</strong>
                <span>Active Learners</span>
              </div>
              <div className="metric">
                <strong>98%</strong>
                <span>AI Accuracy</span>
              </div>
              <div className="metric">
                <strong>95%</strong>
                <span>Success Rate</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-partners" style={{ marginTop: '20px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted by</span>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0.6 }}>
              {/* Partner Logos Placeholders */}
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'serif' }}>EduCorp</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'sans-serif' }}>TechLearn</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'monospace' }}>INSTITUTE X</div>
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
