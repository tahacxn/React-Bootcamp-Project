import React from 'react';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <a href="/">Home</a>
          <a href="/events">Events</a>
        </div>
        <p className='copyright'>&copy;Copyright 2023 - Else Performance</p>
      </div>
    </footer>
  );
}

export default Footer;
