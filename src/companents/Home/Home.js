import React from 'react';
import Hero from "../page/Hero";
import House from "../page/House/House";
import Market from "../page/Market/Market";
import Cemetery from "../page/ Сemetery/Cemetery";
import Footer from "../page/Footer";

const Home = () => {
    return (
        <div>
            <Hero/>
            <House/>
            <Market/>
            <Cemetery/>
            <Footer/>
        </div>
    );
};

export default Home;