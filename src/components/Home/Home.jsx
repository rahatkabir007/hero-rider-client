import React from 'react';
import Services from '../Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import SignupLogin from './SignupLogin/SignupLogin';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <SignupLogin />
        </div>
    );
};

export default Home;