import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Inbox } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import SEOManager from '../../../shared/components/SEOManager';
import { blogs } from '../../../data/blogs';
import './BlogView.css';
const BlogView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const categoryFilter = searchParams.get('category') || '';
  const topicFilter = searchParams.get('topic') || '';

  // Filter Logic
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = !searchQuery || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !categoryFilter || 
      blog.category.toLowerCase() === categoryFilter.toLowerCase();
      
    const matchesTopic = !topicFilter || 
      blog.id.includes(topicFilter) || 
      blog.slug.includes(topicFilter);

    return matchesSearch && matchesCategory && matchesTopic;
  });

  const handleSearch = (e) => {
    const val = e.target.value;
    if (val) {
      setSearchParams({ q: val });
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SEOManager 
        title="AI Education Blog | Insights & Learning Articles | Eduqra"
        description="Read the official Eduqra AI education blog for expert AI learning articles and EdTech insights. Master the future of learning with our technical deep-dives."
        keywords="AI education blog, AI learning articles, EdTech insights, AI in education, digital learning 2026"
        ogImage="https://eduqra.com/images/og-blog.jpg"
        canonical="/blog"
        schemaType="Blog"
        schemaData={{
          "@id": "https://eduqra.com/blog/#blog",
          "name": "Eduqra AI Education Blog",
          "description": "Expert insights into AI in education, AI skills, and EdTech trends.",
          "publisher": {
            "@type": "Organization",
            "name": "Eduqra AI Solutions",
            "logo": "https://eduqra.com/logo.png"
          }
        }}
      />
      <SEOManager
        schemaType="BreadcrumbList"
        schemaData={{
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://eduqra.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog"
            }
          ]
        }}
      />
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-blog text-center max-w-4xl mx-auto"
          >
            <span className="badge-pill mb-4 inline-flex">Eduqra Insights</span>
            <h1 className="blog-title">Advanced <span className="text-gradient">AI Education Blog</span> & Articles</h1>
            <p className="blog-hero-desc">
              Stay ahead with the ultimate <strong>AI education blog</strong> featuring deep-diver <strong>AI learning articles</strong> and actionable <strong>AI in education insights</strong>. Our <strong>EdTech blog</strong> provides the roadmap to mastering the intersection of intelligence and instruction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="featured-articles-showcase">
        <div className="container">
          <div className="featured-showcase-header">
            <h3>Featured AI Articles</h3>
            <div className="accent-line"></div>
          </div>
          <div className="featured-articles-grid">
            <div className="featured-article-card">
              <span className="featured-label">Must Read</span>
              <h4>AI for Personalized Mentorship: The Eduqra Vision</h4>
              <p>Discover how we are building the world's most advanced <strong>AI education blog</strong> resources for 1-on-1 cognitive growth.</p>
              <Link to="/blog/future-of-ai-education" className="small-link">Read Blueprint <ArrowRight size={14} /></Link>
            </div>
            <div className="featured-article-card">
              <span className="featured-label">Career Insight</span>
              <h4>Mastering AI Fluency in the Professional Space</h4>
              <p>Essential <strong>AI learning insights</strong> for professionals looking to dominate the 2026 intelligence-driven labor market.</p>
              <Link to="/blog/emerging-ai-skills-2026" className="small-link">View Skills Masterclass <ArrowRight size={14} /></Link>
            </div>
            <div className="featured-article-card">
              <span className="featured-label">Technology</span>
              <h4>The Ethics of Algorithmic Education</h4>
              <p>A deep dive into the transparent and bias-free future of learning within the modern <strong>AI education blog</strong> landscape.</p>
              <Link to="/blog/future-of-ai-education" className="small-link">Explore Ethics <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-content-wrapper">
        <div className="container blog-container">
          <div className="blog-main-content">
            {searchQuery || categoryFilter || topicFilter ? (
              <div className="filter-status">
                <h3>
                  {filteredBlogs.length} Results for 
                  <span className="query-text"> "{searchQuery || categoryFilter || topicFilter}"</span>
                </h3>
                <button onClick={clearFilters} className="clear-btn">Clear All</button>
              </div>
            ) : null}

            {filteredBlogs.length > 0 ? (
              <>
                {/* Featured Post (Only show if no search) */}
                {!searchQuery && !categoryFilter && !topicFilter && (
                  <motion.article 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="featured-post-card"
                  >
                    <div className="featured-image-box">
                      <img loading="lazy" src={filteredBlogs[0].featuredImage} alt={filteredBlogs[0].imageAlt} />
                    </div>
                    <div className="featured-content">
                      <div className="featured-meta">
                        <Calendar size={14} className="meta-icon" />
                        <span>{filteredBlogs[0].date}</span>
                      </div>
                      <Link to={`/blog/${filteredBlogs[0].slug}`} className="featured-link-wrapper">
                        <h2>{filteredBlogs[0].title}</h2>
                      </Link>
                      <p>
                        {filteredBlogs[0].excerpt}
                      </p>
                      <Link to={`/blog/${filteredBlogs[0].slug}`} className="read-more">Read More <ArrowRight size={14} /></Link>
                    </div>
                  </motion.article>
                )}

                {/* Standard Posts Grid */}
                <div className="standard-posts-grid">
                  {(searchQuery || categoryFilter || topicFilter ? filteredBlogs : filteredBlogs.slice(1)).map((item, index) => (
                    <motion.article 
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="standard-post-card"
                    >
                      <Link to={`/blog/${item.slug}`} className="post-image-link">
                        <img loading="lazy" src={item.featuredImage} alt={item.imageAlt} />
                      </Link>
                      <div className="post-content">
                        <div className="post-meta-row">
                          <div className="meta-item">
                            <Calendar size={12} className="meta-icon" />
                            <span>{item.date}</span>
                          </div>
                          <div className="meta-item">
                            <User size={12} className="meta-icon" />
                            <span>{item.author}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${item.slug}`} className="post-title-link">
                          <h3>{item.title}</h3>
                        </Link>
                        <p className="post-excerpt">
                          {item.excerpt}
                        </p>
                        <Link to={`/blog/${item.slug}`} className="read-more">Read More <ArrowRight size={14} /></Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-results">
                <Inbox size={48} />
                <h2>No articles found</h2>
                <p>We couldn't find any results for your search. Try different keywords or clear your filters.</p>
                <button onClick={clearFilters} className="btn btn-primary">Clear Search</button>
              </div>
            )}
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget search-widget">
              <h3>Search Articles</h3>
              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by title or keyword..." 
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="sidebar-widget trending-widget">
              <h3>Trending in AI Education</h3>
              <ul className="trending-list">
                <li>
                  <Link to="/blog?topic=generative-ai" className="trending-item">
                    <h4>Generative AI for Curriculums</h4>
                    <p>Explore how <strong>AI learning trends</strong> are creating self-generating courses.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/blog?topic=teacher-copilots" className="trending-item">
                    <h4>AI Teacher Copilots</h4>
                    <p>Discover the <strong>future of education</strong> where AI handles the lecture.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/blog?topic=prompt-engineering" className="trending-item">
                    <h4>Prompt Engineering 101</h4>
                    <p>Master the essential <strong>AI skills</strong> needed for LLM communication.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/blog?topic=adaptive-assessments" className="trending-item">
                    <h4>Adaptive Assessment Models</h4>
                    <p>New <strong>AI learning trends</strong> that evaluate project-based logic.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/blog?topic=ai-ethics" className="trending-item">
                    <h4>AI Ethics & Equity</h4>
                    <p>Ensuring the <strong>future of education</strong> is transparent and bias-free.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/blog?topic=augmented-intelligence" className="trending-item">
                    <h4>Augmented Intelligence</h4>
                    <p>Combining human intuition with <strong>AI skills</strong> for science.</p>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-widget categories-widget">
              <h3>Categories</h3>
              <ul className="categories-list">
                <li><Link to="/blog?category=AI">AI</Link></li>
                <li><Link to="/blog?category=Education">Education</Link></li>
                <li><Link to="/blog?category=Technology">Technology</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  );
};

export default BlogView;
