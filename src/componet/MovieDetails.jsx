import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"


const MovieDetails = () => {
    const params = useParams()
    const [movieDet, setMovieDet] = useState(null)
    const [comments, setComments] = useState([])
    const [arraylength,setArrayLength] = useState()
    

    const getDetailsMovie = async () => {

        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=36b7ca33&i=${params.id}`)
            if (response.ok) {
                let data = await response.json()
               
                setMovieDet(data)
            } else {
                console.log("errore fetch")
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        
        getDetailsMovie()
    }, [])
    


    const getComments = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c"
                }

            })
            if (response.ok) {
                let data = await response.json()
                
                setComments(data)
                setArrayLength(data.length)
                
            } else {
                console.log("errore fetch")
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getComments()

    },[])
    useEffect(() => {
        getComments()

    },[arraylength])
    return movieDet ? (
        <Container fluid>
            <Row>
        <Col md={6}>
        <Card  className="text-light w-75 my-5 mx-auto" bg="dark">
            <Card.Img variant="top" src={movieDet.Poster} className="w-75 my-5 mx-auto" />
            <Card.Body>
                <Card.Title>
                    {movieDet.Title} ({movieDet.Year})
                </Card.Title>
                <Card.Text>
                    <i className="my-3">{movieDet.Plot}</i>
                    <br />
                    <b>Genre:</b> {movieDet.Genre}
                    <br />
                    <b>Languages:</b> {movieDet.Language}
                    <br />
                    <b>Runtime:</b> {movieDet.Runtime}
                    <br />
                    <b>Actors:</b> {movieDet.Actors}
                    <br />
                    <b>Awards:</b> {movieDet.Awards}
                    Comments:
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <CommentArea  comments={comments} arraylength={arraylength} setArrayLength={setArrayLength} elementId={params} />
        </Row>
        </Container>
    ) :(

        <h1>not found</h1>
    )






}
export default MovieDetails