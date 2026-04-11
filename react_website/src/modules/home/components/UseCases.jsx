import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, School, Building2 } from 'lucide-react';
import './UseCases.css';

const UseCases = () => {
  const cases = [
    {
      icon: <GraduationCap size={24} className="icon" />,
      text: 'Students preparing for future careers',
      colorClass: 'blue-case'
    },
    {
      icon: <Briefcase size={24} className="icon" />,
      text: 'Professionals switching to tech roles',
      colorClass: 'green-case'
    },
    {
      icon: <School size={24} className="icon" />,
      text: 'Schools integrating AI-based learning',
      colorClass: 'purple-case'
    },
    {
      icon: <Building2 size={24} className="icon" />,
      text: 'Companies training employees at scale',
      colorClass: 'orange-case'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="use-cases section bg-light">
      <div className="container">
        
        <div className="use-cases-header">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
            style={{ display: 'block', margin: '0 auto 10px', textAlign: 'center' }}
          >
            Adaptability
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
            style={{ textAlign: 'center' }}
          >
            Use Cases of Eduqra
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="use-cases-intro"
          >
            Eduqra is not just a learning platform — it's a complete ecosystem:
          </motion.p>
        </div>

        <motion.div 
          className="use-cases-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cases.map((useCase, index) => (
            <motion.div 
              key={index} 
              className={`use-case-card ${useCase.colorClass}`}
              variants={itemVariants}
            >
              <div className="case-icon">
                {useCase.icon}
              </div>
              <p>{useCase.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="use-cases-outro"
        >
          Our AI adapts to each use case seamlessly.
        </motion.p>

      </div>
    </section>
  );
};

export default UseCases;
