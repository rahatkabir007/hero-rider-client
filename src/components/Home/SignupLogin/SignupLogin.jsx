import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignupLogin.css';
const SignupLogin = () => {
    return (
        <div id='signuplogin' className="my-4 py-5">
            <h1 className='mb-5'>Join Us</h1>
            <Container>
               
                <Row className='signup-login-section py-lg-3' id="signuplogin">
                    <Col xs={6} className='my-lg-3 signup'>
                        <Link id="rider" to="/riderSignup" >Sign Up As Rider</Link>
                    </Col>
                    <Col xs={6} className="my-lg-3 signup">
                        <Link to="/learnerSignup">Sign Up As Learner</Link>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default SignupLogin;