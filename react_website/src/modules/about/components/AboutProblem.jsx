import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Briefcase } from 'lucide-react';
import './AboutProblem.css';

const AboutProblem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const problems = [
    {
      icon: <Clock size={28} className="problem-icon" />,
      title: "The Pace Mismatch",
      desc: "Technology moves at lightspeed; universities move at glacial speed. By the time a traditional course on AI or software engineering is approved, the frameworks are already obsolete."
    },
    {
      icon: <Users size={28} className="problem-icon" />,
      title: "The Personalization Deficit",
      desc: "You are treated like a statistical average. Traditional models ignore your specific background, unique learning velocity, and career goals, forcing you into a rigid structure that wastes your time."
    },
    {
      icon: <Briefcase size={28} className="problem-icon" />,
      title: "The Experience Paradox",
      desc: "Entry-level jobs now require three years of experience. A theoretical degree doesn't cut it anymore; employers are actively seeking candidates who can adapt, execute, and build with real-world AI tools."
    }
  ];

  return (
    <section className="about-problem section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="problem-header"
        >
          <h2 className="problem-title">Preparing for the Future Using Tools from the Past.</h2>
          <div className="problem-subtitle">
            <p>
              We are preparing for jobs that haven’t been invented yet, using curriculums designed decades ago. Traditional education operates on an outdated factory model: sit down, memorize, pass the standardized test, and hope someone hires you.
            </p>
            <p>
              But the world doesn't work that way anymore. AI is fundamentally reshaping the workforce, and waiting four years to update a syllabus is a guaranteed path to irrelevance. The system provides zero personalization, punishes unique learning speeds, and leaves millions heavily credentialed but completely unequipped for reality.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="problem-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((prob, index) => (
            <motion.div key={index} variants={cardVariants} className="problem-card">
              <div className="problem-icon-wrapper">
                {prob.icon}
              </div>
              <h3 className="problem-card-title">{prob.title}</h3>
              <p className="problem-card-desc">{prob.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProblem;
