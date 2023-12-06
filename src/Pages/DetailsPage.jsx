// src/pages/DetailsPage.jsx
import React from 'react';
import { useParams,Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,  faMoneyBillAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import eventsData from '../data/Events';
import "../styles/DetailsPage.css"
import Iframe from 'react-iframe'

function DetailsPage() {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Etkinlik bulunamadı</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="detay-sayfası">
          <div className="sol-kolon">
            <div className="detay-kutusu">
              <h1 className="info-title">
                {event.name}
                <span className="title-subtitle">{event.place}</span>
              </h1>
              <div className="info-subfields">
                <div className="subfields-field">
                  <FontAwesomeIcon icon={faCalendar} className="field-icon" />
                  <span>{event.date}</span>
                </div>
                <div className="subfields-field">
                  <FontAwesomeIcon icon={faUsers} className="field-icon" />
                  <span>{event.category}</span>
                </div>
                {event.price && (
                  <div className="subfields-field">
                    <FontAwesomeIcon icon={faMoneyBillAlt} className="field-icon" />
                    <span>Fiyat: {typeof event.price === 'string' ? event.price : `$${event.price}`}</span>
                  </div>
                )}
              </div>
              <Link to="/purchase">
              <button className="btn-primary">Bilet Satın Al</button>
              </Link>
            </div>
            <div className="detaylar">
              <h2 className='info-title detay'>Etkinlik Detayları</h2>
              <hr />
              {event.description.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="sağ-kolon">
            <img className="sağ-kolon-img" src={event.images} alt="Detay Resmi" />
            <Iframe url={event.iframeSrc} width="100%" height="400px" className='harita' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPage;
