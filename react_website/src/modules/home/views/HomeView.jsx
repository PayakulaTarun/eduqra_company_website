import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Courses from '../components/Courses';
import Webinars from '../components/Webinars';
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
      <Hero />
      <Features />
      <Solutions />
      <Courses />
      <Webinars />
      <Advantages />
      <Testimonials />
      <CTA />
    </motion.main>
  );
};

export default HomeView;
