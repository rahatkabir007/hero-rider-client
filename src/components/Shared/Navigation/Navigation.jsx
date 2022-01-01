import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Navigation = () => {
    const { user, admin, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-container">
                <Container>
                    <Navbar.Brand ><NavLink to='/home' style={{ color: 'white', fontSize: '30px', fontWeight: 'bold',textDecoration: 'none' }}>Hero Rider</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto right-side">
                            {
                                admin ? <div className="hidden-nav">
                                    <span style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }} id="username">Welcome, {user?.displayName}</span>
                                    <NavLink to='/adminPanel'>Admin Panel</NavLink>
                                    <NavLink onClick={logOut} to='/home'>Logout</NavLink>
                                </div>
                                    :
                                    user?.email ?
                                        <div className="hidden-nav">
                                            <span style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }} id="username">Welcome, {user?.displayName}</span>
                                            <NavLink onClick={logOut} to='/home'>Logout</NavLink>
                                        </div> :
                                        <>
                                            <NavLink to='/login' >
                                                Login
                                            </NavLink>
                                            <HashLink  to='/home#signuplogin'>
                                                Sign Up
                                            </HashLink>
                                        </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;