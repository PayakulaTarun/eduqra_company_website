import React, { useState } from 'react';
import SEOManager from '../../../shared/components/SEOManager';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, BarChart, Zap, CheckCircle2, ShieldCheck, ChevronDown, Target, Rocket, LineChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AISolutionsView.css';

const AISolutionsView = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "What is an AI learning platform?",
      a: "An AI learning platform is a next-generation educational ecosystem that uses artificial intelligence to adapt content, pace, and difficulty to each individual learner's unique needs in real-time."
    },
    {
      q: "How does the AI tutor for students actually work?",
      a: "Our AI tutor uses advanced AI models to explain concepts, answer questions using Socratic reasoning, and provide instant feedback on student work, simulating a private human mentor."
    },
    {
      q: "Can AI education tools help in competitive exams?",
      a: "Absolutely. AI education tools are designed to pinpoint high-yield topics and focus practice on your weakest areas, making them ideal for high-pressure competitive exam preparation."
    },
    {
      q: "How do I start learning with AI?",
      a: "Getting started is simple. Just click the 'Start Learning with AI' button, complete a quick skill assessment, and our platform will generate your personalized growth roadmap immediately."
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ai-solutions-page"
    >
      <SEOManager 
        title="AI Learning Platform | Eduqra AI Solutions"
        description="Discover Eduqra’s AI-powered learning platform with personalized tutoring, analytics, and adaptive learning tools for students and educators."
        keywords="AI learning platform, AI tutor, AI education tools, personalized learning AI"
        canonical="/ai-solutions"
        ogTitle="AI Learning Platform | Eduqra AI Solutions"
        ogDescription="Discover Eduqra’s AI-powered learning platform with personalized tutoring, analytics, and adaptive learning tools for students and educators."
        ogImage="https://eduqra.com/images/og-solutions.jpg"
        schemaType="WebPage"
        schemaData={{
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://eduqra.com/#organization",
              "name": "Eduqra",
              "url": "https://eduqra.com",
              "logo": "https://eduqra.com/images/eduqra_logo_white.png",
              "sameAs": [
                "https://www.instagram.com/eduqra/",
                "https://www.linkedin.com/company/eduqra/"
              ]
            },
            {
              "@type": "Service",
              "serviceType": "AI Learning Platform",
              "name": "Eduqra AI Solutions",
              "description": "Premium AI-powered education tools including personalized tutors, adaptive learning systems, and predictive analytics.",
              "provider": { "@id": "https://eduqra.com/#organization" },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Education Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personalized AI Tutor" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adaptive Learning Engine" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive Skill Analytics" } }
                ]
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduqra.com/" },
                { "@type": "ListItem", "position": 2, "name": "AI Solutions", "item": "https://eduqra.com/ai-solutions" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is an AI learning platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI learning platform is a next-generation educational ecosystem that uses artificial intelligence to adapt content, pace, and difficulty to each individual learner's unique needs in real-time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AI personalize learning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI personalizes learning by analyzing your interactions, quiz results, and comprehension speed. It identifies your unique knowledge gaps and automatically re-routes your curriculum to ensure complete mastery of every topic."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AI tutoring better than traditional learning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI tutoring complements traditional learning by providing 24/7 personalized support that traditional classrooms can't offer. It ensures constant 1-on-1 attention, leading to faster mastery and better retention rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the AI tutor for students actually work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI tutor uses advanced large language models and pedagogical algorithms to explain concepts, answer questions via Socratic reasoning, and provide instant feedback on student work and assignments."
                  }
                }
              ]
            }
          ]
        }}
      />

      <section className="solutions-hero">
        <div className="container hero-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-text"
          >
            <span className="solutions-hero-subtitle">The Future of Education is Here</span>
            <h1 className="solutions-hero-title">
              The Most Advanced <span className="text-gradient">AI Learning Platform</span> for Personalized Mastery
            </h1>
            <p className="solutions-hero-desc">
              Empower your educational journey with cutting-edge <strong>AI education tools</strong> that adapt to your unique pace. Experience the future of learning with a dedicated <strong>AI tutor for students</strong>, delivering <strong>personalized learning AI</strong> that transforms academic frustration into breakthrough moments of mastery.
            </p>
            <div className="solutions-hero-buttons">
              <Link to="/contact" className="btn-ai-primary">Start Learning with AI</Link>
              <Link to="/ai-solutions" className="btn-ai-secondary">Explore Solutions</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-image-wrapper"
          >
            <img loading="lazy" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="Eduqra AI Personal Tutor and Adaptive Learning Solutions" />
          </motion.div>
        </div>
      </section>

      <section className="intelligent-tools-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tools-header text-center"
          >
            <h2 className="section-title-alt">Intelligent Tools For Every Learner</h2>
            <p className="section-desc">
              Our AI solutions are built on state-of-the-art models to provide a truly unique and effective learning experience.
            </p>
          </motion.div>
          
          <div className="features-solutions-grid">
            {[
              { 
                icon: <Brain size={28} />, colorClass: 'icon-blue', 
                title: 'AI Personal Tutor', 
                desc: 'A 24/7 companion that answers questions, explains complex topics, and provides personalized feedback on your assignments.',
                features: ['Real-Time Q&A', 'Concept Simplification', 'Personalized Feedback']
              },
              { 
                icon: <BarChart size={28} />, colorClass: 'icon-green', 
                title: 'Learning Analytics', 
                desc: 'Deep insights into your learning patterns. Identify strengths, weaknesses, and get data-driven suggestions for improvement.',
                features: ['Progress Tracking', 'Skill Gap Analysis', 'Predictive Performance']
              },
              { 
                icon: <Zap size={28} />, colorClass: 'icon-orange', 
                title: 'Adaptive Learning', 
                desc: 'Our system adjusts the difficulty and content of your courses in real-time based on your performance and pace.',
                features: ['Dynamic Curriculum', 'Pace Adjustment', 'Customized Exercises']
              }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-feature-card-alt"
              >
                <div className={`icon-container-alt ${tool.colorClass}`}>
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <div className="card-divider"></div>
                <ul className="card-features-list">
                  {tool.features.map((feature, j) => (
                    <li key={j}>
                      <CheckCircle2 size={18} className="check-icon-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="use-cases-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-60"
          >
            <h2 className="section-title-alt">Use Cases of Eduqra AI Solutions</h2>
            <p className="section-desc">
              From individual learners to global educational bodies, our platform provides tailored solutions to transform every aspect of learning.
            </p>
          </motion.div>

          <div className="use-cases-grid">
            {[
              {
                title: 'For Students',
                keyword: 'AI for students',
                desc: 'Gain a competitive edge with a 24/7 personal tutor that provides instant explanations, solves roadblocks, and creates a learning path tailored to your specific career goals.',
                benefits: ['Accelerated learning pace', 'Confidence in complex subjects', 'Career-ready skill mapping']
              },
              {
                title: 'For Teachers',
                keyword: 'AI for teachers',
                desc: 'Reduce administrative burnout by automating grading and progress reports. Our AI for teachers acts as a teaching assistant, identifying student struggles before they fall behind.',
                benefits: ['Automated grading & feedback', 'Individualized student insights', 'More time for meaningful mentoring']
              },
              {
                title: 'For Institutions',
                keyword: 'AI in schools',
                desc: 'Scale high-quality education across thousands of students. AI in schools allows for real-time curriculum optimization and data-backed decision-making for administrators.',
                benefits: ['Operational efficiency at scale', 'Standardized quality of education', 'Improved student retention rates']
              }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="use-case-card"
              >
                <div className="use-case-content">
                  <span className="use-case-tag">{useCase.keyword}</span>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.desc}</p>
                  <ul className="use-case-benefits">
                    {useCase.benefits.map((benefit, bIdx) => (
                      <li key={bIdx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-we-work-section section">

        <div className="container work-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="work-left"
          >
            <h2 className="section-title-alt text-left">How Our AI Works</h2>
            <p className="work-subtitle">
              We combine advanced machine learning with educational psychology to create the perfect learning environment.
            </p>
            
            <div className="work-steps-list">
              {[
                { num: '01', title: 'Data Collection', text: 'Data Collection We analyze your interactions, quiz results, and learning pace.' },
                { num: '02', title: 'Pattern Recognition', text: 'Our AI identifies your unique learning style and knowledge gaps.' },
                { num: '03', title: 'Personalization', text: 'The platform adapts content and provides targeted recommendations.' }
              ].map((step, i) => (
                <div className="work-step-item" key={i}>
                  <div className="work-step-num">{step.num}</div>
                  <div className="work-step-text">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ai-security-blue-card"
          >
            <div className="ai-security-icon">
              <ShieldCheck size={40} />
            </div>
            <h3>Privacy & Security First</h3>
            <p>
              Your data is yours. We use advanced encryption and follow strict privacy standards to ensure your learning data is always secure and private.
            </p>
            <div className="ai-security-stats">
              <div className="stat-unit">
                <strong>100%</strong>
                <span>Data Encryption</span>
              </div>
              <div className="stat-unit">
                <strong>GDPR</strong>
                <span>Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="faq-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-60"
          >
            <h2 className="section-title-alt">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about our AI-powered education platform and how it transforms your learning.
            </p>
          </motion.div>

          <div className="faq-accordion-container">
            {faqItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`}
              >
                <div 
                  className="faq-accordion-header" 
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="faq-question">
                    <span className="faq-q-label">Q:</span>
                    {item.q}
                  </h3>
                  <div className={`faq-icon ${openFaq === i ? 'rotate' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-accordion-body"
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-ai-seo-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="seo-content-wrapper"
          >
            <h2 className="section-title-alt">Why Choose AI for Learning?</h2>
            
            <div className="seo-text-content">
              <p>
                The landscape of modern education is shifting rapidly. Choosing an <strong>AI-powered education platform</strong> like Eduqra isn't just about using new technology—it's about fundamentally upgrading how you acquire knowledge. <strong>AI in education</strong> closes the gap between traditional "one-size-fits-all" teaching and the unique, high-speed demands of the 21st-century workforce.
              </p>

              <div className="seo-benefits-grid">
                {[
                  {
                    icon: <Target size={28} />,
                    title: 'Hyper-Personalization',
                    desc: <>One of the core <strong>benefits of AI learning</strong> is its ability to listen. Unlike a static textbook, our AI analyzes your vocabulary, your speed of comprehension, and even the types of mistakes you make. It then rewrites your learning path in real-time, ensuring you never waste a second on concepts you already master.</>,
                    colorClass: 'icon-purple'
                  },
                  {
                    icon: <Rocket size={28} />,
                    title: 'Unprecedented Learning Speed',
                    desc: <>AI doesn't just make learning better; it makes it faster. By identifying exactly where your knowledge gaps lie, the platform directs your focus where it matters most. Students using Eduqra report mastering complex technical subjects significantly faster than through traditional methods.</>,
                    colorClass: 'icon-blue'
                  },
                  {
                    icon: <LineChart size={28} />,
                    title: 'Data-Driven Analytics',
                    desc: <>Stop guessing your progress. Our predictive analytics provide a mirror to your cognitive growth. You'll see exactly which skills are industry-ready and which require more attention, backed by billions of data points gathered from global educational standards.</>,
                    colorClass: 'icon-green'
                  },
                  {
                    icon: <Globe size={28} />,
                    title: 'Universal Accessibility',
                    desc: <>Geography and wealth should not be barriers to elite education. Our AI tutor for students provides high-level mentorship 24/7, anywhere in the world. Whether you're in a bustling city or a remote village, you have the world's most intelligent learning engine at your fingertips.</>,
                    colorClass: 'icon-orange'
                  }
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="seo-benefit-card"
                  >
                    <div className="seo-benefit-header">
                      <div className={`seo-benefit-icon ${benefit.colorClass}`}>
                        {benefit.icon}
                      </div>
                      <h3>{benefit.title}</h3>
                    </div>
                    <p>{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="seo-summary-box">
                <h3>Key Advantages At A Glance:</h3>
                <ul>
                  <li><strong>Adaptive Curriculum:</strong> Content that evolves with your performance.</li>
                  <li><strong>Instant Feedback:</strong> No more waiting days for grades; get corrections in milliseconds.</li>
                  <li><strong>Socratic Mentorship:</strong> AI that doesn't just give answers, but teaches you how to think.</li>
                  <li><strong>Future-Proof Skills:</strong> Learn in the medium of the future to prepare for AI-integrated workplaces.</li>
                </ul>
              </div>

              <p className="seo-closing">
                In a world where information is Infinite, the ability to learn effectively is the ultimate competitive advantage. By embracing <strong>AI in education</strong>, you're not just studying; you're evolving. Join thousands of learners on the Eduqra <strong>AI-powered education platform</strong> and experience the most efficient learning journey ever created.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default AISolutionsView;
