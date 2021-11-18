import React, { Component } from "react";
import { Row, Container, Col, Nav,Form } from "react-bootstrap";


export default class Catagaory extends Component {
    render() {
        return (
            <>
                <Container className="bold">

                    <Row>
                        <Col>CATAGORIES</Col>
                        <Col md="auto">VEG</Col>
                        <Col md="auto">PRICE</Col>
                        <Col md="auto"> FILTERS</Col>

                    </Row>
                </Container>
                <hr />

                <Container>
                    <Row>
                        <Col>Sandwiches & More</Col>
                    </Row>
                    <Row>
                        <Col>Burgers & Wraps</Col>
                    </Row>
                    <Row>
                        <Col>Continental</Col>
                    </Row>
                    <Row>
                        <Col>Fit N Fab</Col>
                    </Row>
                    <Row>
                        <Col>Big Plates</Col>
                    </Row>
                    <Row>
                        <Col>Wok-Station</Col>
                    </Row>
                    <Row>
                        <Col>Biriyanis</Col>
                    </Row>
                    <Row>
                        <Col>Indian</Col>
                    </Row>
                    <Row>
                        <Col>Subscription plan</Col>
                    </Row>
                    <Row>
                        <Col>Sides & Beverages</Col>
                    </Row>
                    <Row>
                        <Col>Fresh Desserts</Col>
                    </Row>
                    <Row>
                        <Col>Accompaniments</Col>
                    </Row>


                </Container>
                <hr />
                

            </>
        )
    }
}