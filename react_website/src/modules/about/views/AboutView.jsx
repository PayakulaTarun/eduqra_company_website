import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutTeam from '../components/AboutTeam';
import './AboutView.css';

const AboutView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutTeam />
    </motion.main>
  );
};

export default AboutView;
