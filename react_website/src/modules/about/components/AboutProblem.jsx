import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Briefcase } from 'lucide-react';
import './AboutProblem.css';

const problems = [
  {
    icon: <Clock size={24} className="problem-icon" />,
    title: 'The Pace Mismatch',
    desc: 'Technology moves at lightspeed; universities move at glacial speed. By the time a traditional course on AI or software engineering is approved, the frameworks are already obsolete.'
  },
  {
    icon: <Users size={24} className="problem-icon" />,
    title: 'The Personalization Deficit',
    desc: "You are treated like a statistical average. Traditional models ignore your specific background, unique learning velocity, and career goals, forcing you into a rigid structure that wastes your time."
  },
  {
    icon: <Briefcase size={24} className="problem-icon" />,
    title: 'The Experience Paradox',
    desc: "Entry-level jobs now require three years of experience. A theoretical degree doesn't cut it anymore; employers are actively seeking candidates who can adapt, execute, and build with real-world AI tools."
  }
];

const AboutProblem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };

  return (
    <section className="about-problem section">
      <div className="container">
        <div className="problem-inner">

          {/* ── Left: Image ── */}
          <motion.div
            className="problem-image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="problem-image-wrap">
              <div className="problem-image-glow" />
              <motion.img
                src="/about-problem.png"
                alt="Contrast between outdated traditional education and modern AI-powered learning"
                className="problem-image"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* ── Right: Text + Cards ── */}
          <div className="problem-right-col">
            <motion.div
              className="problem-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="problem-eyebrow">The Real Problem</span>
              <h2 className="problem-title">Preparing for the Future Using Tools from the Past.</h2>
              <div className="problem-subtitle">
                <p>
                  We are preparing for jobs that haven't been invented yet, using curriculums designed decades ago. Traditional education operates on an outdated factory model: sit down, memorize, pass the standardized test, and hope someone hires you.
                </p>
                <p>
                  But the world doesn't work that way anymore. AI is fundamentally reshaping the workforce, and waiting four years to update a syllabus is a guaranteed path to irrelevance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="problem-cards"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {problems.map((prob, index) => (
                <motion.div key={index} variants={cardVariants} className="problem-card">
                  <div className="problem-icon-wrapper">
                    {prob.icon}
                  </div>
                  <div className="problem-card-body">
                    <h3 className="problem-card-title">{prob.title}</h3>
                    <p className="problem-card-desc">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProblem;
