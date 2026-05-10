import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tribute', href: '#tribute' },
    { name: 'Sacrifices', href: '#sacrifices' },
    { name: 'Memories', href: '#memories' },
    { name: 'Prayers', href: '#prayer' },
  ];

  return (
    <nav className={`navbar-simple ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container-simple">
        <a href="#home" className="nav-logo-simple">
          <Heart className="heart-icon-simple" size={20} fill="var(--primary-color)" />
          <span>Mother's Love</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-simple desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-simple">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="menu-toggle-simple mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-simple"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link-simple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
