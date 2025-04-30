// LoginSystem.js
import React, { useState } from 'react';
import '../style/connexion.css';

// Composant principal qui gère l'ensemble du système de connexion
function LoginSystem() {
  // État pour suivre la page active (login, forgot-password, register)
  const [currentPage, setCurrentPage] = useState('login');
  // État pour contrôler l'affichage de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour changer de page
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>{currentPage === 'login' ? 'Connexion' : 
               currentPage === 'forgot-password' ? 'Mot de passe oublié' : 
               'Inscription'}</h2>
          <button className="close-button" onClick={closeModal}>×</button>
        </div>
        
        <div className="modal-content">
          {currentPage === 'login' && (
            <LoginForm 
              onForgotPasswordClick={() => navigateTo('forgot-password')} 
              onRegisterClick={() => navigateTo('register')} 
            />
          )}
          
          {currentPage === 'forgot-password' && (
            <ForgotPasswordForm 
              onBackToLogin={() => navigateTo('login')} 
            />
          )}
          
          {currentPage === 'register' && (
            <RegisterForm 
              onBackToLogin={() => navigateTo('login')} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Composant pour le formulaire de connexion
function LoginForm({ onForgotPasswordClick, onRegisterClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter le code pour traiter la connexion
    console.log('Tentative de connexion avec:', email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="submit-button">Se connecter</button>
      
      <div className="form-footer">
        <button 
          type="button" 
          className="text-button" 
          onClick={onForgotPasswordClick}
        >
          Mot de passe oublié?
        </button>
        
        <div className="register-prompt">
          <span>Pas encore de compte? </span>
          <button 
            type="button" 
            className="text-button" 
            onClick={onRegisterClick}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </form>
  );
}

// Composant pour le formulaire de mot de passe oublié
function ForgotPasswordForm({ onBackToLogin }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de la demande de réinitialisation de mot de passe
    console.log('Demande de réinitialisation pour:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="form-description">
        Entrez votre adresse email pour recevoir un lien de réinitialisation de mot de passe.
      </p>
      
      <div className="form-group">
        <label htmlFor="reset-email">Email</label>
        <input
          type="email"
          id="reset-email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="submit-button">Envoyer le lien</button>
      
      <div className="form-footer">
        <button 
          type="button" 
          className="text-button" 
          onClick={onBackToLogin}
        >
          Retour à la connexion
        </button>
      </div>
    </form>
  );
}

// Composant pour le formulaire d'inscription
function RegisterForm({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de l'inscription
    console.log('Inscription avec:', name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          type="text"
          id="name"
          placeholder="Votre nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="register-password">Mot de passe</label>
        <input
          type="password"
          id="register-password"
          placeholder="Choisissez un mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="confirm-password">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirmez votre mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="submit-button">S'inscrire</button>
      
      <div className="form-footer">
        <button 
          type="button" 
          className="text-button" 
          onClick={onBackToLogin}
        >
          Déjà un compte? Se connecter
        </button>
      </div>
    </form>
  );
}

export default LoginSystem;