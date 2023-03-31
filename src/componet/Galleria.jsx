import { Component } from "react";
import  Carousel from "react-multi-carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmList from "./FilmList";
import "react-multi-carousel/lib/styles.css";

class Galleria extends Component {
    state = {
        arrayFilm: []
    }
    responsive = {
        xl: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        lg: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        md: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        xs: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
    getAllFilm = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?s=${this.props.query}&apikey=36b7ca33`)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Search)
                this.setState({
                    arrayFilm: data.Search,

                })
            } else {
                console.log('Errore nella chiamata')
            }
        } catch (error) {

        }
    }
    componentDidMount() {
        console.log('Component did Mount')
        this.getAllFilm()


    }
    render() {
        return (
    <>
        <h2 className="text-light mt-2 mb-2 b mx-4">{this.props.name} saga:</h2>
        
        <Carousel className="mx-4" responsive={this.responsive} infinite={true}>
           
        {
                    this.state.arrayFilm.map((film)=><FilmList film={film}></FilmList>)
                
            }
            
        </Carousel>
        
    </>

        )
    }
}

export default Galleria