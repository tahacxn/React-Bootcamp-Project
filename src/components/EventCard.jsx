// components/EventCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function EventCard({ id, title, location, dateTime, imageSrc }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} style={{ overflow: "hidden" }} />
      <Card.Body style={{ padding: '2rem' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div style={{ marginBottom: '10px' }}>
            <FaMapMarkerAlt style={{ marginRight: '5px' }} />
            Şehir: {location}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <FaClock style={{ marginRight: '5px' }} />
            Tarih: {dateTime}
          </div>
        </Card.Text>
        <div>
        <Link to="/purchase">
            <Button variant="danger" style={{ marginRight: '1rem' }}>Buy Ticket</Button>
          </Link>
          <Link to={`/detail/${id}`}>
            <Button variant="outline-danger">Detaylar</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
