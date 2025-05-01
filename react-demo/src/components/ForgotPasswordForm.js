// Fichier: src/components/ForgotPasswordForm.jsx
import React, { useState } from 'react';

function ForgotPasswordForm({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de récupération de mot de passe
    console.log('Récupération du mot de passe pour:', email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <p className="form-info">
        Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
      </p>
      
      <div className="form-group">
        <label htmlFor="recovery-email">Email</label>
        <input
          type="email"
          id="recovery-email"
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
          className="text-link" 
          onClick={onBackToLogin}
        >
          Retour à la connexion
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;