import React from 'react';


import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    // const { test } = useContext(AuthContext)
    // console.log(test())
    return (
        <div>
            <Container>
                <h3 className='text-center'>Please Login</h3>
                <Form className='mx-auto w-50'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="email" name='photo' placeholder="Enter photo URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                    <div>
                        <Form.Text className="text-secondary">
                            Already Have an account?  <Link to="/login">Login</Link>
                        </Form.Text>
                    </div>


                    <Form.Text className="text-danger">

                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;