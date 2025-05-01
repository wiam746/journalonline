import React from 'react';
import '../style/directormessage.css'; // Importez le fichier CSS

const DirectorMessage = () => {
  return (
    <div className="director-message">
      <h2>Mot du directeur</h2>
      <p>
        L'École Nationale des Sciences Appliquées de Béni Mellal (ENSA-BM) est un établissement public de l'Université Sultan Moulay Slimane (USMS), créé en 2019. Elle fait partie du réseau ENSA - Maroc, un groupe de 13 écoles d'ingénieurs. Sa mission est de former des ingénieurs de haut niveau, capables de s'adapter aux évolutions technologiques et aux besoins du marché de l'emploi dans divers domaines tels que les énergies renouvelables, l'agroalimentaire et la transformation digitale. L'école propose également des formations complémentaires tel que la formation continue pour les professionnels.
      </p>
      <div className="director-info">
        <p>PR. BELAID BOUIKHALENE</p>
        <p>Directeur de L'ENSA De Beni Mellal</p>
      </div>
    </div>
  );
};

export default DirectorMessage;