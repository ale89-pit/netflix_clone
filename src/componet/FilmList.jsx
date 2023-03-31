import { Component } from "react";
import Galleria from "./Galleria";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel, CarouselItem } from "react-bootstrap";

class FilmList extends Component{
  state ={
    film : []
  }
  
render(){
return(

    
           
    <Col className="img-fluid m-1" key={this.props.film._id}>
    <img id="copertina"  src={this.props.film.Poster} />
   </Col>
      
                   
                      
     
               
    

)
                }
}

export default FilmList