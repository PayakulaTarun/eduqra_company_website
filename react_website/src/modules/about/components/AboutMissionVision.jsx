import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Rocket } from 'lucide-react';
import './AboutMissionVision.css';

const AboutMissionVision = () => {
  return (
    <section className="about-mv section">
      <div className="mv-background-mesh"></div>
      <div className="container relative">
        <div className="mv-grid">
          {/* Mission Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mv-block"
          >
            <div className="mv-icon-wrapper mission-theme">
              <Rocket size={32} />
            </div>
            <h3 className="mv-title">The Tactical Mission</h3>
            <p className="mv-statement highlight-statement">
              To systematically dismantle learning barriers by building the most powerful, adaptive, and career-aligned educational AI engine in the world.
            </p>
            <p className="mv-narrative">
              We empower learners by providing hyper-accessible, AI-driven education that actively bridges the gap between raw potential and economic opportunity. We focus ruthlessly on what works: personalized curriculums, production-ready skills, and data-driven mentorship. Every feature we build is designed to accelerate careers and redefine what it means to be industry-ready.
            </p>
          </motion.div>

          {/* Vision Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mv-block"
          >
            <div className="mv-icon-wrapper vision-theme">
              <Globe2 size={32} />
            </div>
            <h3 className="mv-title">The Global Vision</h3>
            <p className="mv-statement highlight-statement">
              To forge the intelligent infrastructure of global education—making elite, career-launching knowledge accessible to every human on earth.
            </p>
            <p className="mv-narrative">
              The next leaps in human innovation depend on unlocking the millions of brilliant minds actively sidelined by the geographic and financial barriers of traditional education. We envision a future where high-tier learning is scalable, autonomous, and radically accessible. Eduqra isn’t simply updating the classroom; we are deploying a worldwide cognitive engine specifically designed to power the next generation of global innovators, operators, and leaders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
