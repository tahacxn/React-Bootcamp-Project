import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Categories.css"

const Categories = () => {
  const events = [
    { id: 1, title: 'Müzik', image: 'https://www.ifperformance.com/477536afe934e2808fac.jpg' },
    { id: 2, title: 'Tiyatro', image: 'https://www.ifperformance.com/503ec283b727cae238ef.jpg' },
    { id: 3, title: 'Bale', image: 'https://www.ifperformance.com/8f315c9065c6b8565054.jpg' },
    { id: 4, title: 'Bootcamp', image: 'https://www.ifperformance.com/3a33749d2bb0e59ca3b5.jpg' },
  ];

  return (
    <div className="categories-wrapper">
      <hr />
        <h1 className="title">Nasıl Bir Etkinlik Arıyorsun ?</h1>
        <div className="categories-container">
        {events.map(event => (
            <div key={event.id} className="grid-item">
            <Link to="/events">
                <div className="image-container">
                <img src={event.image} alt={event.title} />
                <div className="caption">{event.title}</div>
                </div>
            </Link>
            </div>
        ))}
        </div>
        <Link to="/events">
        <button className="show-all-button">Tüm Etkinlikleri Gör</button>
      </Link>
      <hr />
    </div>
  );
};

export default Categories;
