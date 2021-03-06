
import React from 'react';
import {Col, Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Container style={{ marginTop: '30px' }} fluid>
            <section>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}><h4><Link to="/">Healthcare <br /> Hospital and Clinic</Link></h4></Col>
                    <Col xs={12} sm={12} md={2} lg={2}><p><b><Link to="testimonial">TESTIMONIAL</Link></b></p></Col>
                    <Col xs={12} sm={12} md={2} lg={2}><p><b>Visit Us:</b> <br /> 22 Rhapsody Street, FL 344</p></Col>
                    <Col xs={12} sm={12} md={2} lg={2}><p><b>Call Us: </b><br /> (+1) 352-361-1779 </p></Col>
                    <Col xs={12} sm={12} md={2} lg={2}><p><b>Mail Us: </b><br />info@healthcarehospital.co.uk</p></Col>
                </Row>
            </section>
        </Container>



    );
};

export default Navbar;