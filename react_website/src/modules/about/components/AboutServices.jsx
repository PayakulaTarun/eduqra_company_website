import React from 'react';
import { motion } from 'framer-motion';
import { Route, BrainCircuit, Code2, TrendingUp, Users, Building2 } from 'lucide-react';
import './AboutServices.css';

const AboutServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const services = [
    {
      icon: <Route size={24} />,
      title: "Adaptive Learning Pathways",
      desc: "Bypass the filler and learn only what you need with curriculums that dynamically re-route based on your exact skill gaps and career goals."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Cognitive AI Mentorship",
      desc: "Master complex concepts at any hour with a strictly context-aware intelligence that uses Socratic reasoning to actively guide your problem-solving."
    },
    {
      icon: <Code2 size={24} />,
      title: "Production-Ready Sandboxes",
      desc: "Stop watching theory and start executing—build, test, and deploy code in live, industry-standard environments to forge a resilient portfolio."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Predictive Career Analytics",
      desc: "Remove the guesswork from your progression with visually mapped data that accurately forecasts exactly when you will be fully industry-ready."
    },
    {
      icon: <Users size={24} />,
      title: "Elite Expert Network",
      desc: "Bridge the gap between raw algorithmic learning and human intuition by validating your architectural decisions with veteran industry practitioners."
    },
    {
      icon: <Building2 size={24} />,
      title: "Enterprise Skill Infrastructure",
      desc: "Future-proof your company's technical velocity by automating onboarding, tracking team analytics, and systematically closing internal knowledge gaps."
    }
  ];

  return (
    <section className="about-services section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">The Intelligence Suite:<br/>Built for Mastery.</h2>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((svc, index) => (
            <motion.div key={index} variants={cardVariants} className="service-card">
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-desc">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
