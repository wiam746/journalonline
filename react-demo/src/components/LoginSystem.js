// Fichier: src/components/LoginSystem.jsx
import React, { useState } from 'react';
import '../style/connexion1.css';
import LoginForm from './LoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import RegisterForm from './RegisterForm';

function LoginSystem({ onClose }) {
  // État pour suivre la page active (login, forgot-password, register)
  const [currentPage, setCurrentPage] = useState('login');
  
  // Fonction pour changer de page
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="modal-overlay active">
      <div className="modal-container">
        <div className="modal-header">
          <h2>
            {currentPage === 'login' ? 'Connexion' : 
             currentPage === 'forgot-password' ? 'Mot de passe oublié' : 
             'Inscription'}
          </h2>
          <button className="close-button" onClick={onClose}>×</button>
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

export default LoginSystem;