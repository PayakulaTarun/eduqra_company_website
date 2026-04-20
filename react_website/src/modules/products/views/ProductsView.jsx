import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
import { Brain, Users, BarChart3, Target, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductsView.css';

const productList = [
  {
    id: 'ai-tutors',
    title: 'Eduqra AI Personal Tutor',
    tagline: 'Your 24/7 intelligent learning companion',
    keyword: 'AI tutor platform',
    blogLink: '/blog/future-of-ai-education',
    problem: 'Students often get stuck at 2 AM with no teacher available, losing motivation and abandoning their course.',
    description: 'Our flagship 1-on-1 tutoring platform where learners connect with expert mentors powered by proprietary AI matching and live assistance.',
    howItWorks: [
      { step: 1, text: 'Ask a question natural language' },
      { step: 2, text: 'AI tutor analyzes your code or logic' },
      { step: 3, text: 'Receive Socratic guidance to find the answer' }
    ],
    targetAudience: 'Students and self-taught developers',
    useCase: 'A student debugging a complex React component at midnight gets instant, personalized hints without receiving the direct answer, fostering true understanding.',
    icon: <Users size={32} />,
    color: 'blue',
    features: ['Live 1-on-1 Sessions', 'AI-Matched Mentors', 'Personalized Study Plans'],
    isNew: true,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Eduqra AI tutor platform showing personalized student dashboard'
  },
  {
    id: 'personalization-engine',
    title: 'Adaptive Learning Engine',
    tagline: 'A curriculum that bends to your brain',
    keyword: 'adaptive learning system',
    blogLink: '/blog?topic=adaptive-assessments',
    problem: 'One-size-fits-all courses force advanced students to be bored and beginners to be overwhelmed.',
    description: 'A deep-learning core that analyzes user behavior and retention to dynamically adjust curriculum difficulty and content delivery.',
    howItWorks: [
      { step: 1, text: 'Engine profiles your baseline knowledge' },
      { step: 2, text: 'Monitors reading speed and quiz accuracy' },
      { step: 3, text: 'Automatically adjusts next module difficulty' }
    ],
    targetAudience: 'Institutions and lifelong learners',
    useCase: 'A professional upskilling in Python breezes through basics; the engine immediately skips boilerplate loops and starts introducing advanced Data Science concepts.',
    icon: <Brain size={32} />,
    color: 'indigo',
    features: ['Cognitive Load Tracking', 'Dynamic Difficulty', 'Knowledge Map Visualization'],
    isNew: false,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Adaptive learning AI system processing student data in real-time'
  },
  {
    id: 'analytics-dashboard',
    title: 'Skill-Gap Analytics Dashboard',
    tagline: 'Visualize your path to career readiness',
    keyword: 'predictive learning analytics',
    blogLink: '/blog/emerging-ai-skills-2026',
    problem: 'Learners spend months studying without knowing if they are actually employable in the current job market.',
    description: 'A comprehensive suite for learners and organizations to visualize progress, identify weaknesses, and predict future performance.',
    howItWorks: [
      { step: 1, text: 'Take baseline evaluations across skill trees' },
      { step: 2, text: 'AI maps your skills against live job market data' },
      { step: 3, text: 'Get a visual heatmap of your weak points' }
    ],
    targetAudience: 'Career pivoters and enterprise training managers',
    useCase: 'An aspiring Data Scientist sees a red heatmap indicator on "SQL Joins", allowing them to focus studying specifically on database management before an interview.',
    icon: <BarChart3 size={32} />,
    color: 'emerald',
    features: ['Predictive Performance', 'Real-time Skill Heatmaps', 'Industrial Benchmarking'],
    isNew: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Skill-gap analytics visualization within the Eduqra AI learning platform'
  },
  {
    id: 'assessment-system',
    title: 'Smart Assessment Platform',
    tagline: 'Beyond multiple-choice testing',
    keyword: 'AI assessment system',
    blogLink: '/blog?topic=generative-ai',
    problem: 'Multiple choice tests don\'t measure real-world performance, and grading projects manually is impossible at scale.',
    description: 'Beyond multiple choice. Our AI evaluates project-based submissions and provides deep coding or logical feedback automatically.',
    howItWorks: [
      { step: 1, text: 'Upload a complete project or code repository' },
      { step: 2, text: 'AI parses logic, syntax, and architecture' },
      { step: 3, text: 'Generates a line-by-line constructive code review' }
    ],
    targetAudience: 'Educators, bootcamps, and universities',
    useCase: 'A university professor assigns a complex capstone project. Instead of spending 50 hours grading, the AI pre-grades and leaves detailed code reviews for 500 students instantly.',
    icon: <Target size={32} />,
    color: 'violet',
    features: ['Automated Project Grading', 'Instant Logical Feedback', 'Continuous Assessment'],
    isNew: false,
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Intelligent assessment engine evaluating complex student projects'
  }
];

const ProductsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="products-page"
    >
      <SEOManager 
        title="AI Learning Products | Eduqra AI Education Platform"
        description="Explore Eduqra’s AI-powered learning products including AI tutors, adaptive learning systems, and smart education tools for students and institutions."
        keywords="AI education platform, AI learning products, AI tutor platform, AI tools for students, adaptive learning tools"
        canonical="https://eduqra.com/products"
        ogTitle="AI Learning Products | Eduqra AI Education Platform"
        ogDescription="Explore Eduqra’s AI-powered learning products including AI tutors, adaptive learning systems, and smart education tools."
        ogImage="https://eduqra.com/images/og-products.jpg"
        schemaType="ItemList"
        schemaData={{
          "@graph": [
            {
              "@type": "Organization",
              "name": "Eduqra AI Solutions",
              "url": "https://eduqra.com",
              "logo": "https://eduqra.com/logo.png",
              "slogan": "The Most Intelligent AI Education Platform",
              "sameAs": [
                "https://www.linkedin.com/company/eduqra",
                "https://twitter.com/eduqra"
              ]
            },
            {
              "@type": "ItemList",
              "name": "Eduqra AI Products",
              "numberOfItems": productList.length,
              "itemListElement": productList.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": p.title,
                "description": p.description
              }))
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are AI learning products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI learning products are intelligent software applications like Eduqra that use machine learning to personalize the educational journey. They analyze your performance to provide customized content, ensuring you only study what you need to master."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the Eduqra AI tutoring platform work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI tutor platform uses proprietary algorithms to monitor your comprehension in real-time. It acts as a cognitive partner, asking Socratic questions to guide your logic and providing instant feedback on complex technical tasks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Eduqra products suitable for beginners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI tools for students are designed to scale with your expertise. For beginners, the system provides foundational support, while advanced learners are automatically pushed with challenging production-ready labs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do smart learning systems improve learning speed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By identifying your specific knowledge gaps instantly, smart learning systems eliminate time wasted on redundant content. This targeted approach allows students to achieve 100% mastery up to 3x faster than traditional methods."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can institutions integrate Eduqra's AI education platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We offer scalable AI education solutions that integrate into existing school or corporate LMS environments, allowing organizations to provide adaptive intelligence to their entire student or employee base."
                  }
                }
              ]
            }
          ]
        }}
      />

      {/* Header section */}
      <section className="products-hero section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge-pill mb-4 inline-flex">Eduqra AI Ecosystem</span>
            <h1 className="products-title">The Most Intelligent <span className="text-gradient">AI Education Platform</span></h1>
            <p className="products-subtitle-text">
              Transform your cognitive growth with elite <strong>AI learning products</strong> designed for precision mastery. Our <strong>AI tutor platform</strong> and specialized <strong>AI tools for students</strong> accelerate learning speed and bridge the gap to high-demand careers in technology and science.
            </p>
            <div className="products-hero-actions">
              <a href="#product-list" className="btn btn-primary">Explore AI Products</a>
              <Link to="/join" className="btn btn-outline">Get Started with Eduqra</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="featured-product section">
        <div className="container">
          <motion.div 
            className="featured-glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="featured-grid">
              <div className="featured-image">
                <img loading="lazy" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Eduqra AI tutor platform providing 1-on-1 personalized mentorship and intelligent learning systems" />
                <div className="featured-overlay">
                  <span className="featured-tag">Flagship Product</span>
                </div>
              </div>
              <div className="featured-info">
                 <div className="featured-badge">COMING SOON</div>
                 <h2>Eduqra 1-on-1 Tutor Website</h2>
                 <p>
                   Our most ambitious product yet. A specialized ecosystem where students get undivided attention from AI-matched mentors and real-time <Link to="/ai-solutions" className="context-link-inline">AI tutor</Link> assistance.
                 </p>
                 <ul className="featured-highlights">
                   <li><Users size={20} /> Personal 1-on-1 Video Mentoring</li>
                   <li><Sparkles size={20} /> AI-Driven Mentor Matching</li>
                   <li><Target size={20} /> Goal-Oriented Learning Tracks</li>
                 </ul>
                 <Link to="/contact" className="btn btn-primary">Get Early Access</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      <section id="product-list" className="product-details-section">
        <div className="container">
          {productList.map((product, index) => (
            <motion.div 
              key={product.id}
              className={`product-detail-block ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="product-detail-info">
                <span className={`detail-status-tag ${product.isNew ? 'new' : ''}`}>
                  {product.tagline}
                </span>
                <Link to={product.blogLink} style={{textDecoration: 'none'}}>
                  <h2 className="detail-title">
                    {product.title}
                  </h2>
                </Link>
                
                <div className="product-cro-block">
                  <div className="problem-statement">
                    <strong>The Problem:</strong> {product.problem}
                  </div>
                  <p className="detail-description">{product.description}</p>
                </div>
                
                <div className="detail-split">
                  <div className="detail-points">
                    <h3>How it Works:</h3>
                    <ul>
                      {product.howItWorks.map((step, sIdx) => (
                        <li key={sIdx}>
                          <span className="step-circle">{step.step}</span>
                          <span>{step.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-points benefits">
                    <h3>Target Audience:</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{product.targetAudience}</p>
                    
                    <h3>Real-World Use Case:</h3>
                    <div style={{ background: 'var(--color-bg-light)', padding: '15px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--color-secondary)', borderLeft: '3px solid var(--color-primary)' }}>
                      {product.useCase}
                    </div>
                  </div>
                </div>

                <div className="detail-cta">
                  <Link to="/ai-solutions" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Try {product.title} <ArrowRight size={16} />
                  </Link>
                  <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    Learn more about our <Link to={product.blogLink} className="context-link-inline">{product.keyword}</Link>.
                  </p>
                </div>
              </div>

              <div className="product-detail-visual">
                <div className="visual-container image-visual" style={{ padding: '2rem', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <img 
                    loading="lazy" 
                    src={product.image} 
                    alt={product.imgAlt}
                    className="product-detail-img"
                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                  />
                  <div className={`detail-visual-overlay ${product.color}`} style={{ opacity: 0.1 }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Eduqra Section */} 
      <section className="products-why-standout section bg-light">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="standout-container"
          >
            <div className="standout-header">
              <span className="section-subtitle">Deep Value</span>
              <h2 className="section-title">Why Eduqra AI Products Stand Out</h2>
            </div>

            <div className="standout-content">
              <p className="large-intro">
                In a rapidly evolving digital landscape, choosing the right <strong>AI learning platform</strong> is the difference between simply consuming content and truly mastering a discipline. Eduqra’s <strong>AI education tools</strong> are engineered from the ground up to solve the core inefficiencies of traditional online learning. Our <strong>smart learning systems</strong> aren't just aggregators of information; they are proactive intelligence partners that evolve alongside the student.
              </p>

              <div className="standout-grid">
                <div className="standout-item">
                  <h3>Unmatched Personalization</h3>
                  <p>
                    Our platform goes beyond basic "recommended courses." We use deep behavioral analytics to understand your specific cognitive load. If you are a visual learner who struggles with abstract logic, our AI identifies this pattern within minutes and adjusts the delivery of subsequent modules. This hyper-personalization ensures that no student is left behind and no time is wasted on redundant material.
                  </p>
                </div>

                <div className="standout-item">
                  <h3>Global Scalability</h3>
                  <p>
                    Eduqra is designed for the individual and the institution alike. Our infrastructure allows millions of students to access a personalized AI tutor simultaneously without any loss in performance. This democratizes high-level education, bringing elite-tier mentorship to every corner of the globe, regardless of wealth or geography.
                  </p>
                </div>

                <div className="standout-item">
                  <h3>Real-Time Analytics</h3>
                  <p>
                    Transparency is at the heart of our mission. Students and educators get access to a live dashboard of progress that updates with every single interaction. You won't wait for a mid-term exam to know if you've mastered a concept; our <strong>smart learning systems</strong> provide instant skill-gap validation, allowing for immediate course correction.
                  </p>
                </div>

                <div className="standout-item">
                  <h3>Career-Focused Learning</h3>
                  <p>
                    Every lesson in the Eduqra ecosystem is benchmarked against real-world industry requirements. We don't teach theory in a vacuum; we build skills that are in high demand by top global tech employers today. By focusing on practical application, we ensure our graduates are "production-ready" from day one.
                  </p>
                </div>
              </div>

              <div className="standout-factors">
                <h3 className="factors-title">Key Factors At A Glance:</h3>
                <div className="factors-row">
                  <div className="factor-pill"><span>✓</span> Predictive Skill Mapping</div>
                  <div className="factor-pill"><span>✓</span> Socratic Dialogue Engine</div>
                  <div className="factor-pill"><span>✓</span> Industry-Synchronized Curriculum</div>
                  <div className="factor-pill"><span>✓</span> Adaptive Difficulty Scaling</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="products-audience section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="audience-header"
          >
            <span className="section-subtitle">Target Users</span>
            <h2 className="section-title">Who Can Use Eduqra Products?</h2>
            <p className="audience-intro">
              Our <strong>AI education solutions</strong> are designed to empower the entire learning hierarchy, from independent students to global educational institutions.
            </p>
          </motion.div>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon-sm">🎓</div>
              <h3>Students</h3>
              <p>Eduqra provides powerful <strong>AI tools for students</strong> that transform the learning experience from passive to active. By identifying personal knowledge gaps and offering 24/7 AI tutoring, we help you master complex subjects 3x faster.</p>
              <div className="audience-benefit-tag">Benefit: 100% Tech-Stack Mastery</div>
            </div>

            <div className="audience-card">
              <div className="audience-icon-sm">👩‍🏫</div>
              <h3>Teachers</h3>
              <p>Our platform offers dedicated <strong>AI for teachers</strong>, automating administrative tasks and grading. This allows educators to focus on deep mentorship while the AI handles personalized student progress tracking.</p>
              <div className="audience-benefit-tag">Benefit: Data-Driven Mentorship</div>
            </div>

            <div className="audience-card">
              <div className="audience-icon-sm">🏫</div>
              <h3>Institutions</h3>
              <p>We provide a scalable infrastructure for adaptive learning that fits seamlessly into existing LMS ecosystems, allowing schools and universities to upgrade their technical curriculum instantly.</p>
              <div className="audience-benefit-tag">Benefit: Higher Retention Rates</div>
            </div>

            <div className="audience-card">
              <div className="audience-icon-sm">💼</div>
              <h3>Professionals</h3>
              <p>For early-career and mid-level professionals, Eduqra offers a surgical path to upskilling. Our AI ensures you only learn the skills that directly translate to immediate salary increases and career pivots.</p>
              <div className="audience-benefit-tag">Benefit: Rapid Career Pivoting</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="products-faq section bg-light">
        <div className="container">
          <div className="faq-header">
            <span className="section-subtitle">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            {[
              {
                q: "What are AI learning products?",
                a: "AI learning products are intelligent software applications like Eduqra that use machine learning to personalize the educational journey. They analyze your performance to provide customized content, ensuring you only study what you need to master."
              },
              {
                q: "How does the Eduqra AI tutoring platform work?",
                a: "Our AI tutor platform uses proprietary algorithms to monitor your comprehension in real-time. It acts as a cognitive partner, asking Socratic questions to guide your logic and providing instant feedback on complex technical tasks."
              },
              {
                q: "Are Eduqra products suitable for beginners?",
                a: "Yes, our AI tools for students are designed to scale with your expertise. For beginners, the system provides foundational support, while advanced learners are automatically pushed with challenging production-ready labs."
              },
              {
                q: "How do smart learning systems improve learning speed?",
                a: "By identifying your specific knowledge gaps instantly, smart learning systems eliminate time wasted on redundant content. This targeted approach allows students to achieve 100% mastery up to 3x faster than traditional methods."
              },
              {
                q: "Can institutions integrate Eduqra's AI education platform?",
                a: "Absolutely. We offer scalable AI education solutions that integrate into existing school or corporate LMS environments, allowing organizations to provide adaptive intelligence to their entire student or employee base."
              },
              {
                q: "Is the AI tutor available 24/7?",
                a: "Yes, our AI tutor platform is available 365 days a year. Whether you are debugging code at midnight or studying at dawn, your AI mentor is always ready to help you overcome roadblocks."
              },
              {
                q: "What makes Eduqra's adaptive learning AI different?",
                a: "Unlike static programs, our adaptive learning AI creates a unique cognitive fingerprint for every user. It predicts where you might struggle and re-routes your curriculum to ensure continuous, friction-free progress."
              },
              {
                q: "Do these AI tools for students include career guidance?",
                a: "Yes. Our AI learning system maps your skills directly against industry requirements, providing a data-backed roadmap to your next career advancement or salary increase."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="faq-item"
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Internal Linking Section */}
      <section className="products-blog-link section">
        <div className="container">
          <div className="blog-link-card">
            <div className="blog-link-text">
              <h2>Deepen Your AI Knowledge</h2>
              <p>Explore our <Link to="/blog" className="context-link-inline">latest blog articles</Link> to stay updated on the rapidly evolving world of artificial intelligence in education. From technical deep-dives to career advice, our insights help you navigate the future.</p>
            </div>
            <Link to="/blog" className="btn btn-outline">Visit the Blog</Link>
          </div>
          
          <div className="home-link-footer">
            <p>New to our platform? <Link to="/" className="context-link-inline">Return to Homepage</Link> to see the full Eduqra vision.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-view-cta section">
        <div className="container">
          <div className="products-cta-box bg-gradient">
            <h2>Ready To Empower Your Team With AI?</h2>
            <p>Develop a custom implementation or licensing plan for your organization.</p>
            <Link to="/contact" className="btn btn-primary white">Speak To An Expert</Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProductsView;
