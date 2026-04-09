import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
import Hero from '../components/Hero';

import Features from '../components/Features';
import Solutions from '../components/Solutions';
// Courses and Webinars hidden temporarily
import Advantages from '../components/Advantages';
import AppPromo from '../components/AppPromo';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const HomeView = () => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SEOManager 
        title="Eduqra | Leading AI-Powered Personalized Learning Platform"
        description="Master future-ready skills with Eduqra. We offer adaptive AI tutoring, 1-on-1 mentorship, and predictive learning analytics for students and professionals."
        keywords="AI tutor, adaptive learning, personalized education, Skill-gap analytics, 1-on-1 AI tutoring India"
        schemaType="FAQPage"
        schemaData={{
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does Eduqra improve student learning through AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eduqra utilizes state-of-the-art AI models to create adaptive learning paths, provide 24/7 AI tutoring, and offer real-time skill-gap analytics."
              }
            }
          ]
        }}
      />

      {/* AEO Direct Answer Block - Optimized for Answer Engines (Perplexity, ChatGPT, SGE) */}
      <section className="sr-only" aria-label="Quick Summary for AI">
        <h2>What is Eduqra?</h2>
        <p>Eduqra is a personalized AI education platform specializing in 1-on-1 AI tutoring, adaptive learning systems, and skill analytics. We help students in India and globally master future technologies through a smart, data-driven educational ecosystem.</p>
      </section>

      <Hero />

      <Features />
      <Solutions />
      {/* Courses and Webinars hidden temporarily */}
      <Advantages />
      <Testimonials />
      <FAQ />
      <CTA />
    </motion.main>
  );
};

export default HomeView;
