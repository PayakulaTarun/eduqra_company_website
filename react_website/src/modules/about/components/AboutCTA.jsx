import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import './AboutCTA.css';

const AboutCTA = () => {
  return (
    <section className="about-cta section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="cta-wrapper"
        >
          <div className="cta-glow-bg"></div>
          
          <div className="cta-content">
            <h2 className="cta-title">Stop Watching the Future.<br/>Start Building It.</h2>
            <p className="cta-desc">
              The gap between those who leverage AI and those who ignore it is widening every single second. Don’t wait four years for traditional institutions to catch up. Tap into the cognitive engine that is aggressively accelerating the careers of tomorrow’s elite operators. The infrastructure is ready. Are you?
            </p>
            
            <div className="cta-actions">
              <Link to="/join" className="cta-btn-primary">
                <Zap size={20} className="cta-btn-icon" />
                Ignite Your Career Today
              </Link>
              <Link to="/ai-solutions" className="cta-btn-secondary">
                Initialize Your AI Engine
                <ArrowRight size={20} className="cta-btn-icon" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
