import { Component } from "react";
import Galleria from "./Galleria";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const FilmList = (props) =>{

  const [film, setFilm] = useState([])

return(

    
           
    <Col className="img-fluid my-5">
   <Link to={"/movie-details/"+ props.film.imdbID}> <img id="copertina"  src={props.film.Poster} /></Link>
   </Col>
      
                   
                      
     
               
    

)
                
}

export default FilmList