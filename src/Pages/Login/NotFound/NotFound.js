import React from 'react';
import { Link } from 'react-router-dom';
import image from './image/404-img.jpg';

const NotFound = () => {
    return (
        <div className="container">

            <img src={image} alt="" />
            <h2>Page Not found</h2>
            <Link to="/home"><button className="btn btn-danger mt-4">Back to home</button></Link>
        </div>
    );
};

export default NotFound;