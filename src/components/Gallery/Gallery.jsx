import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
const images = [
  {
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    title: "Mother's Love"
  },
  {
    url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    title: "Beautiful Memories"
  },
  {
    url: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=800&auto=format&fit=crop",
    title: "Endless Care"
  },
  {
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    title: "Forever Together"
  },
];

  return (
    <section id="gallery" className="gallery-simple">
      <div className="container">
        <div className="section-header-simple">
          <h2 className="section-title-simple">Moments of <span className="text-gradient">Love</span></h2>
        </div>

        <div className="gallery-grid-simple">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="gallery-card-simple"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img src={img.url} alt={img.title} />
              <div className="gallery-info-simple">
                <span>{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
