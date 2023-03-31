import { Component } from "react";
import { Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";

class Footer extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                <ListGroup>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
                </Col>
                </Row>
            </Container>
            )
    }
    
}