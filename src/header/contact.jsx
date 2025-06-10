// src/components/WhatsAppIcon.js
import React from "react";
import "./style.css"; // We'll create this CSS file next
import WhatsAppLogo from "../assets/logo-whatsapp-png-46041.png";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a href="https://wa.me/+94771781833" target="_blank" rel="noopener noreferrer">
      <img 
          width="48" 
          height="48" 
          src={WhatsAppLogo} 
          alt="WhatsApp" 
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
