import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Services/>

        </div>
    );
};

export default Home;