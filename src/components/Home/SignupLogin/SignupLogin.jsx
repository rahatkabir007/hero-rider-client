import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignupLogin.css';
const SignupLogin = () => {
    return (
        <div id='signuplogin'>
            <Container>
                <Row className='signup-login-section py-lg-3' id="signuplogin">
                    <Col xs={6} className='my-lg-3'>
                        <Link id="rider" to="/riderSignup" >Sign Up As Rider</Link>
                    </Col>
                    <Col xs={6} className="my-lg-3">
                        <Link to="/learnerSignup">Sign Up As Learner</Link>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default SignupLogin;