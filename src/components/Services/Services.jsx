import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
import useAuth from '../hooks/useAuth';

const Services = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();
    const [learner, setLearner] = useState({});


    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (services.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    return (
        <div className="services-section py-3 my-2">
            <h1>Our Services</h1>
            <Container>
                <div className="services" >
                    {
                        services.map(service =>
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className={service.img}></i>
                                </div>
                                <div className="service-details">
                                    <h1>{service.title}</h1>
                                    <h5>Price: {service.price}$</h5>
                                    <Link to={`/selectedservice/${service?._id}`}><button className='booking-btn'>Book Now</button> </Link>
                                </div>
                            </div>
                        )
                    }

                </div>
            </Container>
        </div>
    );
};

export default Services;