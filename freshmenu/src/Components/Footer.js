import React, { Component } from "react";
import { Container,Form } from "react-bootstrap";
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <Container>

                    <div className="row">
                        <div className="col-sm-2">
                            COMPANY
                        </div>
                        <div className="col-sm-2">
                            HELP & CONTACT
                        </div>
                        <div className="col-sm-2">
                            MORE FROM US
                        </div>
                        <div className="col-sm-6">
                            Subscribe to our droolworthy newsletter
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-2">
                            FAQ
                        </div>
                        <div className="col-sm-2">
                            Help Center
                        </div>
                        <div className="col-sm-2">
                            Bulk/Party Order
                        </div>
                        <div className="col-sm-6">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            About
                        </div>
                        <div className="col-sm-2">
                            Email Us
                        </div>
                        <div className="col-sm-2">
                            Cake Order
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Careers
                        </div>
                        <div className="col-sm-2">
                            080-4042-4242
                        </div>
                        <div className="col-sm-2">
                            FreshClub
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Blog
                        </div>
                        <div className="col-sm-2">

                        </div>
                        <div className="col-sm-2">
                            Offers
                        </div>
                    </div>

                </Container>
                <hr />
                <Container className='bgColor'>
                <div className="row bgColor1">
                        <div className="col-sm-2">
                            CATAGORIES
                        </div>
                        <div className="col-sm-2">
                          CUISINES
                        </div>
                        <div className="col-sm-2">
                           
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Mains
                        </div>
                        <div className="col-sm-2">
                          Indian
                        </div>
                        <div className="col-sm-2">
                           Mexican
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Pizzas
                        </div>
                        <div className="col-sm-2">
                          Chinese
                        </div>
                        <div className="col-sm-2">
                           Thai
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Salads
                        </div>
                        <div className="col-sm-2">
                          Italian
                        </div>
                        <div className="col-sm-2">
                           Continental
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            Desserts
                        </div>
                        <div className="col-sm-2">
                          American
                        </div>
                        <div className="col-sm-2">
                           Mediteranean
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            Quickbites
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}