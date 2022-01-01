import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const RiderProfile = () => {
    const { user } = useAuth();
    const [rider, setRider] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRider(data)
            })
    }, [])

    return (
        <div className="container text-center mb-5">
            <h1 className="text-uppercase my-3">Rider Profile</h1>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 shadow-lg rounded-3 p-5">
                    <img src={rider?.profileImg} alt="" width="150px" height="150px" className="mx-auto rounded-circle mb-3 shadow-lg" />
                    <div className="row">
                        <div className="col-md-3 ps-3">
                            <div className="text-start ps-3">
                                <h4>Name</h4>
                                <h4>Email</h4>
                                <h4>Phone</h4>
                                <h4>Address</h4>
                                <h4>Age</h4>
                                <h4>Vehicle</h4>
                                <h4>Vehicle Info</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="text-start">
                                <h4>: {rider?.name}</h4>
                                <h4>: {rider?.email}</h4>
                                <h4>: {rider?.phone}</h4>
                                <h4>: {rider?.address}</h4>
                                <h4>: {rider?.age} years</h4>
                                <h4>: {rider?.vehicle}</h4>
                                <h4>: {rider?.carInfo}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
            <Link to='/home'>
                <button className="btn btn-outline-dark mt-3">
                    Back to Home
                </button>
            </Link>
        </div >
    );
};

export default RiderProfile;