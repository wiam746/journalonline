import React from 'react';
import '../style/apropos.css'; // Importez votre fichier CSS (APropos.css)

function AProposPage() {
  return (
    <div className="a-propos-container">
      <h1 className="a-propos-title">À propos</h1>
      <p className="a-propos-intro">
        Bienvenue sur la page "À propos" du journal web de l'École Nationale des Sciences Appliquées de Béni Mellal.
        Nous sommes une équipe d'étudiants et de professeurs passionnés, dédiés à partager les dernières
        actualités et événements de notre école. Découvrez l'histoire de l'ENSA, nos valeurs, et rencontrez l'équipe derrière ce projet.
      </p>

      <section className="notre-histoire">
        <h2>Notre Histoire</h2>
        <p>Un bref historique de notre école et de ce projet.</p>
        {/* Ajoutez plus de contenu sur l'histoire ici */}
      </section>

      <section className="notre-equipe">
        <h2>Notre Équipe</h2>
        <div className="membre-equipe">
          <h3>Nom du Membre 1</h3>
          <p className="role">Rôle dans le projet</p>
          {/* Ajoutez plus d'informations sur le membre */}
        </div>
        <div className="membre-equipe">
          <h3>Nom du Membre 2</h3>
          <p className="role">Autre rôle</p>
          {/* Ajoutez plus d'informations sur le membre */}
        </div>
        <div className="membre-equipe">
          <h3>Nom du Membre 2</h3>
          <p className="role">Autre rôle</p>
          {/* Ajoutez plus d'informations sur le membre */}
        </div>
        {/* Ajoutez d'autres membres de l'équipe ici */}
      </section>

      {/* Ajoutez d'autres sections comme "Nos Valeurs", "Notre Mission", etc. */}
    </div>
  );
}

export default AProposPage;
