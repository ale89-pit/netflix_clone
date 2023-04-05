import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Galleria from "./Galleria"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap";

const Home = () =>{
    return(
        <>
        <Container fluid>
        <Row>
          <Col>
            <h1 className="m-2">Tv Show</h1>
            <Nav>
              <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SciFi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Triller</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col>
            <i className="bi bi-text-left" />
            <i className="bi bi-display" />
          </Col>
        </Row>

        <Galleria key="naruto" query="Naruto" name="Naruto" />
        <Galleria jey="hr"query="harry+potter" name="Harry Potter" />
        <Galleria ker="St"query="star+wars" name="Star Wars" />
      </Container>
      </>
    )
}

export default Home