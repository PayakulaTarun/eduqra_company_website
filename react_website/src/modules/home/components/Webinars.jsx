import React from 'react';
import { motion } from 'framer-motion';
import './Webinars.css';

const webinars = [
  {
    date: 'MARCH',
    day: '25',
    title: 'The Future Of Generative AI',
    host: 'Hosted by Industry Experts'
  },
  {
    date: 'MARCH',
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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="webinars-image-wrapper"
        >
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" 
            alt="Library Study Group" 
            className="webinar-main-img"
          />
        </motion.div>
        
        <div className="webinars-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="webinar-card"
              >
                <div className="webinar-date-box">
                  <span className="date-month">{item.date}</span>
                  <span className="date-day">{item.day}</span>
                </div>
                <div className="webinar-info">
                  <h4 className="webinar-item-title">{item.title}</h4>
                  <p className="webinar-item-host">{item.host}</p>
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
