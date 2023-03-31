import logo from './logo.svg';
import './App.css';
import Navbar from './componet/NavBarNet'
import "bootstrap/dist/css/bootstrap.min.css"
import Galleria from './componet/Galleria';
import NavBarNet from './componet/NavBarNet';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      
       <NavBarNet /> 
       <Container fluid>
                <Row >
                    <Col>
                        <h1 className="m-2">Tv Show</h1>
                        <div className="dropdown geners">
                            <a
                                className="btn btn-dark dropdown-toggle border "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Geners
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark ">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Comici
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Triller
                                    </a>
                                </li>
                            </ul>
                        </div>
                   
                     </Col>
                </Row>
                
                <Row >
                    <Col >
                        <i className="bi bi-text-left" />
                        <i className="bi bi-display" />
                    </Col>
                </Row>
                
     <Galleria query="lord+of+the+ring" name="Lord of the Ring"/>
     <Galleria query="harry+potter" name="Harry Potter"/>
     <Galleria query="star+wars" name="Star Wars"/>
            </Container>
    </div>
  );
}

export default App;
