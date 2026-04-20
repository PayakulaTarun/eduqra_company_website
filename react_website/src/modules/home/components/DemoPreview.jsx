import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './DemoPreview.css';

const DemoPreview = () => {
  return (
    <section className="demo-preview section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="demo-header text-center"
        >
          <span className="section-subtitle">Live Preview</span>
          <h2 className="section-title">Experience the AI tutor</h2>
          <p className="section-desc max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Watch how our smart learning system adapts to your input in real time. Experience personalized education AI directly from your browser.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="demo-video-wrapper"
        >
          {/* Placeholder for an actual GIF / Demo Video */}
          <div className="demo-mockup">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80" 
              alt="Eduqra AI Learning Platform Dashboard" 
              className="demo-image"
            />
            <div className="demo-overlay">
              <button className="play-button" aria-label="Play Demo">
                <Play size={40} className="play-icon" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPreview;
