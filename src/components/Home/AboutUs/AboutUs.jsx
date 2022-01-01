import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../../images/about.png';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <Container>
            <div id="about" className='about-section d-lg-flex align-items-center justify-content-between my-4 py-5'>
                <div className="left-about">
                    <img src={about} alt="" />
                </div>
                <div className="right-about">
                    <h1>About Us</h1>
                    <p>Hero Rider gives you the power to get where you want to go with access to different types of rides across more than 10,000 cities.</p>
                </div>
            </div>
       </Container>
    );
};

export default AboutUs;