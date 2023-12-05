import React from 'react';
import "../styles/Footer.css"
import logo from '../images/logo.jpg'
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          {/* Logo buraya eklenecek */}
          <img src={logo} alt="Logo" style={{width:"100px", height:"100px"}} />
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/events">Events</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
