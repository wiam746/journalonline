import React, { useState, useEffect } from 'react';
import '../style/Actualité.css';

const DernieresActualites = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  // Données des actualités
  const actualites = [
    {
      id: 1,
      image: "/image/WhatsApp Image 2025-02-22 à 22.03.12_041528df.jpg", // Remplacer par votre URL d'image
      titre: "Formation certifiée: Adobe ECPP pour la PI et l'analyse des sources ouvertes",
      date: "26/02/2025",
      boutonTexte: "Savoir plus"
    },
    {
      id: 2,
      image: "/image/WhatsApp Image 2025-02-16 à 18.08.47_da3700a6.jpg", // Remplacer par votre URL d'image
      titre: "Semaine des indispensables pour comprendre le droit du travail",
      date: "18/03/2025",
      boutonTexte: "Savoir plus"
    },
    {
      id: 3,
      image: "/image/WhatsApp Image 2025-02-10 à 23.57.09_810dbfff.jpg", // Remplacer par votre URL d'image
      titre: "Microsoft Tech Day",
      date: "15/04/2025",
      boutonTexte: "Savoir plus"
    },
    {
      id: 4,
      image: "/api/placeholder/300/400", // Remplacer par votre URL d'image
      titre: "Autre événement à venir",
      date: "20/05/2025",
      boutonTexte: "Savoir plus"
    }
  ];

  // Fonction pour naviguer au prochain slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === actualites.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour naviguer au slide précédent
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? actualites.length - 1 : prevIndex - 1
    );
  };

  // Navigation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Gestion des événements tactiles
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Si le glissement est suffisamment long
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Glissement vers la gauche
        nextSlide();
      } else {
        // Glissement vers la droite
        prevSlide();
      }
    }
  };

  // Calculer l'indice visible pour chaque carte
  const getVisibleIndices = () => {
    const visibleIndices = [];
    for (let i = -1; i <= 1; i++) {
      let index = activeIndex + i;
      if (index < 0) index = actualites.length - 1;
      if (index >= actualites.length) index = 0;
      visibleIndices.push(index);
    }
    return visibleIndices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="actualites-container">
      <h2 className="actualites-title">Dernières actualités</h2>
      <p className="actualites-subtitle">Restez informé des nouveautés et des mises à jour importantes.</p>
      
      <div 
        className="carousel-container" 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-button prev" onClick={prevSlide}>
          &lt;
        </button>
        
        <div className="carousel-track">
          {visibleIndices.map((index, i) => {
            const actualite = actualites[index];
            const position = i - 1; // -1 = gauche, 0 = centre, 1 = droite
            
            return (
              <div 
                key={actualite.id}
                className={`actualite-card ${position === 0 ? 'active' : position < 0 ? 'left' : 'right'}`}
              >
                <div className="card-content">
                  <div className="card-image">
                    <img src={actualite.image} alt={actualite.titre} />
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{actualite.titre}</h3>
                    <p className="card-date">{actualite.date}</p>
                    <button className="card-button">{actualite.boutonTexte}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="carousel-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-indicators">
        {actualites.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DernieresActualites;