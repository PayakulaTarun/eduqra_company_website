import React from 'react';
import { motion } from 'framer-motion';
import { Target, Map, Cpu, LineChart, Award } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Target size={28} className="icon" />,
      number: '01',
      title: 'Skill Assessment',
      description: 'We analyze your current knowledge and identify skill gaps using AI-powered diagnostics.'
    },
    {
      icon: <Map size={28} className="icon" />,
      number: '02',
      title: 'Personalized Learning Path',
      description: 'Based on your goals, Eduqra generates a customized roadmap tailored to your learning style.'
    },
    {
      icon: <Cpu size={28} className="icon" />,
      number: '03',
      title: 'AI-Powered Learning',
      description: 'Learn through interactive lessons, real-world projects, and adaptive content.'
    },
    {
      icon: <LineChart size={28} className="icon" />,
      number: '04',
      title: 'Continuous Feedback',
      description: 'Get real-time insights, performance tracking, and improvement suggestions.'
    },
    {
      icon: <Award size={28} className="icon" />,
      number: '05',
      title: 'Career Readiness',
      description: 'Build industry-relevant skills and prepare for real-world challenges.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="how-it-works section">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center"
          style={{ display: 'block', margin: '0 auto 10px', textAlign: 'center' }}
        >
          Process
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center"
          style={{ textAlign: 'center' }}
        >
          How Eduqra Works
        </motion.h2>

        <motion.div 
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="step-card" 
              variants={itemVariants}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
