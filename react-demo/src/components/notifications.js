import React, { useState } from 'react';
import "../style/notifications.css";
export default function SubscriptionComponent({ isOpen, onClose }) {
  const [subscriptionType, setSubscriptionType] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferences, setPreferences] = useState({
    news: true,
    events: true,
    academic: false,
    cultural: false,
    sports: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Abonnement soumis:', {
      type: subscriptionType,
      contact: subscriptionType === 'email' ? email : phone,
      preferences
    });
    
    // Traitement de l'abonnement
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Abonnez-vous aux notifications</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Comment souhaitez-vous être notifié ?</label>
              <div className="notification-options">
                <div className="notification-option">
                  <input 
                    type="radio" 
                    id="email-option" 
                    name="notification-type" 
                    checked={subscriptionType === 'email'}
                    onChange={() => setSubscriptionType('email')}
                  />
                  <label htmlFor="email-option">Email</label>
                </div>
                
                <div className="notification-option">
                  <input 
                    type="radio" 
                    id="sms-option" 
                    name="notification-type" 
                    checked={subscriptionType === 'sms'}
                    onChange={() => setSubscriptionType('sms')}
                  />
                  <label htmlFor="sms-option">SMS</label>
                </div>
              </div>
            </div>
            
            {subscriptionType === 'email' ? (
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                />
              </div>
            ) : (
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
            )}
            
            <div className="form-group">
              <label className="form-label">Préférences de notification</label>
              <div className="preferences-list">
                <div className="preference-item">
                  <input
                    type="checkbox"
                    id="news"
                    checked={preferences.news}
                    onChange={() => setPreferences({...preferences, news: !preferences.news})}
                  />
                  <label htmlFor="news">Actualités générales</label>
                </div>
                
                <div className="preference-item">
                  <input
                    type="checkbox"
                    id="events"
                    checked={preferences.events}
                    onChange={() => setPreferences({...preferences, events: !preferences.events})}
                  />
                  <label htmlFor="events">Événements</label>
                </div>
                
                <div className="preference-item">
                  <input
                    type="checkbox"
                    id="academic"
                    checked={preferences.academic}
                    onChange={() => setPreferences({...preferences, academic: !preferences.academic})}
                  />
                  <label htmlFor="academic">Actualités académiques</label>
                </div>
                
                <div className="preference-item">
                  <input
                    type="checkbox"
                    id="cultural"
                    checked={preferences.cultural}
                    onChange={() => setPreferences({...preferences, cultural: !preferences.cultural})}
                  />
                  <label htmlFor="cultural">Actualités culturelles</label>
                </div>
                
                <div className="preference-item">
                  <input
                    type="checkbox"
                    id="sports"
                    checked={preferences.sports}
                    onChange={() => setPreferences({...preferences, sports: !preferences.sports})}
                  />
                  <label htmlFor="sports">Actualités sportives</label>
                </div>
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}