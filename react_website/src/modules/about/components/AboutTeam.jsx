import React from 'react';
import { motion } from 'framer-motion';
import './AboutTeam.css';

const teamMembers = [
  {
    name: 'Mr. Tarun Chandra',
    role: 'CEO & Founder',
    image: '/images/tarun.jpeg'
  },
  {
    name: 'V. Bhanu Shankar',
    role: 'Co-Founder',
    image: '/images/bhanu_co-founder.jpeg'
  },
];

const AboutTeam = () => {
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

  return (
    <section className="about-team section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-subtitle">Our Team</span>
          <h2 className="section-title">Meet The Minds Behind Eduqra</h2>
        </motion.div>
        
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="team-card"
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
