import React from 'react';
import { useForm } from "react-hook-form";
import '../SignUp/SignUp.css';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import login from '../../images/login.jpg';

const Login = () => {

    const { signInUser } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        signInUser(data.email, data.password, navigate)
        reset();
    }
    return (
        <>
            <div className='signup-section d-lg-flex justify-content-center align-items-center'>
                <div className="left-signup">
                    <img src={login} alt="" />
                </div>
                <div className="right-signup">
                    <h1>Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-area'>
                        <input type="text" placeholder='Email'{...register("email", { required: true })}
                        />
                        <input type="password" placeholder='Password' {...register("password", { required: true })}
                        />
                        <div className="d-flex flex-column">
                            <input id="register" type="submit" style={{
                                width: "100%", color: "white",
                                outline: 'none',
                                border: 'none',
                                backgroundColor: "black",
                                fontWeight: "600",
                                padding: '1rem 2rem',
                                fontSize: "20px"
                            }} value="Login" />

                        </div>

                    </form>
                    {/* <div>
                        <h5>Not an User? <Link to='/h' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></h5>
                    </div> */}

                </div>

            </div>
        </>
    );
};

export default Login;