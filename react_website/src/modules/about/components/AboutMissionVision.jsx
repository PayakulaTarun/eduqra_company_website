import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2 } from 'lucide-react';
import './AboutMissionVision.css';

const AboutMissionVision = () => {
  return (
    <section className="about-mv section bg-light">
      <div className="container mv-grid">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mv-card mission"
        >
          <div className="mv-icon mission-icon">
            <Stethoscope size={32} />
          </div>
          <h3>Our Mission</h3>
          <p>
            To empower learners worldwide by providing accessible, AI-driven, and career-focused education that bridges the gap between potential and opportunity.
          </p>
          <ul className="mv-list">
            <li><CheckCircle2 size={20} className="check-icon" /> Accessible To Everyone</li>
            <li><CheckCircle2 size={20} className="check-icon" /> AI-Driven Personalization</li>
            <li><CheckCircle2 size={20} className="check-icon" /> Career-Focused Outcomes</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mv-card vision"
        >
          <div className="mv-icon vision-icon">
            <Stethoscope size={32} />
          </div>
          <h3>Our Vision</h3>
          <p>
            To become the global leader in AI-powered education, creating a world where every individual has the tools and knowledge to thrive in the age of intelligence.
          </p>
          <ul className="mv-list">
            <li><CheckCircle2 size={20} className="check-icon" /> Global Education Leader</li>
            <li><CheckCircle2 size={20} className="check-icon" /> Innovation In Learning</li>
            <li><CheckCircle2 size={20} className="check-icon" /> Empowering Intelligence</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
