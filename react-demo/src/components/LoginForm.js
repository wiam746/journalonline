// Fichier: src/components/LoginForm.jsx
import React, { useState } from 'react';

function LoginForm({ onForgotPasswordClick, onRegisterClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log('Tentative de connexion avec:', email);
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
          className="text-link" 
          onClick={onForgotPasswordClick}
        >
          Mot de passe oublié?
        </button>
        <p>
          Pas encore de compte? 
          <button 
            type="button" 
            className="text-link" 
            onClick={onRegisterClick}
          >
            S'inscrire
          </button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;