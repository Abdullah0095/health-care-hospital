import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Services/>
            <Testimonial/>
            <News/>

        </div>
    );
};

export default Home;