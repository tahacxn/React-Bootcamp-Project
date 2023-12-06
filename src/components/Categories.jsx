import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Categories.css"

const Categories = () => {
  const events = [
    { id: 1, title: 'Müzik', image: 'https://www.ifperformance.com/477536afe934e2808fac.jpg' },
    { id: 2, title: 'Tiyatro', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlYXRyZXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'Bale', image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsbGV0fGVufDB8fDB8fHww' },
    { id: 4, title: 'Bootcamp', image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdGNhbXB8ZW58MHx8MHx8fDA%3D' },
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
