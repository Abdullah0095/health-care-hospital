import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Services = () => {

    var serviceData = [
        {
            "key": 1,
            "name": "Anatomy and Physiology",
            "description": "",
            "image": "https://i.ibb.co/b1BmLVv/anaotmy.jpg"
        },
        {
            "key": 2,
            "name": "Forensic Medicine",
            "description": "",
            "image": "https://i.ibb.co/P138bmx/forensic.jpg"
        },
        {
            "key": 3,
            "name": "pathology and Microbiology",
            "description": "",
            "image": "https://i.ibb.co/Pg9ct5F/pathology.jpg"
        },
        {
            "key": 4,
            "name": "Gynecology and Surgery",
            "description": "",
            "image": "https://i.ibb.co/ch958Z3/gynecology.jpg"
        },
        {
            "key": 5,
            "name": "Heart Specialist",
            "description": "",
            "image": "https://i.ibb.co/pv4jv0H/heart-specialist.jpg"
        },
        {
            "key": 6,
            "name": "Child Specialist",
            "description": "",
            "image": "https://i.ibb.co/mcxVTxB/child-specialist.png"
        },
    ]

    return (
        <Container id='serviceCenter' fluid>
            <div style={{ marginTop: '70px' }}>
                <div><h1 style={{ textAlign: 'center', marginBottom: '30px' }}>We Provide</h1></div>
                <div>
                    {serviceData.map(services => <ServiceList  service={services} key={services.key} ></ServiceList>)}
                </div>
            </div>
        </Container>
    );
};

const ServiceList = (props) => {

    const { name, image } = props.service;

    return (
        <div style={{ marginLeft: '30px' }}>
            <Card id='cardStyle'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Services;