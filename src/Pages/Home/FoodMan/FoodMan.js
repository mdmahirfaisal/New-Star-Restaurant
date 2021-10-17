import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './FoodMan.css';
import resImg from './img/detailed-chef-logo.png';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


const FoodMan = () => {
    return (
        <div className="container my-5 shadow">
            <h2 className="py-3">FAST DELIVERY</h2>
            <div className="row">
                <div className="col-sm-12 col-md-7 text-start p-5">
                    <h1 className="text-danger fw-bold"><Zoom>Why you choose us</Zoom> </h1>
                    <p><Bounce right cascade duration={1700}>Barton waite twenty always repair in within we do. An delighted offending <br />
                        curiosity my is dash woods at. Boy prosperous increasing surrounded.</Bounce></p>
                </div>
                <div className="col-sm-12 col-md-5">
                    <img className="img-fluid chef-logo" src={resImg} alt="" />
                </div>
            </div>

            <div className="row gx-3">
                <Card className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <Zoom duration={2000}>
                        <CardActionArea className="container-img">
                            <CardMedia>
                                <img className="img-fluid image" src="https://i.ibb.co/1TcK5jZ/adult-blur-blurred-background-687824.png" alt="Food focus" />
                                <div className="middle">
                                    <button className="btn btn-outline-light fw-bold text">Order now</button>
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Fast Delivery
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Zoom>
                </Card>


                <Card className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <Zoom duration={2000}>
                        <CardActionArea className="container-img">
                            <CardMedia>
                                <img className="img-fluid image" src=" https://i.ibb.co/vPjc1hx/chef-cook-food-33614.png" alt="Cooking" />
                                <div className="middle">
                                    <button className="btn btn-outline-light fw-bold text">Order now</button>
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Fast Delivery
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Zoom>
                </Card>


                <Card className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <Zoom duration={2000}>
                        <CardActionArea className="container-img">
                            <CardMedia>
                                <img className="img-fluid image" src="https://i.ibb.co/TcQSYxW/architecture-building-city-2047397.png" alt=" building" />
                                <div className="middle">
                                    <button className="btn btn-outline-light fw-bold text">Order now</button>
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Fast Delivery
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Zoom>
                </Card>
            </div>
        </div>
    );
};

export default FoodMan;