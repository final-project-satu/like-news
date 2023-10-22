import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../../assets/img/logo-black.png';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navbars() {
  const [keywords, setKeywords] = React.useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSearchKeywords = (e) => {
    e.preventDefault();
    if (!keywords) {
      window.location.href = currentPath;
    } else {
      window.location.href = `/search/${keywords}`;
    }
  };

  return (
    <Navbar expand="lg" sticky="top" variant="light" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} alt="logo like news" className="w-48 h-10 object-cover " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-lg " navbarScroll>
            <Nav.Link>
              <Link to="/indonesia">Indonesia</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/programming">Programming</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/covid">Covid-19</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/saved">Saved</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchKeywords}>
            <Form.Control
              type="search"
              placeholder="Cari Berita Terbaru"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setKeywords(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
