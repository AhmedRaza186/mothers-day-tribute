import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../../assets/mother_child_illustration.png'; // Assuming I move it there or use the path directly

const Hero = () => {
  return (
    <section id="home" className="hero-simple">
      <div className="hero-container-simple">
        <div className="hero-text-simple">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title-simple"
          >
            A Heartfelt Tribute to the <br /> 
            <span>Purest Love</span> on Earth
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-para-simple"
          >
            A simple space to celebrate the silent sacrifices, the endless prayers, 
            and the warmth that only a mother can give. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#tribute" className="btn-simple">
              Read My Tribute
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-simple"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* I'll use the actual generated path in the final App.jsx or just reference it correctly */}
          <img src="/src/assets/mother_child_illustration.png" alt="Mother and Child" />
        </motion.div>
      </div>

      <div className="hero-decoration">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
