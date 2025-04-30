// RetrospectiveComponent.js
import React, { useState, useEffect } from 'react';
import '../style/cominsoon.css';

const RetrospectiveComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Images pour la section "coming soon"
  const comingSoonImages = [
    "image/WhatsApp Image 2025-04-21 à 18.55.05_52fcd77b.jpg",
    "image/WhatsApp Image 2025-04-21 à 13.01.50_ce912e91.jpg",
  ];
  
  // Images pour la rétrospective
  const retrospectiveImages = [
    {
      id: 1,
      src: "image/WhatsApp Image 2024-11-24 à 20.49.26_aaef8833.jpg",
      alt: 'Groupe de personnes lors d\'un événement'
    },
    {
      id: 2,
      src: '/path/to/group-photo2.jpg',
      alt: 'Photo de groupe à l\'extérieur'
    },
    {
      id: 3,
      src: '/path/to/graduation.jpg',
      alt: 'Affiche de cérémonie de remise des diplômes'
    },
    {
      id: 4,
      src: '/path/to/integration.jpg',
      alt: 'Affiche de journée d\'intégration'
    },
    {
      id: 5,
      src: '/path/to/audience.jpg',
      alt: 'Public lors d\'un événement'
    }
  ];
  
  // Naviguer vers la slide suivante dans le slider "coming soon"
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === comingSoonImages.length - 1 ? 0 : prev + 1));
  };
  
  // Navigation automatique pour le slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="retrospective-container">
      {/* Section Coming Soon */}
      <div className="coming-soon-section">
        <h2>Coming Soon...</h2>
        <div className="slider-container">
          <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {comingSoonImages.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Coming soon slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="slider-navigation">
            {comingSoonImages.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                &gt;&gt;
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section Rétrospective */}
      <div className="retrospective-section">
        <h2>Rétrospective des Moments Forts</h2>
        <p className="retrospective-description">
          Revivez les meilleurs moments de nos événements passés à travers ces photos et des témoignages.
        </p>
        
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src={retrospectiveImages[0].src} alt={retrospectiveImages[0].alt} />
          </div>
          <div className="gallery-item medium">
            <img src={retrospectiveImages[1].src} alt={retrospectiveImages[1].alt} />
          </div>
          <div className="gallery-item small">
            <img src={retrospectiveImages[2].src} alt={retrospectiveImages[2].alt} />
          </div>
          <div className="gallery-item small">
            <img src={retrospectiveImages[3].src} alt={retrospectiveImages[3].alt} />
          </div>
          <div className="gallery-item medium">
            <img src={retrospectiveImages[4].src} alt={retrospectiveImages[4].alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrospectiveComponent;