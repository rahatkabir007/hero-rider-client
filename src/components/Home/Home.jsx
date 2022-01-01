import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import SignupLogin from './SignupLogin/SignupLogin';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs/>
            <SignupLogin/>
        </div>
    );
};

export default Home;