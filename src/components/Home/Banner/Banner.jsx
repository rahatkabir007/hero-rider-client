import React from 'react';
import './Banner.css'
import { HashLink } from 'react-router-hash-link';
const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="banner-intro">
                <h1>Hero Rider</h1>
                <h4>Best Riding Service You Can Get</h4>
                <HashLink to="/home#signuplogin">Join Now</HashLink>
            </div>
        </div>
    );
};

export default Banner;