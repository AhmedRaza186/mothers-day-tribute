import React from 'react';
import { Heart, Mail } from 'lucide-react';
import './Footer.css';

// Note: Lucide React v0.400+ removed brand icons. 
// If these imports fail, I will provide SVG alternatives.
// For now, I'll try to use generic icons that represent them well or provide SVGs.

const Footer = () => {
  return (
    <footer className="footer-simple">
      <div className="container">
        <div className="footer-top-simple">
          <div className="footer-logo-simple">
            <Heart size={20} fill="#f06292" color="#f06292" />
            <span>A Son's Tribute</span>
          </div>
          <p className="footer-dedication-simple">
            “Heaven lies under the feet of your mother.”
          </p>
        </div>

        <div className="footer-bottom-simple">
          <p>Made with ❤️ by <span className="designer-simple">Ahmed Raza</span></p>
          <div className="footer-social-simple">
            {/* GitHub SVG */}
            <a href="https://github.com/AhmedRaza186" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            {/* LinkedIn SVG */}
            <a href="https://www.linkedin.com/in/ahmed-raza-14188b35b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            {/* Mail Icon (Still available in Lucide) */}
            <a href="mailto:ahmedrazamun@gmail.com"
              aria-label="Email"
              className="social-link">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
