import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../../assets/img/logo-black.png';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Navbar expand="lg" sticky='top'  variant='light' className="nav">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} alt="logo like news" className="w-48 h-10 object-cover " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-lg "navbarScroll>
            <Nav.Link><Link to='/'>Indonesia</Link></Nav.Link>
            <Nav.Link><Link to='/programming'>Programming</Link></Nav.Link>
            <Nav.Link><Link to='/covid'>Covid-19</Link></Nav.Link>
            <Nav.Link><Link to='/saved'>Saved</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
