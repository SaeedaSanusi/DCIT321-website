import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/behance-logo.svg" alt="Behance" />
        </div>
        
        <div className="nav-items">
          <button className="explore-btn">
            Explore <span className="dropdown-arrow">▼</span>
          </button>
          <a href="/jobs">Jobs</a>
          <a href="/behance" className="behance-link">
            Behance <span className="pro-badge">PRO</span>
          </a>
        </div>
      </div>

      <div className="navbar-right">
        <button className="hire-btn">
          Hire Freelancers <span className="dropdown-arrow">▼</span>
        </button>
        <div className="notification-icon">
          <i className="bell-icon">🔔</i>
        </div>
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
        <div className="adobe-logo">
          <img src="/adobe-logo.svg" alt="Adobe" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 