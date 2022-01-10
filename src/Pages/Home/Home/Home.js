import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import breakfastData from '../../fakeData/breakfast';
import lunchData from '../../fakeData/lunch';
import dinnerData from '../../fakeData/dinner';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import FoodMan from '../FoodMan/FoodMan';
import Resurve from '../Resurve/Resurve';
import './Home.css';
import Contact from '../Contact/Contact';


const Home = () => {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleBreakfast = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'block';
        lunch.style.display = 'none';
        dinner.style.display = 'none';
    }
    const handleLunch = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'none';
        lunch.style.display = 'block';
        dinner.style.display = 'none';
    }
    const handleDinner = () => {
        const breakfast = document.getElementById('breakfast-show');
        const lunch = document.getElementById('lunch-show');
        const dinner = document.getElementById('dinner-show');
        breakfast.style.display = 'none';
        lunch.style.display = 'none';
        dinner.style.display = 'block';
    }

    ////////////
    return (
        <div id="home">
            <Banner></Banner>
            <div id="foods">
                <div className="my-4 text-center">
                    <Tabs className="border-top w-50 mx-auto "
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                    >
                        <Tab onClick={handleBreakfast} label="Breakfast" />
                        <Tab onClick={handleLunch} label="Lunch" />
                        <Tab onClick={handleDinner} label="Dinner" />
                    </Tabs>
                </div>
                {/* Break fast show  */}

                <div id="breakfast-show" className="breakfast mb-3 container">
                    <div className=" row">
                        {
                            breakfastData.map(breakfast => <Breakfast key={breakfast.key} breakfast={breakfast}></Breakfast>)
                        }
                    </div>
                </div>

                {/* Lunch show  */}

                <div id="lunch-show" className="lunch container">
                    <div className="row">
                        {
                            lunchData.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
                        }
                    </div>
                </div>

                {/* Dinner show  */}
                <div id="dinner-show" className="dinner container">
                    <div className="row">
                        {
                            dinnerData.map(dinner => <Dinner key={dinner.key} dinner={dinner}></Dinner>)
                        }
                    </div>
                </div>
                <button type="button" className="btn btn-lg btn-secondary my-3" disabled>Check out your food</button>

            </div>
            {/* resurve table  */}

            <div id="booking">
                <Resurve></Resurve>
            </div>

            {/* delivery show  */}
            <div id="delivery">
                <FoodMan></FoodMan>
            </div>

            {/* contact show  */}
            <div id="delivery">
                <Contact></Contact>
            </div>


        </div>
    );
};

export default Home;