import React from "react";
import "../style/firstsection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Restez à jour avec l’actualité</h1>
        <p>
          Notre plateforme vous permet de rester au courant des dernières nouvelles, événements et mises à jour de votre communauté.
          <br />
          Nous classons les informations en sections académiques, culturelles et sportives...
        </p>
      </div>
      <div className="more-details">
        <p>MORE DETAILS</p>
        <span className="arrow">→</span>

      </div>
    </section>
  );
};

export default HeroSection;