import { Component } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmList from "./FilmList";


class Galleria extends Component {
    state = {
        arrayFilm: []
    }
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
        return (<>

            <Row>
                    <Col>
                        <h3>{this.props.name}</h3>
                    </Col>
            
                </Row>
                <Row>
                {
                    this.state.arrayFilm.map((film)=><FilmList film={film}></FilmList>)
                
            }
                </Row>
           
            
        </>
        )
    }
}

export default Galleria