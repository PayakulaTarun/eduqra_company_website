import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Code, Award } from 'lucide-react';
import './Advantages.css';

const advantages = [
  {
    icon: <Users size={32} />,
    title: 'Expert Mentors',
    text: 'Learn from the best in the industry with years of experience.'
  },
  {
    icon: <Brain size={32} />,
    title: 'AI Learning System',
    text: 'Adaptive technology that understands your unique needs.'
  },
  {
    icon: <Code size={32} />,
    title: 'Real Projects',
    text: 'Apply your knowledge to real-world scenarios and build a portfolio.'
  }
];

const certification = {
  icon: <Award size={32} />,
  title: 'Certification',
  text: 'Get recognized globally with our industry-standard certificates.'
};

const Advantages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="advantages section">
      <div className="container">
        <div className="advantages-header">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="advantages-subtitle"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="advantages-title"
          >
            The Eduqra Advantage
          </motion.h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="advantages-grid"
        >
          {advantages.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="advantage-card"
            >
              <div className="advantage-icon-wrapper">
                <span className="advantage-icon">{item.icon}</span>
              </div>
              <h3 className="advantage-card-title">{item.title}</h3>
              <p className="advantage-card-text">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="advantages-footer"
        >
          <div className="advantage-card centered">
            <div className="advantage-icon-wrapper">
              <span className="advantage-icon">{certification.icon}</span>
            </div>
            <h3 className="advantage-card-title">{certification.title}</h3>
            <p className="advantage-card-text">{certification.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
