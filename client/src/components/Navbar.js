import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/nav.css'
import logo from '../images/logo.png';

function MyNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
      <Navbar.Brand href="/" className='logo-title'>
            <img
              alt="Trollder Logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Trollder
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="download" className='nav-title'>Download</Nav.Link>
            <Nav.Link href="learn" className='nav-title'>Learn</Nav.Link>
          </Nav>
          {/* <button className='login-button'>Log In</button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;