import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MotherCardSection from './components/MotherCard/MotherCardSection';
import Sacrifices from './components/Sacrifices/Sacrifices';
import Memories from './components/Memories/Memories';
import PrayerSection from './components/PrayerSection/PrayerSection';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

// Common
import ScrollProgress from './components/Common/ScrollProgress';

import './App.css';

const LoadingScreen = () => (
  <motion.div 
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="loading-logo"
    >
      <Heart size={60} fill="var(--primary-color)" color="var(--primary-color)" />
    </motion.div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-main">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className={`app-content ${isLoading ? 'hidden' : ''}`}>
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <MotherCardSection />
          <Sacrifices />
          <Memories />
          <Gallery />
          <PrayerSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
