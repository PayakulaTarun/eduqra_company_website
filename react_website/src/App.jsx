import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from './modules/home/views/HomeView';
import AboutView from './modules/about/views/AboutView';
import CoursesView from './modules/courses/views/CoursesView';
import CourseDetailsView from './modules/courses/views/CourseDetailsView';
import WebinarsView from './modules/webinars/views/WebinarsView';
import AISolutionsView from './modules/ai-solutions/views/AISolutionsView';
import BlogView from './modules/blog/views/BlogView';
import BlogDetailsView from './modules/blog/views/BlogDetailsView';
import ContactView from './modules/contact/views/ContactView';
import CoursePlayerView from './modules/lms/views/CoursePlayerView';
import LoginView from './modules/auth/views/LoginView';
import SignUpView from './modules/auth/views/SignUpView';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/courses" element={<CoursesView />} />
          <Route path="/courses/:id" element={<CourseDetailsView />} />
          <Route path="/webinars" element={<WebinarsView />} />
          <Route path="/ai-solutions" element={<AISolutionsView />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogDetailsView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/learn/:id" element={<CoursePlayerView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/join" element={<SignUpView />} />
          <Route path="*" element={<div className="section container" style={{minHeight:"60vh"}}><h2>Coming Soon</h2></div>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
