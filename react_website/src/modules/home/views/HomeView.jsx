import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
import Hero from '../components/Hero';

import Features from '../components/Features';
import WhoIsFor from '../components/WhoIsFor';
import HowItWorks from '../components/HowItWorks';
import WhyDifferent from '../components/WhyDifferent';
import UseCases from '../components/UseCases';
import Comparison from '../components/Comparison';
import Solutions from '../components/Solutions';
// Courses and Webinars hidden temporarily
import Advantages from '../components/Advantages';
import AppPromo from '../components/AppPromo';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';
import SEOContent from '../components/SEOContent';
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
        title="Eduqra | AI-Powered Personalized Learning Platform"
        description="Master global skills with Eduqra. We provide 24/7 AI tutoring, adaptive learning paths, and predictive skill-gap analytics for students and professionals in India."
        keywords="AI tutor India, adaptive learning platform, personalized education AI, skill-gap analytics, 1-on-1 AI mentorship"
        ogImage="https://eduqra.com/images/og-home.jpg"
        canonical="/"
        schemaType="FAQPage"
        schemaData={{
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Eduqra's AI Personal Tutor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eduqra's AI Personal Tutor is a 24/7 learning companion that provides personalized guidance, real-time feedback, and adaptive study plans tailored to each student's unique learning style."
              }
            },
            {
              "@type": "Question",
              "name": "How does adaptive learning work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our adaptive learning system uses machine learning to identify your knowledge gaps and adjust the curriculum difficulty and pace in real-time."
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
      <WhoIsFor />
      <HowItWorks />
      <WhyDifferent />
      <UseCases />
      <Comparison />
      <Solutions />
      {/* Courses and Webinars hidden temporarily */}
      <Advantages />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <SEOContent />
      <CTA />
    </motion.main>
  );
};

export default HomeView;
