// CustomNavbar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/image/logo.png'; 
import './navbar.css';

function CustomNavbar() {
  return (
    <>
      {/* Navbar con fondo dark */}
      <NavbarBootstrap bg="dark" variant="dark" expand="lg">
        <Container>
          <NavbarBootstrap.Brand href="#home">
          <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            {' juan toledo peluquero'}            
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="navbar-nav" />
          <NavbarBootstrap.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio" className="text-warning">Inicio</Nav.Link>
              <Nav.Link href="#servicios" className="text-warning">Servicios</Nav.Link>
              <Nav.Link href="#fotos" className="text-warning">Fotos</Nav.Link>
              <Nav.Link href="#contacto" className="text-warning">Contacto</Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>

      {/* Carrusel con altura ajustada */}
      <div className="custom-carousel-container">
        <Carousel fade>
          {/* Primera imagen */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/image/3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="mb-3">Cortes para hombres</h1>
              <h5 className="mb-4">clásicos, modernos y personalizados</h5>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Segunda imagen */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/image/5.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="mb-3">Corte Femenino</h1>
              <h5 className="mb-4">personalizados y modernos</h5>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Tercera imagen */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/image/2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="mb-3">colorimetría</h1>
              <h5 className="mb-4">destaca con colores clásicos y modernos</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CustomNavbar;
