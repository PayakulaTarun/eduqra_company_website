import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, School } from 'lucide-react';
import './WhoIsFor.css';

const WhoIsFor = () => {
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
  const audiences = [
    {
      icon: <GraduationCap size={28} className="icon" />,
      title: 'Students',
      description: 'Learn AI, coding, and career-ready skills with personalized guidance and structured learning paths.'
    },
    {
      icon: <Rocket size={28} className="icon" />,
      title: 'Beginners',
      description: 'Start from zero with step-by-step AI-driven learning designed for clarity and confidence.'
    },
    {
      icon: <Briefcase size={28} className="icon" />,
      title: 'Professionals',
      description: 'Upskill with industry-relevant courses in AI, data science, and modern technologies.'
    },
    {
      icon: <School size={28} className="icon" />,
      title: 'Institutions',
      description: 'Enable scalable, AI-powered education systems for smarter and more efficient learning.'
    }
  ];

  return (
    <section className="who-is-for section bg-light">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center"
          style={{ display: 'block', margin: '0 auto 10px', textAlign: 'center' }}
        >
          For Everyone
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center"
          style={{ textAlign: 'center' }}
        >
          Who Is Eduqra For?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="who-is-for-intro"
        >
          Eduqra is built for students, aspiring professionals, and lifelong learners who want to master in-demand skills through an AI-powered learning platform. Whether you're starting your journey in artificial intelligence or aiming to upgrade your career with real-world skills, Eduqra adapts to your goals and learning style.
        </motion.p>
        
        <div className="who-is-for-grid">
          {audiences.map((audience, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="audience-card"
            >
              <div className="icon-wrapper">
                {audience.icon}
              </div>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="who-is-for-outro"
        >
          With adaptive learning, real-time feedback, and skill-based training, Eduqra ensures every learner achieves measurable growth and career readiness.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoIsFor;
