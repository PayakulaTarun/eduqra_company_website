import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import './AboutMissionVision.css';

const AboutMissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="about-mv section bg-light">
      <div className="container mv-grid">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mv-card mission"
        >
          <div className="mv-icon mission-icon">
            <Target size={32} />
          </div>
          <h3>Our Mission</h3>
          <p>
            To empower learners worldwide by providing accessible, AI-driven, and career-focused education that bridges the gap between potential and opportunity.
          </p>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mv-list"
          >
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> Accessible To Everyone</motion.li>
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> AI-Driven Personalization</motion.li>
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> Career-Focused Outcomes</motion.li>
          </motion.ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mv-card vision"
        >
          <div className="mv-icon vision-icon">
            <Eye size={32} />
          </div>
          <h3>Our Vision</h3>
          <p>
            To become the global leader in AI-powered education, creating a world where every individual has the tools and knowledge to thrive in the age of intelligence.
          </p>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mv-list"
          >
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> Global Education Leader</motion.li>
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> Innovation In Learning</motion.li>
            <motion.li variants={itemVariants}><CheckCircle2 size={20} className="check-icon" /> Empowering Intelligence</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
