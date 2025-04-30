import React from 'react';
import '../style/Services.css';

const Services = () => {
  // Données des services
  const services = [
    {
      id: 1,
      titre: "Activités académiques",
      description: "Découvrez nos programmes éducatifs et nos ressources pédagogiques.",
      image:"/image/IMG-20250310-WA0009.jpg", // Remplacer par votre URL d'image
      buttonText: "Explorer"
    },
    {
      id: 2,
      titre: "Événements Culturels",
      description: "Découvrez nos événements culturels et restez informé de nos prochaines activités.",
      image: "/image/WhatsApp Image 2025-03-10 à 14.17.59_f83358db.jpg", // Remplacer par votre URL d'image
      buttonText: "Explorer"
    },
    {
      id: 3,
      titre: "Sports et Activités Physiques",
      description: "Explorez nos activités sportives et nos programmes d'entraînement.",
      image: "/image/IMG-20250310-WA0012.jpg", // Remplacer par votre URL d'image
      buttonText: "Explorer"
    },
    {
      id: 4,
      titre: "Annonces officielles",
      description: "Consultez les annonces officielles et les informations importantes.",
      image: "/image/IMG-20250310-WA0015.jpg", // Remplacer par votre URL d'image
      buttonText: "Explorer"
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">
        Découvrez l'éventail de services que nous proposons pour enrichir votre expérience en ligne.
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-container">
              <img 
                src={service.image} 
                alt={service.titre} 
                className="service-image" 
              />
              <div className="service-overlay">
                <h3 className="service-title">{service.titre}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">{service.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;