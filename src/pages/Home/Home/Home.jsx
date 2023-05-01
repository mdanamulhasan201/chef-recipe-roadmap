import React from 'react';
import { Button} from 'react-bootstrap';
import ButtonToolBar from 'react-bootstrap/ButtonToolbar';
import './Home.css'

const Home = () => {
    return (

        < >
            <div className='bgImage'></div>
            <div className='content'>
                <h2 className='text-white fw-bold fs-1'>The Best <span className='text-danger fs-1'>Food</span></h2>
                <h2 className='fw-bold fs-4 text-white'>no matter how you cook, Recipe Roadmap has many the recipes.</h2>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab accusantium quos, blanditiis sed sequi officiis delectus! Labore officiis, </p>
                <button className='btn btn-danger'>Send Message</button>
            </div>
        </ >
    );
};

export default Home;