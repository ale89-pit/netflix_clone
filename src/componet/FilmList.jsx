

import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";


const FilmList = (props) =>{

  

return(

    
           
    <Col className="img-fluid my-5">
   <Link to={"/movie-details/"+ props.film.imdbID}> <img id="copertina" alt={props.film.title} src={props.film.Poster} /></Link>
   </Col>
      
                   
                      
     
               
    

)
                
}

export default FilmList