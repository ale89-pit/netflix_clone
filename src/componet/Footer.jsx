import { Component } from "react";
import { Col, Container, } from "react-bootstrap";
import Row from 'react-bootstrap/Row'

class Footer extends Component{
    render(){
        return(
         <Container>  
            <Row>
            <Col>
              <i className="bi bi-facebook" />
              <i className="bi bi-instagram" />
              <i className="bi bi-twitter" />
              <i className="bi bi-youtube" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column ">
                <a href="javascript:void()">Audio and subtitle</a>
                <a href="javascript:void()">Media Center</a>
                <a href="javascript:void()">Privacy</a>
                <a href="javascript:void()">Contact us</a>
              </Col>
              <Col className="d-flex flex-column">
                <a href="javascript:void()">Audio description</a>
                <a href="javascript:void()">Investor relation</a>
                <a href="javascript:void()">Legal notice</a>
              </Col>
              <Col className="d-flex flex-column">
                <a href="javascript:void()">Help center</a>
                <a href="javascript:void()">Jobs</a>
                <a href="javascript:void()">Cookie preferences</a>
              </Col>
              <Col className="d-flex flex-column">
                <a href="javascript:void()">Gift cards</a>
                <a href="javascript:void()">terme of use</a>
                <a href="javascript:void()">Corporation information</a>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="btn btn-dark">Service Code</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>© 1997-2019 Netflix, inc.</p>
              </Col>
            </Row>
          
        </Container>  
            
            )
    }
    
}


export default Footer