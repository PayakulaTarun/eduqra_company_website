import React from 'react';
import { motion } from 'framer-motion';
import SEOManager from '../../../shared/components/SEOManager';
import { Brain, Users, BarChart3, Target, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductsView.css';

const productList = [
  {
    id: 'ai-tutors',
    title: 'AI-Powered Tutors',
    subtitle: 'Launching Soon',
    description: 'Our flagship 1-on-1 tutoring platform where learners connect with expert mentors powered by proprietary AI matching and live assistance.',
    icon: <Users size={32} />,
    color: 'blue',
    features: ['Live 1-on-1 Sessions', 'AI-Matched Mentors', 'Personalized Study Plans'],
    isNew: true
  },
  {
    id: 'personalization-engine',
    title: 'Adaptive Learning Engine',
    subtitle: 'Available Now',
    description: 'A deep-learning core that analyzes user behavior and retention to dynamically adjust curriculum difficulty and content delivery.',
    icon: <Brain size={32} />,
    color: 'indigo',
    features: ['Cognitive Load Tracking', 'Dynamic Difficulty', 'Knowledge Map Visualization'],
    isNew: false
  },
  {
    id: 'analytics-dashboard',
    title: 'Skill-Gap Analytics',
    subtitle: 'Available Now',
    description: 'A comprehensive suite for learners and organizations to visualize progress, identify weaknesses, and predict future performance.',
    icon: <BarChart3 size={32} />,
    color: 'emerald',
    features: ['Predictive Performance', 'Real-time Skill Heatmaps', 'Industrial Benchmarking'],
    isNew: false
  },
  {
    id: 'assessment-system',
    title: 'Smart Assessment Platform',
    subtitle: 'In Early Access',
    description: 'Beyond multiple choice. Our AI evaluates project-based submissions and provides deep coding or logical feedback automatically.',
    icon: <Target size={32} />,
    color: 'violet',
    features: ['Automated Project Grading', 'Instant Logical Feedback', 'Continuous Assessment'],
    isNew: false
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
                  {product.subtitle}
                </span>
                <h2 className="detail-title">
                  {index === 0 && "AI Tutor Platform for Personalized Learning"}
                  {index === 1 && "Adaptive Learning AI Engine for Students"}
                  {index === 2 && "Skill-Gap Analytics & AI Learning System"}
                  {index === 3 && "Advanced AI Tutor Platform for Assessment"}
                </h2>
                
                <p className="detail-description">
                  {index === 0 && <>Eduqra’s AI-powered tutor platform connects students with intelligent learning systems and expert mentors to deliver personalized education at scale. Our system analyzes student behavior, learning pace, and knowledge gaps to provide real-time guidance and customized study plans. Unlike traditional video courses, our <Link to="/ai-solutions" className="context-link-inline">AI tutor platform</Link> ensures you are never alone in your journey, offering Socratic support that forces you to build robust mental models of complex technologies.</>}
                  {index === 1 && <>Eduqra’s adaptive learning AI engine is the cognitive core of our ecosystem, designed to transform how students absorb complex information. Unlike traditional static curriculums, this <Link to="/ai-solutions" className="context-link-inline">AI learning system</Link> interprets billions of data points—from comprehension speed to logical patterns—to rewrite your educational journey in real-time. By utilizing advanced neural models, the engine ensures that every student receives a unique learning experience within our <strong>AI education platform</strong>.</>}
                  {index === 2 && <>Take the guesswork out of career growth with Eduqra’s <Link to="/blog" className="context-link-inline">AI learning system for predictive analytics</Link>. Our platform provides deep-level insights into your cognitive landscape, revealing exactly where you stand against global industry standards. This sophisticated AI tutor platform companion uses heatmaps and predictive modeling to forecast your readiness for high-demand job roles. By identifying and highlighting hidden knowledge gaps, we empower students to focus their energy on the skills that offer the highest ROI.</>}
                  {index === 3 && "Move beyond multiple-choice with the most advanced AI tutor platform for smart assessments. Eduqra’s assessment engine evaluates project-based submissions, complex coding logic, and descriptive reasoning using highly trained AI learning system models. This allows for continuous evaluation that mirrors real-world workplace challenges. Our adaptive learning AI ensures that assessments grow in difficulty as you improve, providing instant, deep-level feedback that explains the 'why' behind every logic correction."}
                </p>

                <div className="detail-split">
                  <div className="detail-points">
                    <h3>Key Features:</h3>
                    <ul>
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <ArrowRight size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-points benefits">
                    <h3>Benefits:</h3>
                    <ul>
                      {index === 0 && (
                        <>
                          <li><span>Faster concept understanding</span></li>
                          <li><span>Improved academic performance</span></li>
                          <li><span>Career-focused skill development</span></li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li><span>Elimination of learning friction</span></li>
                          <li><span>3x faster knowledge retention</span></li>
                          <li><span>Stress-free academic progress</span></li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li><span>Data-backed career confidence</span></li>
                          <li><span>Optimized study time allocation</span></li>
                          <li><span>Verified industry-standard skills</span></li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li><span>Instant feedback loops</span></li>
                          <li><span>Practical, hands-on expertise</span></li>
                          <li><span>Deep-level logical understanding</span></li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="detail-cta">
                  <Link to="/contact" className="btn btn-primary">
                    Get Early Access to {product.title}
                  </Link>
                </div>
              </div>

              <div className="product-detail-visual">
                <div className="visual-container image-visual">
                  <img 
                    loading="lazy" 
                    src={
                      index === 0 ? "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" :
                      index === 1 ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" :
                      index === 2 ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" :
                      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
                    } 
                    alt={
                      index === 0 ? "Eduqra AI tutor platform showing personalized student dashboard" :
                      index === 1 ? "Adaptive learning AI system processing student data in real-time" :
                      index === 2 ? "Skill-gap analytics visualization within the Eduqra AI learning platform" :
                      "Intelligent assessment engine evaluating complex student projects"
                    }
                    className="product-detail-img"
                  />
                  <div className={`detail-visual-overlay ${product.color}`}></div>
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
