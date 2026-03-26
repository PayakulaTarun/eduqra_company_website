import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, Play } from 'lucide-react';
import './AppPromo.css';

const AppPromo = () => {
  return (
    <section className="app-promo section">
      <div className="container">
        <div className="promo-card">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="promo-content"
          >
            <span className="section-subtitle" style={{ textAlign: 'left', color: 'white' }}>Mobile Learning</span>
            <h2 className="promo-title">Learn on the go with our AI-Powered Mobile App</h2>
            <p className="promo-desc">
              Carry your learning journey wherever you go. Our AI Tutor is available 24/7 on your smartphone to help you master any subject.
            </p>
            <div className="app-buttons">
              <a href="#" className="btn-app">
                <Apple size={24} />
                <div className="btn-text">
                  <span className="small">Download on the</span>
                  <span className="big">App Store</span>
                </div>
              </a>
              <a href="#" className="btn-app">
                <Play size={24} />
                <div className="btn-text">
                  <span className="small">Get it on</span>
                  <span className="big">Google Play</span>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="promo-image"
          >
            <Smartphone size={300} strokeWidth={0.5} color="rgba(255,255,255,0.2)" />
            <div className="screen-content">
              {/* This represents a screenshot of the app */}
              <div className="screen-header">
                <span>Eduqra AI Tutor</span>
              </div>
              <div className="chat-bubble">Hello! I'm your AI tutor. How can I help you learn today?</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
