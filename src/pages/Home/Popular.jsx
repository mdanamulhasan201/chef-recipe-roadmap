import React from 'react';
import { Badge, Card, CardGroup } from 'react-bootstrap';

const Popular = () => {
    return (
        <div className='container'>
            <h2 className='text-center fw-bold mb-5 pt-5'>Popular <span className='text-danger'>Recipes</span></h2>
            <CardGroup className='gap-4 mb-5 '>
                <Card className='styles'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-danger tw-bold'>MAIN DISHES</h6>
                            <h5> <Badge bg="secondary bg-danger">New</Badge>
      </h5>
                        </div>
                        <Card.Title>Quick Chicken Piccata</Card.Title>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


                <Card className='styles'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2015191/pexels-photo-2015191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Card.Body>
                        <h6 className='text-danger tw-bold'>MAIN DISHES</h6>

                        <Card.Title>Kung Pao Chicken</Card.Title>
                        <Card.Text>
                            abitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


                <Card className='styles'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Card.Body>
                    <div className='d-flex justify-content-between'>
                            <h6 className='text-danger tw-bold'>MAIN DISHES</h6>
                            <h5> <Badge bg="secondary bg-danger">New</Badge>
      </h5>
                        </div>
                        <Card.Title>Honey-Garlic Slow Cooker Chicken Thighs</Card.Title>
                        <Card.Text>
                            Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
              
            </CardGroup>
        </div>
    );
};

export default Popular;