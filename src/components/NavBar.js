import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix-by-baha</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>movies</Nav.Link>
      <Nav.Link href="#features">serice</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
