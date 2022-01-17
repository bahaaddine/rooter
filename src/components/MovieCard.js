import React,{useState} from 'react'
import { Card,Button,Modal} from 'react-bootstrap'
import Rate from './Rate'
import {Link} from 'react-router-dom'
function MovieCard({movie,search} ) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
 

     if(movie.name.toLowerCase().includes(search.toLowerCase())){
       return(
        <div className="moviecard">
        <Card className="size" style={{ width: '450px' }}>
            <Card.Img className="img" variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title className="title">{movie.name} </Card.Title>
                <Card.Text className="description">{movie.description} </Card.Text>
                <Card.Text><h6>{movie.type}</h6> </Card.Text>
                <Card.Text><Rate rate={movie.rating} /> </Card.Text>
                <span>
               <Link to={`/details/${movie.id}`} > <Button variant="primary" onClick={handleShow}>
                select view
                </Button> 
                </Link>
                </span>
            </Card.Body>
        </Card>
    </div>
       )
     }else{
       return(
        <div className="moviecard">
        </div>
       )
     }
}

export default MovieCard