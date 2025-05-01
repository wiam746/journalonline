import React from 'react';
import '../style/clubpartenairs.css';

// Logos des clubs

import jawhra from "/image/jawhara.jpg";
import energie from "react-demo\public\image\energie.jpg";
import rotaract from "react-demo\public\image\rotaract.jpg";
import cleam from "react-demo\public\image\cleam.jpg";
import csia from "react-demo\public\image\csia.jpg";

// Logos des partenaires
import presse from "react-demo\public\image\presse.jpg";
import adei from "react-demo\public\image\adei.jpg";

const ClubsPartnersPage = () => {
  const clubs = [
    {
      id: 1,
      name: "Bienvenue au club 3IR de la filière génie électrique et énergies renouvelables",
      logo: energie,
      alt: "Logo Club 3IR"
    },
    {
      id: 2,
      name: "Bienvenue au club robotique 4.0 de la filière informatique et développement",
      logo: jawhra,
      alt: "Logo Club Robotique 4.0"
    },
    {
      id: 3,
      name: "Bienvenue au club iot de la filière intelligence artificiel et cybersécurité",
      logo: csia,
      alt: "Logo Club IoT"
    },
    {
      id: 4,
      name: "Bienvenue au club talent et new pour les activités culturelles et sociales",
      logo: cleam,
      alt: "Logo Club Talent et New"
    },
    {
      id: 5,
      name: "Bienvenue au club rotaract  pour les actions humanitaires",
      logo: rotaract,
      alt: "Logo Club Jawhara"
    },
    {
      
    }
  ];

  const partners = [
    {
      id: 1,
      name: "La presse de l'Ensa Beni Mellal",
      logo: presse,
      alt: "Logo ENSA Press"
    },
    {
      id: 2,
      name: "Association Des Etudiants Ingénieurs",
      logo: adei,
      alt: "Logo ADEI"
    }
  ];

  return (
    <div className="clubs-partners-container">
      <section className="clubs-section">
        <h2 className="section-title">&gt;Les clubs</h2>
        <div className="clubs-grid">
          {clubs.map(club => (
            <div key={club.id} className="club-item">
              <img src={club.logo} alt={club.alt} className="club-logo" />
              <p className="club-name">{club.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <h2 className="section-title">&gt;Nos partenaires</h2>
        <div className="partners-list">
          {partners.map(partner => (
            <div key={partner.id} className="partner-item">
              <div className="partner-logo-container">
                <img src={partner.logo} alt={partner.alt} className="partner-logo" />
              </div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClubsPartnersPage;