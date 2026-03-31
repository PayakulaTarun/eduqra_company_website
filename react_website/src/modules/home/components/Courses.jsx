import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Courses.css';

const courses = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    students: '1.2k Students',
    rating: 4.9,
    price: '₹4,150',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Data Science Masterclass',
    students: '1.2k Students',
    rating: 4.8,
    price: '₹4,150',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Advanced Web Development',
    students: '1.2k Students',
    rating: 4.8,
    price: '₹4,150',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Courses = () => {
  return (
    <section className="courses section bg-light" id="courses">
      <div className="container">
        <div className="courses-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Courses</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Explore Popular Courses</h2>
          </motion.div>
          <Link to="/courses" className="text-primary" style={{ fontWeight: 600 }}>View All Courses &rarr;</Link>
        </div>
        
        <div className="courses-grid">
          {courses.map((course, i) => (
            <motion.div 
              className="course-card" 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <span className="student-count"><span className="icon">&#128101;</span> {course.students}</span>
                  <span className="rating"><span className="icon text-accent">&#11088;</span> {course.rating}</span>
                </div>
                <h3>{course.title}</h3>
                <div className="course-footer">
                  <span className="price">{course.price}</span>
                  <Link to={`/learn/${course.id}`} className="enroll-link">Enroll Now &rarr;</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
