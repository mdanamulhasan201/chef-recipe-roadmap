import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { AiFillLike } from "react-icons/ai";
import Popular from '../Popular';
import ShareRecipies from '../../ShareRecipes/ShareRecipies';



const Home = () => {
    const [chefdata, setChefData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => setChefData(data))

           
    }, [])
   


    return (

        <div>
            <div className='header'>
                <div className='container'>
                    <div className='banner-text'>
                        <div className='text-area'>
                            <span>K</span>
                            <span>I</span>
                            <span>T</span>
                            <span>C</span>&nbsp;
                            <span>H</span>
                            <span>E</span>
                            <span>N</span>

                        </div>
                        <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates consequatur <br></br> laudantium repellat commodi, ea earum illo rerum ipsam repellendus?</p>

                        <Button className='banner-btn btn btn-danger'>
                            <Link to='/' className='text-decoration-none text-white fw-bold '>Subscribe</Link>
                        </Button>
                    </div>
                </div>
            </div>




            {/* card */}


            <div className='container'>
                <h2 className='text-center mt-5 mb-4'>Chef <span className='text-danger'>Detail</span></h2>
                {
                    <div className="row mb-5">
                        {chefdata.map(service => (
                            
                            <div className='col-12 col-md-6 col-lg-4 g-4' key={service.id}>

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

                                            <Link to={`/chefdetails/${service?.id}`}><Button className='btn btn-danger' variant="primary">View Recipes</Button></Link>


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