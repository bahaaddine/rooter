import React from 'react'
import {useState} from  "react"
import {Button,Modal,Form} from 'react-bootstrap'



function Add({addHandler}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [rating, setRating] = useState("");
    const [trailer, setTrailer] = useState("");

    const addMovie = () =>{
      addHandler({name,description,type,image,rating,trailer})
      handleClose()
    }

    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="text" placeholder="Movie Title" onInput={(eve)=>setName(eve.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" onInput={(eve)=>setDescription(eve.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Poster</Form.Label>
                    <Form.Control type="text" placeholder="PosterURL" onInput={(eve)=>setImage(eve.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating" onInput={(eve)=>setRating(eve.target.value)}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Type" onInput={(eve)=>setType(eve.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Trailer</Form.Label>
                    <Form.Control type="text" placeholder="Trailer" onInput={(eve)=>setTrailer(eve.target.value)} />
                </Form.Group>
            </Modal.Body>
          
         
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Add
