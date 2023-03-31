import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import Galleria from './componet/Galleria';
import NavBarNet from './componet/NavBarNet';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './componet/Footer';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <NavBarNet />
      <Container fluid>
        <Row >
          <Col>
            <h1 className="m-2">Tv Show</h1>
            <Nav>
            <NavDropdown title="User" id="collasible-nav-dropdown">
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
          </Col>
        </Row>

        <Row >
          <Col >
            <i className="bi bi-text-left" />
            <i className="bi bi-display" />
          </Col>
        </Row>

        <Galleria query="lord+of+the+ring" name="Lord of the Ring" />
        <Galleria query="harry+potter" name="Harry Potter" />
        <Galleria query="star+wars" name="Star Wars" />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
