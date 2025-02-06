import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faTwitter, 
  faPinterest, 
  faFacebookF, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/behance-logo-white.svg" alt="Behance" />
        </div>

        {/* Main Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Built For Creatives</h3>
            <ul>
              <li><a href="/pro">Try Behance Pro</a></li>
              <li><a href="/inspiration">Find Inspiration</a></li>
              <li><a href="/jobs">Get Hired</a></li>
              <li><a href="/assets">Sell Creative Assets</a></li>
              <li><a href="/services">Sell Freelance Services</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Find Talent</h3>
            <ul>
              <li><a href="/jobs/post">Post a Job</a></li>
              <li><a href="/designers">Graphic Designers</a></li>
              <li><a href="/photographers">Photographers</a></li>
              <li><a href="/editors">Video Editors</a></li>
              <li><a href="/web-designers">Web Designers</a></li>
              <li><a href="/illustrators">Illustrators</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Behance</h3>
            <ul>
              <li><a href="/about">About Behance</a></li>
              <li><a href="/portfolio">Adobe Portfolio</a></li>
              <li><a href="/app">Download the App</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Social</h3>
            <ul className="social-links">
              <li><a href="/instagram"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="/twitter"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="/pinterest"><FontAwesomeIcon icon={faPinterest} /> Pinterest</a></li>
              <li><a href="/facebook"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="/linkedin"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="adobe-logo">
            <img src="/adobe-logo.svg" alt="Adobe" />
            <span>© 2025 Adobe Inc. All rights reserved.</span>
          </div>
          <div className="footer-bottom-links">
            <select className="language-select">
              <option value="en">English</option>
              {/* Add more language options */}
            </select>
            <a href="/terms">TOU</a>
            <a href="/privacy">Privacy</a>
            <a href="/community">Community</a>
            <a href="/cookie-preferences">Cookie preferences</a>
            <a href="/do-not-sell">Do not sell or share my personal information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 