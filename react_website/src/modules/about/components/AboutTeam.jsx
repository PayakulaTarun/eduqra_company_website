import React from 'react';
import { motion } from 'framer-motion';
import './AboutTeam.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    name: 'Tarun Chandra',
    role: 'CEO & Founder',
    image: '/images/tarun.jpeg',
    linkedin: 'https://www.linkedin.com/in/payakulatarunchandra',
    bio: "Tarun drives the architectural vision for Eduqra, bridging the complex gap between advanced AI and scalable education systems to reshape global talent development."
  },
  {
    name: 'V. Bhanu Shankar',
    role: 'Co-Founder',
    image: '/images/bhanu_co-founder.jpeg',
    linkedin: 'https://www.linkedin.com/in/bhanu-v7/',
    bio: "Bhanu commands the operational execution and technical deployment of Eduqra's core algorithmic methodologies, ensuring a zero-friction, production-grade learning experience."
  },
];

const AboutTeam = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
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
          className="team-header"
        >
          <div className="team-eyebrow">The Architects</div>
          <h2 className="team-title">Meet the Minds Behind Eduqra</h2>
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
              className="team-card-premium"
            >
              <div className="team-image-wrapper">
                <img loading="lazy" src={member.image} alt={member.name} className="team-image" />
                
                {/* Always visible gradient at bottom to show names clearly */}
                <div className="team-image-gradient"></div>

                <div className="team-card-content">
                  <div className="team-name-row">
                    <div>
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin" aria-label={`LinkedIn for ${member.name}`}>
                      <LinkedinIcon />
                    </a>
                  </div>
                  
                  {/* Bio that reveals on hover */}
                  <div className="team-bio-reveal">
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
