import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Cards() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1701158098302-46005140449f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" style={{overflow:"hidden"}} />
      <Card.Body style={{padding:'2rem'}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text >
          <div style={{ marginBottom: '10px' }}>
            <FaMapMarkerAlt style={{ marginRight: '5px' }} />
            Location: Your Location
          </div>
          <div style={{ marginBottom: '10px' }}>
            <FaClock style={{ marginRight: '5px' }} />
            Time: Event date - Time
          </div>
        </Card.Text>
        <div>
        <Link to="/purchase">
        <Button variant="danger" style={{ marginRight: '1rem' }}>Buy Ticket</Button>
        </Link>
        <Link to="detail">
        <Button variant="outline-danger" >Details</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;