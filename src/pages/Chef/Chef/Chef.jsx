import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Added Favorite');

const Chef = () => {

    const { id } = useParams()
    const [chefData, setChefData] = useState({})
    // console.log(id)
    useEffect(() => {
        fetch(`https://chef-recipe-hunting-server-mdanamulhasan201.vercel.app/chefData/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data.item))
    }, [])




    // console.log(chefData.recipes)

    return (
        <div className='container px-5'>
            <div>
                <h2 className='text-center mt-5 mb-5 fw-bold '>Chef <span className='text-danger'> Details </span></h2>
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
            </div>


            <div className=''>
                <h2 className='text-center mt-5 fw-bold mb-4'>Recipe <span className='text-danger'>Details</span></h2>
                {
                    <div className="row mb-5">
                        {chefData.recipes && chefData.recipes.map(recipe => (

                            <div className='col-12 col-md-6 col-lg-4 g-4' key={recipe.id}>

                                <Card style={{ height: "650px" }} className='styles'>
                                    <Card.Img variant="top" style={{ height: "200px" }} src={recipe?.recipe_img} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold fs-3 text-danger'>{recipe?.recipe_name}</Card.Title>

                                    </Card.Body>

                                    <ListGroup className="list-group-flush">

                                        <ListGroup.Item>

                                            <p> <span className='fw-bold'>Ingredients:</span> {recipe?.Ingredients}
                                            </p>

                                            {/* <ol>
                                                <li>
                                                {recipe?.Ingredients}
                                                </li>
                                            </ol> */}
                                            
                                            </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p> <span className='fw-bold'>Cooking Method:</span> {recipe?.cooking_method.length < 250 ? <>{recipe?.cooking_method}</> : <>{recipe?.cooking_method.slice(0, 200)}...<Link><p>Read more</p></Link> </>}</p>
                                        </ListGroup.Item>

                                    </ListGroup>




                                    <Card.Body>
                                        <div className='d-flex justify-content-between '>
                                            <div className='d-flex'>

                                                <div><Rating
                                                    style={{ maxWidth: 160 }}
                                                    value={Math.round(recipe?.rating || 0)}
                                                    readOnly /></div>
                                                <div><p className='fs-5  ms-2'>{recipe?.rating}</p></div>
                                            </div>

                                            <div>
                                                <Link ><Button onClick={notify} className='btn btn-danger' variant="primary">Favorite <FaRegHeart></FaRegHeart></Button>  </Link>
                                                <Toaster position="top-right"
                                                    reverseOrder={false} />
                                            </div>



                                        </div>
                                    </Card.Body>
                                </Card>

                            </div>
                        ))}
                    </div>
                }



            </div>




        </div>
    );
};

export default Chef;