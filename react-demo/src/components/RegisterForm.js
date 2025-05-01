// Fichier: src/components/RegisterForm.jsx
import React, { useState } from 'react';

function RegisterForm({ onBackToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification des mots de passe
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    
    // Logique d'inscription
    console.log('Inscription avec les données:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom complet"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="register-password">Mot de passe</label>
        <input
          type="password"
          id="register-password"
          name="password"
          placeholder="Créer un mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="confirm-password">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="Confirmer votre mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" className="submit-button">S'inscrire</button>
      
      <div className="form-footer">
        <p>
          Déjà un compte? 
          <button 
            type="button" 
            className="text-link" 
            onClick={onBackToLogin}
          >
            Se connecter
          </button>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;