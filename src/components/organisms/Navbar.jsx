import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../../assets/img/logo-black.png';

function Navbars() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      data-bs-theme="transparent"
      variant="light"
      className="bg-body-tertiary nav"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} alt="logo like news" className="w-48 h-10 object-cover " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-lg "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Indonesia</Nav.Link>
            <Nav.Link href="#action2">Programming</Nav.Link>
            <Nav.Link href="#action3">Covid-19</Nav.Link>
            <Nav.Link href="#action3">Saved</Nav.Link>
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
