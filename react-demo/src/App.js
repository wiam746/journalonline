import React from "react";
import { useState } from "react";
import Header from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import RetrospectiveComponent from './components/cominsoon'; // Assurez-vous que le chemin est correct
import ClubsEtPartenaires from './components/clubetpartenaires';
import Articles from "./components/articles";
import  HomePage from"./components/homepage";
import addEventListener from "./components/notifications"
import About from "./components/apropos";
import ContactPage from "./components/contactus";
import LoginPage from"./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/login";
function App() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUserData(user);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  if (isLoggedIn) {
    return <div>Vous êtes connecté!</div>;
  }

  return (
    <div className="App">
      <Login />
    <BrowserRouter >
    <Header toggleNotifications={toggleNotifications} />
      <Routes>
      <Route path="/" element={< HomePage />}/>
      <Route path="/cominsoon" element={<RetrospectiveComponent/>} />
      <Route path="/clubetpartenaires" element={<ClubsEtPartenaires/>} />
      <Route path="/articles" element={<Articles/>} />
      <Route path="/apropos" element={<About/>} />
      <Route path="/notification" element={<notification-icon/>} />
      <Route path="/contactus" element={<ContactPage/>} />
      <Route 
          path="/LoginPage" 
          element={
            isAuthenticated ? 
            <Navigate to="/DashboardPage" replace /> : 
            <LoginPage onLoginSuccess={handleLogin} />
          } 
        />
        <Route 
          path="/DashboardPage" 
          element={
            isAuthenticated ? 
            <DashboardPage user={userData} onLogout={handleLogout} /> : 
            <Navigate to="/LoginPage" replace />
          } 
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;


