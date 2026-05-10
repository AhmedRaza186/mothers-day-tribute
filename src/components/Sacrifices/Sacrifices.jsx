import React from 'react';
import { motion } from 'framer-motion';
import { Moon, HeartOff, ShieldAlert, Heart, HandHeart } from 'lucide-react';
import './Sacrifices.css';

const Sacrifices = () => {
  const sacrifices = [
    {
      title: "Sleepless Nights",
      desc: "Watching over us through the night, setting aside her own rest for our comfort.",
      icon: Moon,
    },
    {
      title: "Silent Struggles",
      desc: "Smiling through her own difficulties to ensure our world stayed bright.",
      icon: ShieldAlert,
    },
    {
      title: "Endless Prayers",
      desc: "Every heartbeat a prayer for our success, safety, and happiness.",
      icon: HandHeart,
    }
  ];

  return (
    <section id="sacrifices" className="sacrifices-simple">
      <div className="container">
        <div className="section-header-simple">
          <h2 className="section-title-simple">A Mother’s <span className="text-gradient">Sacrifice</span></h2>
          <p className="section-subtitle-simple">Beyond what words can describe, she gave her all for us.</p>
        </div>

        <div className="sacrifices-grid-simple">
          {sacrifices.map((item, index) => (
            <motion.div 
              key={index}
              className="sacrifice-card-simple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="sacrifice-icon-simple">
                <item.icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sacrifices;
