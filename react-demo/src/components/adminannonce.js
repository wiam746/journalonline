import React from 'react';
import '../style/adminannonce.css'; // Importez le fichier CSS

const AdminAnnouncements = () => {
  return (
    <div className="announcements-container">
      <h1>Annonces de l'Administration</h1>
      <p>Retrouvez ici toutes les annonces officielles et les mises à jour importantes.</p>
      <div className="announcements-grid">
        <div className="announcement-item">
          <img src="/images/chess-tournament.jpg" alt="Tournoi International Universitaire « ISMAGI » des Échecs" />
          <div className="announcement-content">
            <h2>Tournoi International Universitaire « ISMAGI » des Échecs</h2>
            <p>L'ISMAGI de Rabat est fier d'annoncer la tenue du Tournoi International Universitaire « ISMAGI » des Échecs qui se déroulera du 17 au 20 avril 2025. Cet événement prestigieux réunira des étudiants passionnés d'échecs venus du monde entier sous le thème inspirant « Le jeu d'échecs est un support de formation et de réussite d'excellence ». Nous invitons tous les amateurs et les joueurs confirmés à participer à ce tournoi qui promet d'être une expérience enrichissante et stimulante.</p>
            <a href="#" className="details-button">Détails</a>
          </div>
        </div>
        <div className="announcement-item">
          <img src="\image\APPEL.jpg"/>
          <div className="announcement-content">
            <h2>Appel à Candidature pour un Double Diplôme Ingénieur-Ingénieur et Ingénieur-Master 2 à Polytech Angers en France</h2>
            <p>Polytech Angers ouvre ses portes aux étudiants ambitieux pour l'année 2025-2026, avec un programme de doubles diplômes Ingénieur-Ingénieur et Ingénieur-Master 2. Cette initiative offre une opportunité unique d'internationaliser son cursus et d'acquérir une double compétence, en combinant une solide expertise technique avec une spécialisation de haut niveau. Les étudiants sélectionnés bénéficieront d'une expérience académique enrichissante, les préparant à une carrière internationale réussie.</p>
            <a href="#" className="details-button">Détails</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnnouncements;