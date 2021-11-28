import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-bg' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SHAKIL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="#about">About</Nav.Link>
                            <Nav.Link className='nav-link' href="#project">Project</Nav.Link>
                            <Nav.Link className='nav-link' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;