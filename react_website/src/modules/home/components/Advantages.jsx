import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Code, Award } from 'lucide-react';
import './Advantages.css';

const advantages = [
  {
    icon: <Users size={32} />,
    title: 'Industry Mentors',
    text: 'Collaborate with AI researchers and data scientists from leading global tech companies.'
  },
  {
    icon: <Brain size={32} />,
    title: 'Adaptive Learning',
    text: 'A smart environment that personalizes content based on your cognitive load and retention.'
  },
  {
    icon: <Code size={32} />,
    title: 'Practical Labs',
    text: 'Access hosted GPU environments and real-world datasets to build industry-grade AI projects.'
  },
  {
    icon: <Award size={32} />,
    title: 'Digital Credentials',
    text: 'Earn verified blockchain-backed certificates recognized by top technology employers.'
  }
];

const Advantages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
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
          viewport={{ once: true, margin: '-50px' }}
          className="advantages-grid"
        >
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="advantage-card"
            >
              <div className="advantage-icon-wrapper">
                <span className="advantage-icon">{item.icon}</span>
              </div>
              <h3 className="advantage-card-title">{item.title}</h3>
              <p className="advantage-card-text">{item.text}</p>
              <div className="advantage-card-glow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
