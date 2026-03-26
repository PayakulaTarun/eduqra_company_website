import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, Bookmark, Quote, Search, LayoutGrid, 
  PenTool, Monitor, GraduationCap, Globe, Send 
} from 'lucide-react';
import './BlogDetailsView.css';

const BlogDetailsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-details-page bg-light"
    >
      <div className="container blog-view-container">
        {/* Main Left Column */}
        <article className="blog-main-card">
          <div className="blog-feature-img">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Students in library" />
          </div>
          
          <div className="blog-article-content">
            <div className="blog-article-meta">
              <span className="badge-academic">ACADEMIC</span>
              <span className="meta-text">May 24, 2024 &bull; 8 min read</span>
            </div>
            
            <h1 className="article-h1">The Future of AI in Education</h1>
            
            <div className="author-row">
              <div className="author-info-left">
                <div className="author-avatar">ED</div>
                <div className="author-details">
                  <strong>Eduqra Editorial</strong>
                  <span>Curated Knowledge Hub</span>
                </div>
              </div>
              <div className="author-actions">
                <button className="icon-btn"><Share2 size={18} /></button>
                <button className="icon-btn"><Bookmark size={18} /></button>
              </div>
            </div>

            <div className="article-body">
              <p>
                The educational landscape is undergoing its most significant transformation since the invention of the printing press. Artificial Intelligence is no longer a futuristic concept—it is actively reshaping how students learn, how educators teach, and how institutions operate at scale.
              </p>

              <h3>The Shift Toward Personalized Pedagogy</h3>
              <p>
                One of the most profound impacts of AI in the classroom is the democratization of personalized learning. Historically, one-on-one tutoring was a luxury reserved for the few. Today, AI-driven adaptive learning platforms can analyze a student's performance in real-time, identifying cognitive gaps and tailoring curriculum delivery to match their unique pace and learning style.
              </p>

              <blockquote className="article-quote">
                <Quote size={28} className="quote-icon" />
                <p>
                  "AI is not replacing the teacher; it is liberating the teacher from administrative fatigue, allowing them to focus on the human mentorship that no machine can replicate."
                </p>
              </blockquote>

              <h3>Augmented Intelligence: The Teacher's New Ally</h3>
              <p>
                Beyond student-facing tools, generative AI is assisting educators in curriculum development. Lesson planning that previously took hours can now be drafted in seconds, providing a canvas for teachers to refine and customize. This "Augmented Intelligence" model ensures that high-quality educational resources are more accessible than ever before.
              </p>

              <h3>Ethical Considerations and the Road Ahead</h3>
              <p>
                As we integrate these technologies, we must remain vigilant about data privacy, algorithmic bias, and the digital divide. Ensuring that AI serves as a bridge rather than a barrier is the primary challenge for the next decade of academic curation.
              </p>
            </div>

            <div className="article-footer-share">
              <span className="share-label">SHARE THIS ARTICLE</span>
              <div className="share-buttons">
                <button className="share-btn linkedin">
                  <Share2 size={16} /> LinkedIn
                </button>
                <button className="share-btn twitter">
                  <Send size={16} /> Twitter
                </button>
                <button className="share-btn facebook">
                  <Globe size={16} /> Facebook
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Right Sidebar */}
        <aside className="blog-view-sidebar">
          {/* Search Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Search Knowledge</h4>
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search articles..." />
            </div>
          </div>

          {/* Categories Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title" style={{ marginBottom: '4px' }}>Categories</h4>
            <p className="sidebar-subtitle">Browse by topic</p>
            <ul className="category-links">
              <li className="active">
                <LayoutGrid size={18} /> All Posts
              </li>
              <li>
                <PenTool size={18} /> Design
              </li>
              <li>
                <Monitor size={18} /> Tech
              </li>
              <li>
                <GraduationCap size={18} /> Academic
              </li>
            </ul>
            <button className="btn btn-primary w-100" style={{ marginTop: '20px', borderRadius: '8px' }}>Subscribe</button>
          </div>

          {/* Recent Posts Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Recent Posts</h4>
            <div className="recent-posts-list">
              <div className="recent-post-item">
                <div className="recent-img-box">
                  <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100&q=80" alt="document" />
                </div>
                <div className="recent-content">
                  <h5>The Art of Digital Storytelling in 2024</h5>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="recent-post-item">
                <div className="recent-img-box">
                  <img src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=100&q=80" alt="document" />
                </div>
                <div className="recent-content">
                  <h5>10 Tools for Academic Research Efficiency</h5>
                  <span>5 days ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Curation Card */}
          <div className="sidebar-card curation-card">
            <h4>Weekly Curation</h4>
            <p>Get the latest editorial insights delivered to your inbox.</p>
            <input type="email" placeholder="Email address" className="curation-input" />
            <button className="btn w-100 curation-btn">Join Hub</button>
          </div>
        </aside>
      </div>
    </motion.main>
  );
};

export default BlogDetailsView;
