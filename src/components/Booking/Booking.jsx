import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm/CheckOutForm';

const stripePromise = loadStripe('pk_test_51Jw5T5E4flQuO7rVYCzIlSbOteN1iRb2yuOo8FufKEqb2gqyR2kB7nQBqynjdw7ijRUgNEybPxFyK1ibm8C0B6Zk00O9W9ifGv');
const Booking = () => {
    const [serviceDetails, setserviceDetails] = useState([]);
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://hero-rider-server.vercel.app/selectedservice/${serviceId}`)
            .then(res => res.json())
            .then(data => setserviceDetails(data));
    }, [serviceId])

    return (
        <div>
            <div className="container ">
                <div className="right-order-form text-center">
                    {
                        <div className="d-flex align-items-center justify-content-center my-4 booking-card">
                            <div className="service-icon">
                                <i className={serviceDetails?.img}></i>
                            </div>
                            <div className="service-details text-start">
                                <h1>{serviceDetails.title}</h1>
                                <h5>Price: {serviceDetails.price}$</h5>

                            </div>
                        </div>
                    }
                    {serviceDetails.price && <Elements stripe={stripePromise}>
                        <CheckOutForm
                            serviceDetails={serviceDetails}
                        />
                    </Elements>}

                </div>

            </div>

        </div>
    );
};

export default Booking;