import React from 'react';
import '../style/DashboardPage.css';

function DashboardPage({ user, onLogout }) {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="logo">MonSite</div>
        <div className="user-info">
          <span>Bienvenue, {user.name}</span>
          <button onClick={onLogout} className="logout-btn">Déconnexion</button>
        </div>
      </header>
      
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li className="active"><a href="#dashboard">Tableau de bord</a></li>
              <li><a href="#profile">Mon profil</a></li>
              <li><a href="#settings">Paramètres</a></li>
              <li><a href="#help">Aide</a></li>
            </ul>
          </nav>
        </aside>
        
        <main className="content">
          <h1>Tableau de bord</h1>
          <p>Bienvenue sur votre espace personnel, {user.name}!</p>
          
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Notifications</h3>
              <p className="stat-value">5</p>
            </div>
            <div className="stat-card">
              <h3>Messages</h3>
              <p className="stat-value">12</p>
            </div>
            <div className="stat-card">
              <h3>Projets</h3>
              <p className="stat-value">3</p>
            </div>
          </div>
          
          <div className="recent-activity">
            <h2>Activité récente</h2>
            <ul>
              <li>Vous avez complété une tâche <span className="time">il y a 2 heures</span></li>
              <li>Un nouveau message reçu <span className="time">il y a 4 heures</span></li>
              <li>Projet mis à jour <span className="time">hier</span></li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;