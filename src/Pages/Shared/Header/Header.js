import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from './img/restaurant.png';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isSticky, setSticky] = useState(false);

    /////////////////////
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setSticky(true)
        }
        else {
            setSticky(false);
        };
    });
    return (
        <>
            {/* <Navbar className="sticky-top bg-colors" expand="lg"> */}
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={isSticky ? "shadow-sm bg-light py-2" : "py-2"}>
                <Container className="container" fluid>
                    <Navbar.Brand as={HashLink} to="/home#home"><img className="logo" src="https://i.ibb.co/1GYGxjN/restaurant-logo-removebg-preview.png" alt="Brand logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ms-3"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className={isSticky ? " text-dark fs-5" : "text-white fs-5"} as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className={isSticky ? " text-dark fs-5" : "text-white fs-5"} as={HashLink} to="/home#foods">Foods</Nav.Link>
                            <Nav.Link className={isSticky ? " text-dark fs-5" : "text-white fs-5"} as={HashLink} to="/home#booking">Booking</Nav.Link>
                            <Nav.Link className={isSticky ? " text-dark fs-5" : "text-white fs-5"} as={HashLink} to="/home#delivery">Delivery</Nav.Link>
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <Nav.Link className={isSticky ? " text-dark fs-5 me-3" : "text-white fs-5 me-3"} as={HashLink} to="/addtocart"><i className="fas fa-cart-plus "></i></Nav.Link>

                            {user?.email ?
                                <Link onClick={logOut} className={isSticky ? "text-dark fs-5 text-decoration-none" : "text-white fs-5 text-decoration-none"}><i className="fas fa-sign-out-alt"></i></Link>
                                :
                                <Link to="/login" className={isSticky ? "text-dark fs-5 text-decoration-none" : "text-white fs-5 text-decoration-none"}>Sign up</Link>
                            }

                            {user.email &&
                                <Link className={isSticky ? "text-dark text-decoration-none fs-5 ms-4" : " text-light text-decoration-none fs-5 ms-4"}> {user?.displayName || user?.email}</Link>
                            }

                        </Nav>
                        <Navbar.Text className="ms-2 ">
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;