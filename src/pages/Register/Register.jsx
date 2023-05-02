import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser} = useContext(AuthContext);

   
    const [error, setError] =useState('')
    const [success, setSuccess] = useState('')

    
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if(!/(?=.{6,})/.test(password)){
            setError('Please At least 6 char')
            return
        }

        console.log(name, email, photo, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                event.target.reset('');
                setSuccess('User has been create successfully')

            })
            .catch(error => {
                setError(error.message)
               
            })
            

    }
    // console.log(test())
    return (
        <div>
            <Container>
                <h3 className='text-center mt-5 mb-3'>Create a new account</h3>
                <Form className='mx-auto w-50 bg-light p-4 rounded' onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Photo URl</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter URL" required />
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
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                </Form>
               
            </Container>
        </div>
    );
};

export default Register;