import { Component } from "react";
import Galleria from "./Galleria";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class FilmList extends Component{
  state ={
    film : []
  }
  
render(){
return(
    <>
    
           
    <Col className="fit_content m-1 px-0" xs={12} md={6} lg={2} key={this.props.film._id}>
    <img id="copertina"  src={this.props.film.Poster} />
   </Col>
           
                   
                      
     </>
               
    

)
                }
}

export default FilmList