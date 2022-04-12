import React, { useEffect, useState } from 'react';


const Testimonial = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=9")
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, []);
    console.log(images)

    return (
        <div style={{marginLeft: '40px'}}>
            {images.map(image => <Users photo={image}></Users>)}
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