import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content text-left"
        >
          <span className="badge-pill">Next-Gen Learning Platform</span>
          <h1 className="hero-title">
            AI-Powered Learning<br />
            <span className="text-secondary-blue">For Future Skills</span>
          </h1>
          <p className="hero-desc">
            Master AI, Data Science, and career-focused skills with personalized learning experiences designed for the modern era.
          </p>
          
          <div className="hero-buttons">
            <a href="/courses" className="btn btn-primary btn-pill">Explore Courses &rarr;</a>
            <a href="/join" className="btn btn-outline-pill">Join Now</a>
          </div>

          <div className="hero-proof-row">
            <div className="avatars-group">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="user" />
            </div>
            <div className="proof-text">
              <strong>50+</strong>
              <span>To customer reviews</span>
            </div>
          </div>
        </motion.div>
        
        <div className="hero-visual-elements">
          {/* Top Floating Icons/Avatars */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="floating-head head-1"
          >
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&q=80" alt="student" />
          </motion.div>

          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="floating-badge hero-badge-support"
          >
            <div className="badge-icon green-icon">
              <Headphones size={20} />
            </div>
            <div className="badge-info">
              <strong>24/7 Support</strong>
              <span>Always Available</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="floating-head head-2"
          >
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80" alt="student" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="floating-head head-3"
          >
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80" alt="student" />
          </motion.div>

          {/* Bottom Floating Icons/Avatars */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="floating-head head-4"
          >
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80" alt="student" />
          </motion.div>

          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="floating-badge hero-badge-doctors"
          >
            <div className="badge-icon blue-icon">
              <CheckCircle2 size={20} />
            </div>
            <div className="badge-info">
              <strong>Certified Doctors</strong>
              <span>Global Expertise</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
