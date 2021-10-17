import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

import './Banner.css';


const Banner = () => {
    return (
        <div className=" homepage-bgimage py-5 mb-5">
            <div className="mb-5 container">
                <div className="mt-5">

                    <h1 className="mb-3 text-start text-white"><Bounce bottom cascade duration={2000}>Best food waiting for your belly</Bounce></h1>

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