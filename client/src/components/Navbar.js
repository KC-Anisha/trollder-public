import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/nav.css'
import logo from '../images/logo.png';

function MyNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
      <Navbar.Brand href="#home" className='logo-title'>
            <img
              alt="Trollder Logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Trollder
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-title'>Download</Nav.Link>
            <Nav.Link href="#link" className='nav-title'>Learn</Nav.Link>
          </Nav>
          <button className='login-button'>Log In</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;