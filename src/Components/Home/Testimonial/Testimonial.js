import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const Testimonial = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=8")
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, []);

    // console.log(images);

    return (

        <div>
            <Container fluid>
                <div style={{ marginLeft: '40px' }}>
                    <div style={{ textAlign: 'center', margin: '30px', color: 'rgb(28, 88, 88)' }}><h1>"Some of Our Happy Patients"</h1></div>
                    {images.map(image => <Users photo={image}></Users>)}
                </div>
            </Container>
        </div>

    );
};

const Users = (props) => {
    return (
        <div>
            <div id='testimonial-users'>
                <img src={props.photo.picture.medium} alt="" />
                <p>health care hospital is one the finest hospital of our area. They cares their patients so well. they deserve an warm welcome.</p>
            </div>
        </div>
    )
}

export default Testimonial;