import React from 'react';
import { motion } from 'framer-motion';
import './Webinars.css';

const webinars = [
  {
    date: 'March',
    day: '25',
    title: 'The Future Of Generative AI',
    host: 'Hosted by Industry Experts'
  },
  {
    date: 'March',
    day: '25',
    title: 'Mastering Data Visualization',
    host: 'Hosted by Industry Experts'
  }
];

const Webinars = () => {
  return (
    <section className="webinars section" id="webinars">
      <div className="container webinars-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="webinars-image"
        >
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Expert-Led Live Webinars" />
        </motion.div>
        
        <div className="webinars-content">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="webinars-subtitle">Live Learning</span>
            <h2 className="webinars-title">Join Expert-Led Live Webinars</h2>
            <p className="webinars-desc">
              Improve your skills with real-time interaction. Our webinars cover the latest trends in AI, tech, and career growth.
            </p>
          </motion.div>
          
          <div className="webinars-list">
            {webinars.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.15), duration: 0.5 }}
                className="webinar-card"
              >
                <div className="webinar-date-box">
                  <span className="date-month">{item.date}</span>
                  <span className="date-day">{item.day}</span>
                </div>
                <div className="webinar-info">
                  <h4>{item.title}</h4>
                  <p>{item.host}</p>
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
