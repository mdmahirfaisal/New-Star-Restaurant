import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

import './Banner.css';


const Banner = () => {
    return (
        <div className=" homepage-bgimage">
            <div className="mb-5 container">
                <div className="" style={{ paddingTop: '300px' }}>
                    <h1 className="mb-3 text-start text-light"><Bounce bottom cascade duration={2000}>Best food waiting for your belly</Bounce></h1>
                    <p className=" text-start text-light"><Bounce bottom cascade duration={2000}>Looking for a Franchise in Houston? Become Your Own Boss & Own a  Burn Boot Camp in Boston. <br /> Become one of our 400+ franchise partners and create a lasting change in your community.<br /> Worldwide Territories. Allowing For Fluid Change. Multi-Unit ownership. Low Cost Investment.</Bounce></p>

                    <Roll right duration={2000}>
                        <InputGroup className="mt-5 w-50">
                            <FormControl className=""
                                placeholder="Search food items"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="" variant="danger">
                                Search
                            </Button>
                        </InputGroup>
                    </Roll>
                </div>
            </div>

        </div>
    );
};

export default Banner;