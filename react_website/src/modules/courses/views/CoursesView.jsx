import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, BookOpen } from 'lucide-react';
import './CoursesView.css';

const coursesData = [
  {
    id: 1,
    title: 'AI & Machine Learning Mastery',
    category: 'Artificial Intelligence',
    rating: 4.9,
    students: '1.2k',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Dr. Sarah Wilson'
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    category: 'Data Science',
    rating: 4.8,
    students: '2.5k',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Mr. James Miller'
  },
  {
    id: 3,
    title: 'Advanced Web Development',
    category: 'Development',
    rating: 4.9,
    students: '1.8k',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Ms. Emily Chen'
  },
  {
    id: 4,
    title: 'Generative AI for Creative Arts',
    category: 'Artificial Intelligence',
    rating: 4.7,
    students: '900+',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Prof. Alan Turing Jr.'
  },
  {
    id: 5,
    title: 'Python for Data Analysis',
    category: 'Data Science',
    rating: 4.9,
    students: '3k+',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Mr. Kevin Zhang'
  },
  {
    id: 6,
    title: 'Business Strategy with AI',
    category: 'Business',
    rating: 4.6,
    students: '1.1k',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: 'Ms. Linda Ford'
  }
];

const categories = ['All', 'Artificial Intelligence', 'Data Science', 'Development', 'Business', 'Design'];

const CoursesView = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="courses-page"
    >
      <section className="courses-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Explore Popular Courses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="courses-subtitle"
          >
            Learn from industry experts with high-quality content and real-world projects.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="courses-search-wrapper"
          >
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-btn">
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="courses-grid-section section">
        <div className="container">
          <div className="categories-filter">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`category-tag ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <motion.div 
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="course-card"
              >
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-badge">{course.category}</span>
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="course-rating"><Star size={14} className="star-icon" fill="currentColor" /> {course.rating}</span>
                    <span className="course-students"><Users size={14} /> {course.students} Students</span>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <h3>{course.title}</h3>
                  </Link>
                  <div className="course-instructor">
                    <span>By {course.instructor}</span>
                  </div>
                  <div className="course-footer">
                    <span className="course-price">{course.price}</span>
                    <Link to={`/courses/${course.id}`} className="enroll-btn">Enroll Now &rarr;</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default CoursesView;
