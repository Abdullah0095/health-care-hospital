import React from "react";
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import image1 from '../../../image/hs1.jpg';
import image2 from '../../../image/hs2.jpg';
import image3 from '../../../image/hs3.jpg';
import image4 from '../../../image/hs4.jpg';
import image5 from '../../../image/hs5.jpg';
import image6 from '../../../image/hs6.jpg';




const Banner = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (


        <div>
            <Container className="mt-5 slider-design" fluid>
                <h3 style={{textAlign: 'center', color: 'rgb(32, 140, 148)'}}>"A century ago, we made a commitment. We’ve kept it."</h3>
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                    <div>
                        <img src={image5} alt="" />
                    </div>
                    <div>
                        <img src={image6} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>

    );
};

export default Banner;