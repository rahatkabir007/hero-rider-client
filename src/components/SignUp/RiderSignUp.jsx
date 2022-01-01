import React from 'react';
import { useForm } from "react-hook-form";
import './SignUp.css';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../images/signup.jpg';

const RiderSignUp = () => {
    const { signUpUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.role = 'rider';
        signUpUser(data.email, data.password, data.name, data, navigate)
        reset();
    };

    return (
        <>
            <div className='signup-section d-lg-flex justify-content-center align-items-center'>
                <div className="left-signup">
                    <img src={signup} alt="" />
                </div>
                <div className="right-signup">
                    <h1>Please Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-area'>
                        <input type="text" placeholder='Full Name' {...register("name", { required: true })}
                        />
                        {errors.name?.type === 'required' && "Full name is required"}
                        <input type="text" placeholder='Email'{...register("email", { required: true })}
                        />
                        <input type="number" placeholder='Age'{...register("age", { required: true })}
                        />
                        <input type="text" placeholder='Address'{...register("address", { required: true })}
                        />
                        <input type="tel" placeholder='Phone Number'{...register("phone", { required: true })}
                        />
                        <input type="text" placeholder='Driving License Picture URL'{...register("drivingLicense", { required: true })}
                        />
                        <input type="text" placeholder='Area'{...register("area", { required: true })}
                        />
                        <input type="text" placeholder='Nid Pic Url'{...register("nid", { required: true })}
                        />
                        <input type="text" placeholder='Profile Picture url'{...register("profilePicture", { required: true })}
                        />
                        <input type="text" placeholder='Car Information'{...register("carInfo", { required: true })}
                        />
                        <input type="password" placeholder='Password' {...register("password", { required: true })}
                        />
                        <input type="password" placeholder='Confirm Password' {...register("password2", { required: true })}
                        />
                        <div className="d-flex flex-column">
                            <select id="select" style={{ width: "100%" }} {...register("vehicleType", { required: true })}>
                                <option value="car">Car</option>
                                <option value="bike">Bike</option>
                            </select>
                            <input id="register" type="submit" style={{
                                width: "100%", color: "white",
                                outline: 'none',
                                border: 'none',
                                backgroundColor: "black",
                                fontWeight: "600",
                                padding: '1rem 2rem',
                                fontSize: "20px"
                            }} value="Register" />
                            
                        </div>
                        
                    </form>
                    <div> 
                        <h5>Already an User? <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></h5>
                    </div>
                   
                </div>

            </div>
        </>
    );
};

export default RiderSignUp;