import React, { useState } from 'react';
import '../style/contactus.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logique d'envoi du formulaire
      console.log('Formulaire soumis:', formData);
      // Exemple d'envoi à une API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Contact us</h2>
          <p>Nous sommes là pour répondre à vos questions. N'hésitez pas à nous contacter.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span>exemple@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+212 xxxxxxxx</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>ENSA de Béni Mellal, Campus universitaire Mghila, 23000 Béni Mellal</span>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Restez connectés</h3>
            <p>Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos actualités et événements.</p>
            
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;