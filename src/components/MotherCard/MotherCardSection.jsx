import React from 'react';
import { Heart, ShieldCheck, Flame, HandHeart, Sparkles, Infinity } from 'lucide-react';
import MotherCard from './MotherCard';
import './MotherCard.css';

const MotherCardSection = () => {
  const tributes = [
    {
      title: "Unconditional Love",
      description: "A love that asks for nothing in return, flowing steadily like an eternal spring.",
      icon: Heart,
    },
    {
      title: "Silent Sacrifices",
      description: "The many dreams she quietly folded away so that ours could take flight and soar high.",
      icon: Flame,
    },
    {
      title: "Gentle Care",
      description: "A touch that heals every wound and a warmth that turns any house into a home.",
      icon: Sparkles,
    },
    {
      title: "Strong Support",
      description: "The backbone of our strength, believing in us even when the whole world doubts.",
      icon: ShieldCheck,
    },
    {
      title: "Constant Prayers",
      description: "Her constant whispers to the Heavens, building a fortress of protection around us.",
      icon: HandHeart,
    },
    {
      title: "Endless Bond",
      description: "A love that transcends time and space, living forever in our hearts.",
      icon: Infinity,
    },
  ];

  return (
    <section id="tribute" className="tribute-section-simple">
      <div className="container">
        <div className="section-header-simple">
          <h2 className="section-title-simple">The Essence of a <span className="text-gradient">Mother</span></h2>
          <p className="section-subtitle-simple">A reflection of her beauty, strength, and the light she brings to our lives.</p>
        </div>
        
        <div className="tribute-grid-simple">
          {tributes.map((item, index) => (
            <MotherCard 
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotherCardSection;
