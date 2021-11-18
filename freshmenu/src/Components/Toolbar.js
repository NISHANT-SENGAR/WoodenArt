import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default class Toolbar extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">FreshMenu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Deliver to:" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Location</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Location</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Locate me</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Search</Nav.Link>
                            <Nav.Link href="#link">Offers</Nav.Link>
                            <Nav.Link href="#link">Help Center</Nav.Link>
                            <Nav.Link href="#link">Sing up</Nav.Link>
                            <Nav.Link href="#link">Cart</Nav.Link>
                        </Nav>
                      
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        )
    }
}