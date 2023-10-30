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
        <Navbar.Brand href='#home'>
          <Link to='/'>
            <img src={LOGO} alt="logo like news" className="w-48 h-10 object-cover " />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-lg " navbarScroll>
              <Nav.Link href='#indonesia' as={Link} to="/indonesia">Indonesia</Nav.Link>
              <Nav.Link href='#programming' as={Link} to="/programming">Programming</Nav.Link>
              <Nav.Link href='#covid-19' as={Link} to="/covid">Covid-19</Nav.Link>
              <Nav.Link href='saved' as={Link} to="/saved">Saved</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchKeywords}>
            <Form.Control
              type="search"
              placeholder="Cari Berita Terbaru"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setKeywords(e.target.value)}
            />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
