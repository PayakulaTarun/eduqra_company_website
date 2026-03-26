import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Users, Star, Play, CheckCircle2, 
  ChevronRight, BookOpen, GraduationCap, Globe, 
  PlayCircle, FileText, Layout
} from 'lucide-react';
import './CourseDetailsView.css';

const courseDetails = {
  title: "AI & Machine Learning Mastery",
  subtitle: "Bestseller",
  desc: "Master the fundamentals of AI and Machine Learning with hands-on projects and real-world applications.",
  duration: "12 Weeks",
  students: "1,240 Students",
  rating: "4.9 (450 Reviews)",
  price: "$49.99",
  instructor: {
    name: "Dr. Aris Thorne",
    title: "Senior AI Researcher & Educator",
    bio: "Dr. Thorne has over 15 years of experience in the field of Artificial Intelligence. He has worked with top tech giants and has taught over 50,000 students worldwide.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  },
  highlights: [
    "Understand Supervised & Unsupervised Learning",
    "Master Python For Data Science",
    "Natural Language Processing (NLP)",
    "Build Neural Networks From Scratch",
    "Deploy AI Models To Production",
    "Computer Vision Fundamental"
  ],
  curriculum: [
    { title: "Module 1: Introduction To AI", lessons: "5 Lessons", time: "2h 30m" },
    { title: "Module 2: Python For Machine Learning", lessons: "8 Lessons", time: "4h 15m" },
    { title: "Module 3: Supervised Learning Algorithms", lessons: "12 Lessons", time: "6h 45m" },
    { title: "Module 4: Deep Learning & Neural Networks", lessons: "10 Lessons", time: "5h 20m" }
  ],
  sidebar: [
    { icon: <Play size={18} />, text: "45 Hours Of Video" },
    { icon: <BookOpen size={18} />, text: "12 Downloadable Resources" },
    { icon: <Users size={18} />, text: "Access To Community" },
    { icon: <GraduationCap size={18} />, text: "Certificate Of Completion" },
    { icon: <Clock size={18} />, text: "Lifetime Access" }
  ]
};

const CourseDetailsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="course-details-page"
    >
      {/* Hero Header */}
      <section className="course-hero">
        <div className="container course-hero-container">
          <div className="course-hero-text">
            <span className="bestseller-badge">{courseDetails.subtitle}</span>
            <h1>{courseDetails.title}</h1>
            <p className="hero-description">{courseDetails.desc}</p>
            <div className="hero-meta-row">
              <div className="meta-item"><Clock size={16} /> <span>{courseDetails.duration}</span></div>
              <div className="meta-item"><Users size={16} /> <span>{courseDetails.students}</span></div>
              <div className="meta-item"><Star size={16} className="star-icon" /> <span>{courseDetails.rating}</span></div>
            </div>
            <div className="hero-btns">
              <button className="btn btn-primary enroll-btn">Enroll - {courseDetails.price}</button>
              <button className="btn btn-outline-white try-demo-btn">Try Free Demo</button>
            </div>
          </div>
          <div className="course-hero-video">
            <div className="video-thumb-container">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video Placeholder" />
              <div className="play-btn-large">
                <Play fill="#000" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Container */}
      <section className="course-body-section">
        <div className="container course-body-container">
          <div className="course-main-content">
            {/* Overview Section */}
            <div className="content-block">
              <h2>Course Overview</h2>
              <p className="overview-text">
                This comprehensive course is designed to take you from a beginner to an advanced level in Artificial Intelligence and Machine Learning. You will learn the mathematical foundations, explore popular algorithms, and build real-world AI models using Python and industry-standard libraries.
              </p>
              <div className="highlights-grid">
                {courseDetails.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Section */}
            <div className="content-block">
              <h2>Curriculum</h2>
              <div className="curriculum-list">
                {courseDetails.curriculum.map((item, idx) => (
                  <div key={idx} className="curriculum-item">
                    <div className="curr-number">{idx < 9 ? `0${idx + 1}` : idx + 1}</div>
                    <div className="curr-info">
                      <h4>{item.title}</h4>
                      <span>{item.lessons} • {item.time}</span>
                    </div>
                    <ChevronRight size={20} className="curr-arrow" />
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="content-block instructor-section">
              <h2>Your Instructor</h2>
              <div className="instructor-card">
                <div className="instructor-img">
                  <img src={courseDetails.instructor.img} alt={courseDetails.instructor.name} />
                </div>
                <div className="instructor-info">
                  <h3>{courseDetails.instructor.name}</h3>
                  <span className="instr-title">{courseDetails.instructor.title}</span>
                  <p>{courseDetails.instructor.bio}</p>
                  <div className="instructor-links">
                    <a href="#">View profile</a>
                    <a href="#">Contact Instructor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="course-sidebar">
            <div className="sidebar-card">
              <h3>Course Overview</h3>
              <ul className="sidebar-features-list">
                {courseDetails.sidebar.map((item, idx) => (
                  <li key={idx}>
                    <span className="sidebar-feature-icon">{item.icon}</span>
                    <span className="sidebar-feature-text">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary sidebar-enroll-btn">Enroll Now</button>
              <p className="guarantee-text">30-Day Money-Back Guarantee</p>
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  );
};

export default CourseDetailsView;
