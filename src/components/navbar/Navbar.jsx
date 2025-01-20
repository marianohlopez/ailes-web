import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import logo from '../../assets/AILES_LOGO.png'
import './navbar.css'
//import { Link } from "react-scroll";

const MyNavbar = () => {

  const [font, setFont] = useState(false)

  const whiteFont = () => font === false? setFont('fontHamburguer') : setFont(false);

  return (
    <>
      <Navbar variant="light" onToggle={whiteFont} className='navBar sticky-top' expand="lg">
          <Container fluid className={`px-0 ${font}`}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto me-4"/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="btnNavBar align-items-center d-flex justify-content-evenly w-100">
                      <Navbar.Brand href='#home'><img className="logo" src={logo} alt="Logo de empresa"/></Navbar.Brand>
                      <Nav.Link className='me-3 btnIndividual' href="#timeline">¿Quiénes somos?</Nav.Link>
                      <Nav.Link className='me-3 btnIndividual' href="#schoolAcomp">Acompañamiento escolar</Nav.Link>
                      <Nav.Link className='me-3 btnIndividual' href="#clinical">Área clínica</Nav.Link>
                      <Nav.Link className='me-3 btnIndividual' href="#contact">Contacto</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
