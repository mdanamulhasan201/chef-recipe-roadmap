import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";


const Chef = () => {
    const { id } = useParams()
    const [chefData, setChefData] = useState({})
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/chefData/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data.item))
    }, [])

    return (
        <div className='container px-5'>
            <h2 className='text-center mt-5 mb-3 fw-bold underline'>Chef <span className='text-danger'> Details </span></h2>
            <Card className='mb-5'>
                <Card.Img variant="top" src={chefData.chef_picture} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3 text-danger'>{chefData.chef_name}</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Card.Title className=' fs-6'>{chefData.chef_description}</Card.Title>
                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item><p> Years of experience : {chefData.years_of_experience}</p></ListGroup.Item>
                    <ListGroup.Item><p>Numbers of recipes : {chefData.number_of_recipes}</p></ListGroup.Item>

                </ListGroup>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>

                            <AiFillLike className='fs-4'></AiFillLike>
                            <p className=' ms-2'>{chefData.likes}</p>
                        </div>


                    </div>
                </Card.Body>
            </Card>



            {/* recipes */}

{/* 
            {
                chefData[0].map(recipe=>{
                    console.log(recipe)
                })
            } */}



        </div>
    );
};

export default Chef;