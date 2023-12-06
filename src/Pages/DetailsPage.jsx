// src/App.js
import React from 'react';
import {Link} from 'react-router-dom'
import "../styles/DetailsPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faUsers} from '@fortawesome/free-solid-svg-icons';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function DetailsPage() {
  return (
    <>
    <NavBar/>
    <div className="container">
    <div className="detay-sayfası">
      <div className="sol-kolon">
        <div className="detay-kutusu">
          <h1 className='info-title'>%100 Metal Sunar: Paradise Lost
          <span className="title-subtitle">Beşiktaş / İstanbul</span>
          </h1>
          <div className="info-subfields">
            <div className="subfields-field">
              <FontAwesomeIcon icon={faCalendar} className="field-icon" />
              <span>5 Aralık</span>
            </div>
            <div className="subfields-field">
              <FontAwesomeIcon icon={faClock} className="field-icon" />
              <span>Etkinlik - 21:30</span>
            </div>
            <div className="subfields-field">
            <FontAwesomeIcon icon={faUsers} className="field-icon" />
              <span>Konser</span>
            </div>
          </div>
          <Link to="/purchase">
          <button className='btn-primary'>Bilet Satın Al</button>
          </Link>
        </div>
        <div className='detaylar'>
          <h2>Etkinlik Kuralları</h2>
          <hr />
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere corrupti quasi repellat sequi soluta dignissimos vitae earum inventore! Enim accusantium libero aut a vero. Necessitatibus aliquam explicabo tempora harum rerum?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere corrupti quasi repellat sequi soluta dignissimos vitae earum inventore! Enim accusantium libero aut a vero. Necessitatibus aliquam explicabo tempora harum rerum?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere corrupti quasi repellat sequi soluta dignissimos vitae earum inventore! Enim accusantium libero aut a vero. Necessitatibus aliquam explicabo tempora harum rerum?</li>
        </ul>
        </div>
      </div>
      <div className="sag-kolon">
        <img className='sağ-kolon' src="https://cdn.ifperformance.com/events/paradise-lost-oQrbc.jpeg" alt="Detay Resmi" />
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default DetailsPage;
