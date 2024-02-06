import React from "react"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './navbar.css'
const Navigation = () =>{
    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className = "nav-bar">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#qualification">Qualificaton</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}
export default Navigation;