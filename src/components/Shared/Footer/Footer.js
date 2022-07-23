import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div className="footer d-flex flex-column ">
            <div className="my-3">
                <h1>HERO RIDER</h1><hr/>
            </div>
            <div className="d-md-flex justify-content-around align-items-center second-section">
                <div className="list-items">
                    <ul>
                        <li> <NavLink to='/home'>Home</NavLink></li>
                        <li> <HashLink as to='/home#about'>
                            About Us
                        </HashLink></li>
                        <li> <HashLink as to='/home#signuplogin'>
                            Sign Up
                        </HashLink></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className="">Contact Us</li>
                        <li><i className="fas fa-phone"></i>  +88018942323324</li>
                        <li><i className="fas fa-envelope-open"></i>  herorider@gmail.com</li>
                        <li><i className="fas fa-address-card"></i> 19 No. Mothijil, Dhaka</li>
                    </ul>

                </div>
                <div className="subscribe">
                    <Form >
                        <FormControl
                            type="search"
                            placeholder="Subscribe"
                            className="mb-2"
                            aria-label="Search"
                        />
                        <Button className="primary-btn">Subscribe</Button>
                    </Form>
                </div>
                <div className="text-start payment">
                    <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" srcset="" />
                </div>
            </div><hr/>
            <div className="copyright-text" >
                <p>Copyright ©2021 All rights reserved | This Project is Done By Rahat</p>
            </div>
        </div>
    );
};

export default Footer;