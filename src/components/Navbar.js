import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default function CustomNavbar() {
    return (
        <Navbar expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="welcome mx-5">Pablo's Vehicles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="trade text-center">Home</Nav.Link>
            <Nav.Link href="/quiz" className="trade">Which vehicle is right for you?</Nav.Link>
            <Nav.Link href="/inventory" className="trade">Browse our Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

