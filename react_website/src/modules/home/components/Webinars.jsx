import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Video } from 'lucide-react';
import './Webinars.css';

const Webinars = () => {
  return (
    <section className="webinars section" id="webinars">
      <div className="container webinars-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="webinars-image"
        >
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Expert-Led Live Webinars" />
        </motion.div>
        
        <div className="webinars-content">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Join Learning</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Join Expert-Led Live Webinars</h2>
            <p className="webinars-desc">
              Improve your skills with real-time interaction. Our webinars cover the latest trends in AI, tech, and career growth.
            </p>
          </motion.div>
          
          <div className="webinars-list">
            {[
              { icon: 'MonitorPlay', title: 'Interactive Live Sessions', text: 'Learn from industry experts' },
              { icon: 'Video', title: 'Access to recordings', text: 'Learn at your own rhythm' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="webinar-item"
              >
                <div className="webinar-icon">
                  {i === 0 ? <MonitorPlay size={24} /> : <Video size={24} />}
                </div>
                <div className="webinar-info">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
