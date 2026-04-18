import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, LineChart, Bot } from 'lucide-react';
import './AboutSolution.css';

const AboutSolution = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const features = [
    {
      icon: <Network size={20} className="solution-icon" />,
      title: 'Dynamic Skill-to-Market Mapping',
      desc: 'Our algorithm benchmarks your baseline abilities against thousands of active job descriptions, generating a hyper-localized curriculum that bridges exact knowledge gaps.'
    },
    {
      icon: <Zap size={20} className="solution-icon" />,
      title: 'Real-Time Curriculum Adaptation',
      desc: 'The platform monitors your comprehension velocity. If you struggle, the engine automatically pivots, offering alternative explanations until complete mastery is achieved.'
    },
    {
      icon: <LineChart size={20} className="solution-icon" />,
      title: 'Continuous Predictive Analytics',
      desc: "Remove the guesswork from your progression. Our analytics forecast exactly when you'll be industry-ready based on problem-solving speed and retention rates."
    },
    {
      icon: <Bot size={20} className="solution-icon" />,
      title: 'Embedded AI Mentorship',
      desc: 'Our integrated, context-aware AI agents use advanced Socratic reasoning to guide your debugging process, forcing you to develop critical problem-solving architecture.'
    }
  ];

  return (
    <section className="about-solution section">
      <div className="solution-glow"></div>
      <div className="container relative">
        <div className="solution-split-layout">
          {/* ── Left Column: Header Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="solution-header-col"
          >
            <div className="solution-eyebrow">The Algorithmic Advantage</div>
            <h2 className="solution-title">Not a Course Provider. A Cognitive Learning Engine.</h2>
            <p className="solution-subtitle">
              We don’t distribute generic, pre-recorded videos; we build highly personalized, adaptive intelligence environments. Eduqra’s proprietary AI architecture creates a continuous feedback loop that automatically re-routes your curriculum to ensure complete mastery—closing the gap between what you know and what the future demands.
            </p>
          </motion.div>

          {/* ── Right Column: 2x2 Grid ── */}
          <motion.div
            className="solution-cards-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {features.map((feat, index) => (
              <motion.div key={index} variants={cardVariants} className="solution-card">
                <div className="solution-card-glow"></div>
                <div className="solution-card-content">
                  <div className="solution-icon-wrapper">
                    {feat.icon}
                  </div>
                  <h3 className="solution-card-title">{feat.title}</h3>
                  <p className="solution-card-desc">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution;
