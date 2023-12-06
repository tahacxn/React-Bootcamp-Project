// EventCard.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function EventCard({ title, location, dateTime, imageSrc }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc}  />
      <Card.Body style={{ padding: '2rem' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div style={{ marginBottom: '10px' }}>
            <FaMapMarkerAlt style={{ marginRight: '5px' }} />
            Location: {location}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <FaClock style={{ marginRight: '5px' }} />
            Time: {dateTime}
          </div>
        </Card.Text>
        <div>
          <Link to="/purchase">
            <Button variant="danger" style={{ marginRight: '1rem' }}>Buy Ticket</Button>
          </Link>
          <Link to="/detail">
            <Button variant="outline-danger">Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
