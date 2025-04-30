import React from "react";
import { useState } from "react";
import Header from "../components/Navbar";
import HeroSection from "../components/firstsection";
import  EventsContainer from "../components/Actualité";
import ServicesSection from "../components/Services";
import AdminAnnouncements from "../components/adminannonce";
import "../index.css";
import DirectorMessage from "../components/directormessage";
import ContactUs from "../components/contactus";
function HomePage() {
    return (
      <div className="home-page">
       <HeroSection />
       < EventsContainer />
       <ServicesSection />
       <AdminAnnouncements /> 
       <DirectorMessage />
        <ContactUs />
      </div>
    );
  }
  
  export default HomePage;