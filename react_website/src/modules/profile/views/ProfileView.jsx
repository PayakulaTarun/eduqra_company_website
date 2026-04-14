import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../../shared/context/AuthContext';
import { User, Mail, Calendar, Shield, LogOut, Settings } from 'lucide-react';
import { logoutUser } from '../../../shared/lib/firebase';
import { useNavigate } from 'react-router-dom';
import './ProfileView.css';

const ProfileView = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/');
  };

  if (!currentUser) return null;

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="profile-page section"
    >
      <div className="container">
        <div className="profile-grid">
          {/* Sidebar */}
          <aside className="profile-sidebar">
            <div className="profile-card user-info-card">
              <div className="profile-avatar">
                {currentUser.photoURL ? (
                  <img loading="lazy" src={currentUser.photoURL} alt={currentUser.displayName} />
                ) : (
                  <div className="avatar-placeholder">{currentUser.displayName?.charAt(0) || 'U'}</div>
                )}
              </div>
              <h3>{currentUser.displayName || 'User'}</h3>
              <p className="user-role badge-pill">{userData?.role || 'Student'}</p>
              
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-value">0</span>
                  <span className="stat-label">Courses</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">0</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>

              <button onClick={handleLogout} className="logout-btn">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="profile-main">
             <div className="profile-card settings-card">
               <h2>Account Details</h2>
               
               <div className="details-list">
                 <div className="detail-item">
                   <div className="detail-icon"><User size={20} /></div>
                   <div className="detail-content">
                     <label>Full Name</label>
                     <span>{currentUser.displayName}</span>
                   </div>
                 </div>

                 <div className="detail-item">
                   <div className="detail-icon"><Mail size={20} /></div>
                   <div className="detail-content">
                     <label>Email Address</label>
                     <span>{currentUser.email}</span>
                   </div>
                 </div>

                 <div className="detail-item">
                   <div className="detail-icon"><Calendar size={20} /></div>
                   <div className="detail-content">
                     <label>Joined Eduqra</label>
                     <span>{currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'N/A'}</span>
                   </div>
                 </div>

                 <div className="detail-item">
                   <div className="detail-icon"><Shield size={20} /></div>
                   <div className="detail-content">
                     <label>Account Security</label>
                     <span>Verified via Google</span>
                   </div>
                 </div>
               </div>

               <div className="profile-actions">
                 <button className="btn btn-secondary">Edit Profile</button>
                 <button className="btn btn-primary">Go To Dashboard</button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ProfileView;
