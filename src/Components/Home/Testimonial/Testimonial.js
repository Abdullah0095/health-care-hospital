import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const Testimonial = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=9")
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, []);
    console.log(images)

    return (

        <div>
            <Container fluid>
                <div style={{ marginLeft: '40px' }}>
                    <div style={{ textAlign: 'center', margin: '30px', color: 'rgb(28, 88, 88)' }}><h1>"Our Happy Patients"</h1></div>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio inventore vero esse reprehenderit fuga quos pariatur minus eos a?</p>
            </div>
        </div>
    )
}

export default Testimonial;