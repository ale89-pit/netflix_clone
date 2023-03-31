import { Component } from "react";
import { Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";


class NavBarNet extends Component {
  render() {
    return (
      <>
 <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src="./assets/img/netflix_logo.png" id="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Tv Movie</Nav.Link>
            <Nav.Link href="#pricing">Recently</Nav.Link>
            <Nav.Link href="#pricing">Added</Nav.Link>
            <Nav.Link href="#pricing">MyList</Nav.Link>
          </Nav>
          <Nav>

          <Nav.Link href="#deets"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img className="imgKids" src="./assets/img/kids_icon.png"/>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
            </Nav.Link>
            <NavDropdown bg="dark" title="User" id="collasible-nav-dropdown">
            <img className="imgKids" src="./assets/img/avatar.png" />
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </>

    )
  }
}

export default NavBarNet