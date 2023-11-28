// CustomNavbar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './navbar.css';
function CustomNavbar() {
  return (
    <>
      {/* Navbar con fondo dark */}
      <NavbarBootstrap bg="dark" variant="dark">
        <Container>
          <NavbarBootstrap.Brand href="#home">juan toledo peluquero</NavbarBootstrap.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="text-warning">Inicio</Nav.Link>
            {/* Agrega más enlaces de navegación según sea necesario */}
          </Nav>
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
              <h5 className="mb-4">clasicos, modernos y personalizados</h5>
              
            </Carousel.Caption>
          </Carousel.Item>

          {/* Segunda imagen */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/image/1.jpg"
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
              <h1 className="mb-3">Título de tu tercera imagen</h1>
              <h5 className="mb-4">Descripción de la tercera imagen</h5>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CustomNavbar;
