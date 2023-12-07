import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/NavBar.css"

function NavBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "transparent", zIndex: 1000, position: "relative", padding:"1rem 3.5rem" }}>
      <Container fluid>
      <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "48px", color: "#fff", marginRight: "10px" }} />
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>EventFinder</span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-link' href="/" style={{margin:"0 1rem", fontWeight:"700"}}>Ana Sayfa</Nav.Link>
            <Nav.Link className='nav-link' href="/events" style={{fontWeight:"700"}}>Tüm Etkinlikler</Nav.Link>

          </Nav>
          <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Ara"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-light">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;