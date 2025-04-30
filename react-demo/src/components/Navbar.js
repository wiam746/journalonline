import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import LoginSystem from '../components/LoginSystem';
import SubscriptionComponent from '../components/notifications';
import { BellIcon } from 'lucide-react';

import { FaSearch, FaBell } from 'react-icons/fa'; // Vous devrez installer react-icons: npm install react-icons


function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
 

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  
  return (
    <header>
      <div className="search-container">
        <div className="search-wrapper">
          <input 
            type="text"
            className="search-input"
            placeholder="Recherche....."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <nav className="main-nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/apropos" className="nav-link">A propos</Link></li>
          <li><Link to="/clubetpartenaires" className="nav-link">Clubs et Partenaires</Link></li>
          <li><Link to="/cominsoon" className="nav-link">Evenement</Link></li>
          <li><Link to="/articles" className="nav-link">Articles</Link></li>
        </ul>
      </nav>
      
      <button className="connect-button" onClick={openLoginModal}>
        Se connecter
      </button>
      {isLoginModalOpen && <LoginSystem onClose={closeLoginModal} />}

      <button 
        className="notifications-button"
        onClick={() => setShowNotifications(true)}
      >
        <BellIcon size={16} />
        Notifications
      </button>
      
      
      {/* Modal de notifications */}
      <SubscriptionComponent 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />


    </header>
  );
}

export default Header;