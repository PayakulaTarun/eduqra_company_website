import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp } from 'lucide-react';
import './Features.css';

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="features section bg-light">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Why Choose Us?
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Smart AI Learning Platform
        </motion.h2>
        
        <div className="features-grid">
          {[
            { icon: <Zap size={24} className="icon" />, title: 'AI-Driven', text: 'Learning paths adapted directly to your learning styles and goals.' },
            { icon: <Target size={24} className="icon" />, title: 'Skill-Focused', text: 'Curriculum that focuses heavily on practical and hands-on case studies.' },
            { icon: <TrendingUp size={24} className="icon" />, title: 'Career-Oriented', text: 'Career-oriented skills to turn you into a premium resource.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="feature-card"
            >
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
