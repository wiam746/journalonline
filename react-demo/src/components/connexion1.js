import { useState } from 'react';
import { Bell, Mail, MessageSquare, Check, X } from 'lucide-react';
import '../style/connexion1.css'
export default function SubscriptionComponent() {
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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (subscriptionType === 'email' && (!email || !email.includes('@'))) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }
    
    if (subscriptionType === 'sms' && (!phone || phone.length < 10)) {
      setError('Veuillez entrer un numéro de téléphone valide');
      return;
    }

    // Simulation d'envoi à une API
    console.log('Abonnement soumis:', {
      type: subscriptionType,
      contact: subscriptionType === 'email' ? email : phone,
      preferences
    });
    
    setError('');
    setSubmitted(true);
    
    // Reset le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setPhone('');
    }, 3000);
  };

  const handlePreferenceChange = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Bell className="text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Abonnez-vous aux notifications</h2>
      </div>
      
      {submitted ? (
        <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-md">
          <Check className="text-green-500 w-12 h-12 mb-2" />
          <p className="text-green-800 text-center font-medium">
            Merci de vous être abonné ! Vous recevrez bientôt nos notifications.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Comment souhaitez-vous être notifié ?</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setSubscriptionType('email')}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md ${
                  subscriptionType === 'email' 
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-500' 
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                }`}
              >
                <Mail className="mr-2 w-5 h-5" />
                <span>Email</span>
              </button>
              
              <button
                type="button"
                onClick={() => setSubscriptionType('sms')}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md ${
                  subscriptionType === 'sms' 
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-500' 
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                }`}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                <span>SMS</span>
              </button>
            </div>
          </div>
          
          {subscriptionType === 'email' ? (
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
                required
              />
            </div>
          ) : (
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+33 6 12 34 56 78"
                required
              />
            </div>
          )}
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-3 font-medium">
              Préférences de notification
            </label>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="news"
                  checked={preferences.news}
                  onChange={() => handlePreferenceChange('news')}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="news" className="ml-2 text-gray-700">Actualités générales</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="events"
                  checked={preferences.events}
                  onChange={() => handlePreferenceChange('events')}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="events" className="ml-2 text-gray-700">Événements</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="academic"
                  checked={preferences.academic}
                  onChange={() => handlePreferenceChange('academic')}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="academic" className="ml-2 text-gray-700">Actualités académiques</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cultural"
                  checked={preferences.cultural}
                  onChange={() => handlePreferenceChange('cultural')}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="cultural" className="ml-2 text-gray-700">Actualités culturelles</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sports"
                  checked={preferences.sports}
                  onChange={() => handlePreferenceChange('sports')}
                  className="w-4 h-4 text-blue-600"
                />
                <label htmlFor="sports" className="ml-2 text-gray-700">Actualités sportives</label>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
              <X className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-200"
          >
            S'abonner
          </button>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            En vous abonnant, vous acceptez de recevoir nos notifications selon vos préférences.
            Vous pouvez vous désabonner à tout moment.
          </p>
        </form>
      )}
    </div>
  );
}