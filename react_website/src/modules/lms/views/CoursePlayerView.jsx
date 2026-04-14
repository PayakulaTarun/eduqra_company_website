import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, Brain, MessageSquare, ChevronRight, FileText, Download, Star } from 'lucide-react';
import './CoursePlayerView.css';

const lessons = [
  { id: 1, title: "Introduction to Generative AI", duration: "10:24", status: "completed" },
  { id: 2, title: "Understanding Large Language Models", duration: "15:45", status: "current" },
  { id: 3, title: "Prompt Engineering Best Practices", duration: "22:10", status: "locked" },
  { id: 4, title: "Ethics in AI Development", duration: "12:30", status: "locked" },
  { id: 5, title: "Building Your First AI Project", duration: "45:00", status: "locked" }
];

const CoursePlayerView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(lessons[1]);

  return (
    <div className="lms-container">
      {/* Course Header */}
      <header className="lms-header">
        <div className="lms-header-left">
          <Brain className="lms-logo-icon" size={32} />
          <h1>Eduqra LMS: AI & Machine Learning Mastery</h1>
        </div>
        <div className="lms-header-right">
          <div className="progress-mini">
            <span>Progress: 20%</span>
            <div className="progress-bar-mini">
              <div className="progress-fill" style={{ width: '20%' }}></div>
            </div>
          </div>
          <button className="btn btn-outline" style={{ padding: '8px 16px' }}>Dashboard</button>
        </div>
      </header>

      <main className="lms-content">
        {/* Video Player Area */}
        <div className="video-column">
          <div className="video-player-box">
             <div className="video-overlay">
               <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="play-central"
               >
                 <Play fill="white" size={48} />
               </motion.button>
             </div>
             <img loading="lazy" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="Video Placeholder" />
          </div>

          <div className="lesson-details">
             <div className="lesson-header">
                <h2>{currentLesson.id}. {currentLesson.title}</h2>
                <button className="btn btn-primary complete-btn">
                  Mark as Completed <CheckCircle size={18} />
                </button>
             </div>

             <div className="tabs-row">
                <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                <button className={activeTab === 'resources' ? 'active' : ''} onClick={() => setActiveTab('resources')}>Resources</button>
                <button className={activeTab === 'qna' ? 'active' : ''} onClick={() => setActiveTab('qna')}>Q&A</button>
             </div>

             <div className="tab-panel">
               {activeTab === 'overview' && (
                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <h3>About this lesson</h3>
                    <p>In this module, we dive deep into the architecture of LLMs, exploring how attention mechanisms and transformer blocks work together to process information and generate human-like text.</p>
                 </motion.div>
               )}
               {activeTab === 'resources' && (
                 <div className="resources-list">
                    <div className="resource-item">
                      <FileText size={18} /> <span>Lecture Slides.pdf</span> <Download size={18} />
                    </div>
                    <div className="resource-item">
                      <FileText size={18} /> <span>Additional Reading.pdf</span> <Download size={18} />
                    </div>
                 </div>
               )}
             </div>
          </div>
        </div>

        {/* Sidebar: Lessons List */}
        <aside className="lms-sidebar">
          <h3>Course Content</h3>
          <div className="lessons-list">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className={`lesson-item ${lesson.status}`}
                onClick={() => setCurrentLesson(lesson)}
              >
                <div className="lesson-icon">
                  {lesson.status === 'completed' ? <CheckCircle size={18} /> : <Play size={18} />}
                </div>
                <div className="lesson-info">
                   <span className="title">{lesson.title}</span>
                   <span className="duration">{lesson.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Floating AI Assistant */}
      <motion.button 
        className="ai-fab"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(true)}
      >
        <Brain /> Ask AI
      </motion.button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="ai-chat-panel"
          >
             <div className="chat-header">
                <div className="chat-title"><Sparkles size={18} /> AI Personal Tutor</div>
                <button onClick={() => setIsChatOpen(false)}>&times;</button>
             </div>
             <div className="chat-body">
                <div className="bot-msg">How can I help you understand this lesson better?</div>
             </div>
             <div className="chat-input">
                <input type="text" placeholder="Type your doubt..." />
                <button className="btn btn-primary" style={{ padding: '8px' }}><ChevronRight /></button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursePlayerView;

const Sparkles = ({size}) => <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity }}>✨</motion.span>;
