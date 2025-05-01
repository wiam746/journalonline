import React from 'react';
import '../style/clubetpartenaire.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

// Import your images here
// Example: import clubLogo1 from '../assets/club-logo1.png';

const ClubsEtPartenaires = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const clubs = [
    {
      id: 1 ,
      logo: "image/csia.jpg",
      name: 'Bienvenue au club iacs ',
      color: '#ffffff',
        
    },
    {id: 2,
      logo: "image/energie.jpg",
      name: 'Bienvenue au club énérgie',
      color: '#ffffff',
        
    },
    {
      id: 3,
      logo: "image/agalinov.jpg",
      name: 'Bienvenue au club agalinov',
      color: '#ffffff',
        
    },
    {
      id: 4,
      logo: "image/enactus.jpg",
      name: 'Bienvenue au club enactus',
      color: '#ffffff',
        
    },
    {
      id: 5,
      logo: "image/rotaract.jpg",
      name: 'Bienvenue au club rotaract',
      color: '#ffffff',
    },
    {
      id: 6,
      logo: "image/sport.jpg",
      name: 'Bienvenue au club sport',
      color: '#ffffff',
    },
    {
      id: 7,
      logo:"image/cleam.jpg",
      name: 'Bienvenue au club cleam of hope ',
      color: '#ffffff',
    },
  ];

  const partners = [
    {
      id: 1,
      logo: "image/presse.jpg", // Replace with actual path
      name: 'La presse de l\'Ensa Beni Mellal',
    },
    {
      id: 2,
      logo: "image/adei.jpg",
      name: 'Association Des Etudiants Ingénieurs',
    },
  ];

  return (
    <div className="clubs-partners-container">
      <h1 className="section-title">
        <span className="arrow">&#62;</span>Les clubs
      </h1>
      
      <div className="clubs-grid">
        {clubs.map((club) => (
          <div key={club.id} className="club-item">
            <div className="club-logo-container">
              <img src={club.logo} alt={`Logo ${club.name}`} className="club-logo" />
              <div 
                className="club-color-indicator" 
                style={{ backgroundColor: club.color }}
              ></div>
            </div>
            <Link to={`/club/${club.id}`} className="club-link">
              {club.name}
            </Link>
          </div>
        ))}
      </div>

      <h1 className="section-title partners-title">
        <span className="arrow">&#62;</span>Nos partenaires
      </h1>
      
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-item">
            <div className="partner-logo-container">
              <img src={partner.logo} alt={`Logo ${partner.name}`} className="partner-logo" />
            </div>
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubsEtPartenaires;