import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
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
      <SEOManager 
        title="About Eduqra | Our Mission to Democratize AI Learning"
        description="Learn about Eduqra's journey to transform education using artificial intelligence. Based in Hyderabad, we are building the future of adaptive learning for global students."
        canonical="/about"
        schemaType="BreadcrumbList"
        schemaData={{
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduqra.com/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://eduqra.com/about" }
          ]
        }}
      />
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutTeam />
    </motion.main>
  );
};

export default AboutView;
