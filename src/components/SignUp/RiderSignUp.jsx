import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './SignUp.css';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../images/signup.jpg';
import axios from 'axios';

const RiderSignUp = () => {
    const { signUpUser,authError } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [license, setLicense] = useState("");
    const [nid, setNid] = useState("");
    const [profile, setProfile] = useState("");

    const onSubmit = data => {
        if (data.password.length < 6) {
            setError(<h6 className="text-danger mt-3 text-center">Password must be at least 6 characters</h6>)
            return
        }
        else if (data.password !== data.password2) {
            setError(<h6 className="text-danger mt-3 text-center">Password does not match</h6>)
            return
        }
        else if (authError) {
            setError(<h6 className="text-danger mt-3 text-center">Email already in use</h6>)
        }
        else {
            setError('')
        }
        data.role = 'rider';
        data.drivingLicense = license;
        data.nid = nid;
        data.profilePicture = profile;
        signUpUser(data.email, data.password, data.name, data, navigate)
        reset();
    };

    const handleLicenseUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setLicense(res.data.data.display_url))
    }
    const handleNidUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setNid(res.data.data.display_url))
    }
    const handleProfileUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setProfile(res.data.data.display_url))
    }



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
                        <label className='mt-1' style={{fontSize: '20px',fontWeight: '600'}}>Driving License Picture</label>
                        <input placeholder='Driving License' type="file" {...register("drivingLicense", { required: true })} className="form-control mb-3"
                            onChange={handleLicenseUpload}
                        />
                        <input type="text" placeholder='Area'{...register("area", { required: true })}
                        />
                        <label className='mt-1' style={{ fontSize: '20px', fontWeight: '600' }}>NID Picture Picture</label>
                        <input type="file" {...register("nid", { required: true })} className="form-control mb-3" onChange={handleNidUpload} />

                        <label className='mt-1' style={{ fontSize: '20px', fontWeight: '600' }}>Profile Picture</label>
                        <input type="file" {...register("profilePicture", { required: true })} className="form-control mb-3" onChange={handleProfileUpload} />
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
                            {error}
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
                    <div className='mb-5'> 
                        <h5>Already an User? <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></h5>
                    </div>
                   
                </div>

            </div>
        </>
    );
};

export default RiderSignUp;