import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.jpg'
import "../styles/NavBar.css"

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "transparent", zIndex: 1000, position: "relative", padding:"0 3.5rem" }}>
      <Container fluid>
          <Image src={logo} style={{width:"120px", height:"120px"}}></Image>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-link' href="/" style={{margin:"0 1rem", fontWeight:"700"}}>Home</Nav.Link>
            <Nav.Link className='nav-link' href="/events" style={{fontWeight:"700"}}>Events</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;