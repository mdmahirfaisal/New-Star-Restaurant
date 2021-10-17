
import React from 'react';
import './Lunch.css';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Lunch = (props) => {
    const { name, img, price, id } = props.lunch;
    const history = useHistory();

    const handleClick = (useId) => {
        const url = `/booking/${useId}`;
        history.push(url);
    }
    return (

        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <Card style={{ cursor: "pointer" }} onClick={() => handleClick(id)} className="h-100 px-4 pt-2 border-0 lunch-card">
                <Card.Img variant="top img-fluid lunch-img px-5" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p className="text-secondary">How we dream about our future </p>
                    <h3 className="text-danger">$ {price}</h3>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Lunch;