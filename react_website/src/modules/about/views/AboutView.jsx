import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
import AboutHero from '../components/AboutHero';
import AboutProblem from '../components/AboutProblem';
import AboutSolution from '../components/AboutSolution';
import AboutServices from '../components/AboutServices';
import AboutStory from '../components/AboutStory';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutTeam from '../components/AboutTeam';
import AboutCTA from '../components/AboutCTA';
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
        title="About Eduqra | The World's Foremost AI Learning Platform"
        description="Discover Eduqra, the cutting-edge AI EdTech platform natively engineered to democratize global intelligence through adaptive learning and 1-on-1 AI tutoring."
        keywords="AI learning platform, adaptive learning ecosystem, AI education technology, personalized mentorship"
        canonical="/about"
        schemaType="Organization"
        schemaData={{
          "slogan": "Born From Frustration. Built For the Future.",
          "founders": [
            {
              "@type": "Person",
              "name": "Tarun Chandra",
              "jobTitle": "CEO & Founder",
              "sameAs": "https://www.linkedin.com/in/payakulatarunchandra"
            },
            {
              "@type": "Person",
              "name": "V. Bhanu Shankar",
              "jobTitle": "Co-Founder",
              "sameAs": "https://www.linkedin.com/in/bhanu-v7/"
            }
          ],
          "description": "Eduqra is a bleeding-edge educational technology platform utilizing sophisticated AI models to deliver hyper-personalized, adaptive learning to global students."
        }}
      />
      <AboutHero />
      <AboutProblem />
      <AboutSolution />
      <AboutServices />
      <AboutStory />
      <AboutMissionVision />
      <AboutTeam />
      <AboutCTA />
    </motion.main>
  );
};

export default AboutView;
