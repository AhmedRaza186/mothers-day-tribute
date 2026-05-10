import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './PrayerSection.css';

const PrayerSection = () => {
  return (
    <section id="prayer" className="prayer-simple">
      <div className="container">
        <motion.div 
          className="prayer-content-simple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart className="prayer-heart-simple" fill="var(--primary-color)" size={32} />
          <h2 className="prayer-title-simple">A Moment of Prayer</h2>
          
          <div className="dua-list-simple">
            <p>“May Allah bless every mother with peace and health.”</p>
            <p>“May Allah grant Jannah to the mothers who have left us.”</p>
            <p>“May we always be the coolness of our mothers' eyes.”</p>
          </div>

          <div className="special-dedication-simple">
            <p>“May Allah increase my mother’s ranks in Jannah. 🤍”</p>
            <span>She passed away a year ago, but her love still lives in every heartbeat.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrayerSection;
