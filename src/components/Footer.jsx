import React from 'react';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <a href="/">Ana Sayfa</a>
          <a href="/events">Tüm Etkinlikler</a>
        </div>
        <p className='copyright'>&copy;Copyright 2023 - EventFinder</p>
      </div>
    </footer>
  );
}

export default Footer;
