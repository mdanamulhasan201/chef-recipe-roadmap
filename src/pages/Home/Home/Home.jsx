import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { AiFillLike } from "react-icons/ai";
import Popular from '../Popular';
import ShareRecipies from '../../ShareRecipes/ShareRecipies';



const Home = () => {
    const [chefData, setChefData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => setChefData(data))
            

    }, [])
    console.log(chefData)
    return (

        <div>
            <div className='bgImage'></div>
            <div className='content'>
                <h2 className='text-white fw-bold fs-1'>The Best <span className='text-danger fs-1'>Food</span></h2>
                <h2 className='fw-bold fs-4 text-white'>no matter how you cook, Recipe Roadmap has many the recipes.</h2>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab accusantium quos, blanditiis sed sequi officiis delectus! Labore officiis, </p>
                <Link to="/contact" className='btn btn-danger'>Send Message</Link>
            </div>




            {/* card */}


            <div className='container'>
                <h2 className='text-center mt-5'>Chef Detail</h2>
                {
                    <div className="row mb-5">
                        {chefData[0]?.services?.map(service =>(
                            <div className='col-12 col-md-6 col-lg-4 g-4'>
                              
                                <Card >
                                    <Card.Img variant="top" src={service?.chef_picture} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold fs-3 text-danger'>{service?.chef_name}</Card.Title>

                                    </Card.Body>

                                    <ListGroup className="list-group-flush">

                                        <ListGroup.Item><p> Years of experience :{service?.years_of_experience}</p></ListGroup.Item>
                                        <ListGroup.Item><p>Numbers of recipes :{service?.number_of_recipes}</p></ListGroup.Item>

                                    </ListGroup>




                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex'>

                                                <AiFillLike className='fs-4'></AiFillLike>
                                                <p className=' ms-2'>{service?.likes}</p>
                                            </div>

                                            <Link to={`/chefdetails/${service?._id}`}><Button className='btn btn-danger' variant="primary">View Recipes</Button></Link>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </div>
                        ))}
                    </div>
                }

            </div>
            <ShareRecipies></ShareRecipies>
            <Popular></Popular>
        </div>
    );
};

export default Home;