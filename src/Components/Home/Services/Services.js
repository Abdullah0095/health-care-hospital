import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Services = () => {

    var serviceData = [
        {
            "name": "Anatomy and Physiology",
            "description": "",
            "image": "https://i.ibb.co/b1BmLVv/anaotmy.jpg"
        },
        {
            "name": "Forensic Medicine",
            "description": "",
            "image": "https://i.ibb.co/P138bmx/forensic.jpg"
        },
        {
            "name": "pathology and Microbiology",
            "description": "",
            "image": "https://i.ibb.co/Pg9ct5F/pathology.jpg"
        },
        {
            "name": "Gynecology and Surgery",
            "description": "",
            "image": "https://i.ibb.co/ch958Z3/gynecology.jpg"
        },
        {
            "name": "Heart Specialist",
            "description": "",
            "image": "https://i.ibb.co/pv4jv0H/heart-specialist.jpg"
        },
        {
            "name": "Child Specialist",
            "description": "",
            "image": "https://i.ibb.co/mcxVTxB/child-specialist.png"
        },
    ]

    return (
        <div style={{ marginTop: '50px' }}>
            <div><h1 style={{ textAlign: 'center', marginBottom: '30px' }}>We Provide</h1></div>
            <div>
                {serviceData.map(services => <ServiceList service={services} ></ServiceList>)}
            </div>

        </div>
    );
};

const ServiceList = (props) => {

    const { name, image } = props.service;

    return (
        <div style={{marginLeft: '30px'}}>
            <Card id='cardStyle'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Services;