import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './WhyDifferent.css';

const WhyDifferent = () => {
  const points = [
    'AI-driven personalization',
    'Real-world skill focus',
    'Continuous progress tracking',
    'Industry-aligned curriculum',
    'Scalable for individuals and institutions'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="why-different section">
      <div className="container why-different-container">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="why-different-content"
        >
          <span className="section-subtitle">Positioning</span>
          <h2 className="section-title text-left">Why Eduqra Stands Out</h2>
          
          <p className="why-different-intro">
            Unlike traditional learning platforms, Eduqra combines artificial intelligence with education to create a truly <a href="/ai-solutions" className="context-link-alt">adaptive learning experience</a>.
          </p>

          <p className="why-different-outro">
            We don’t just teach — we transform how you learn.
          </p>
        </motion.div>

        <motion.div 
          className="why-different-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              className="why-different-item"
              variants={itemVariants}
            >
              <div className="check-icon-wrapper">
                <CheckCircle2 size={24} />
              </div>
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyDifferent;
