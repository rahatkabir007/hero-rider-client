import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booking.css';
const Booking = () => {

    const { user } = useAuth();
    const email = user?.email
    const [serviceDetails, setserviceDetails] = useState([]);
    const { serviceId } = useParams();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        console.log(data);
        axios.post('http://localhost:5000/bookNow', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Order Has Been Booked");
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/selectedservice/${serviceId}`)
            .then(res => res.json())
            .then(data => setserviceDetails(data));
    }, [serviceId])

    return (
        <div>
            <div className="container ">
                    <div className="right-order-form text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-50 mx-auto">
                            <input
                                {...register("name")}
                                value={user?.displayName}
                                className="p-2 m-2 w-100"
                            />
                            {
                                serviceDetails.title && <input
                                    {...register("title")}
                                    value={serviceDetails?.title}
                                    className="p-2 m-2 w-100"
                                />
                            }
                            {
                                serviceDetails.title && <input
                                    {...register("price")}
                                    value={serviceDetails?.price}
                                    className="p-2 m-2 w-100"
                                />
                            }
                            <input
                                {...register("date")}
                                defaultValue={new Date().toLocaleDateString()}
                                className="p-2 m-2 w-100"
                            />
                           
                            <input
                                {...register("address")}
                                placeholder="Please Type Your Address"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("phone", { required: true })}
                                placeholder="Please Type Your Phone Number"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input type="submit" value="Place Order" className="booknow-btn my-2" />
                        </form>
                    </div>
               
            </div>
           
        </div>
    );
};

export default Booking;