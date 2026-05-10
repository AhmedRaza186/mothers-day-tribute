import React from 'react';
import { motion } from 'framer-motion';
import './MotherCard.css';

const MotherCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      className="mother-card-simple"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="card-icon-simple">
        <Icon size={28} />
      </div>
      <h3 className="card-title-simple">{title}</h3>
      <p className="card-description-simple">{description}</p>
    </motion.div>
  );
};

export default MotherCard;
