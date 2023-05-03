import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import logo from '../../assets/logo.png';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    // sign in with google 
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        setSuccess('')
        setError('')
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setSuccess('User has been successfully login')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // git hub login

    const handleGithubSignIn = () => {
        setSuccess('')
        setError('')
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('User has been successfully login', loggedInUser)

            })
            .catch(error => {
                setError(error.message)
            })
    }




    const handleRegister = event => {
        event.preventDefault();
        setSuccess('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (!/(?=.{6,})/.test(password)) {
            setError('Please At least 6 char')
            return
        }

        // console.log(name, email, photo, password)
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
                <div className='form my-4 mx-5 mt-5'>
                    <div className='container'>
                        <div className='row bg-light no-gutters'>
                            <div className='col-lg-5'>
                                <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid ' alt="" />
                            </div>

                            <div className='col-lg-7 px-5 pt-2'>
                                <div className='logo text-center'>
                                    <img src={logo} className='h-' alt="" />
                                    <p className='fw-bold'>Recipe <span className='text-danger'>Roadmap</span></p>
                                </div>
                                <h4>Create a new account</h4>
                                <Form onSubmit={handleRegister}>
                                    <div className='form-row'>


                                        <div className='col-lg-7'>
                                            <input type="text" name='name' className='form-control my-3 p-2' placeholder='Enter your name' required />
                                        </div>
                                        <div className='col-lg-7'>
                                            <input type="text" name='photo' className='form-control my-3 p-2' placeholder='Photo URL' required />
                                        </div>
                                        <div className='col-lg-7'>
                                            <input type="email" name='email' className='form-control my-3 p-2' placeholder='anamul@gmail.com' required />
                                        </div>



                                        <div className='col-lg-7'>
                                            <input type="password" name='password' className='form-control my-3 p-2' placeholder='******' required />
                                        </div>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />
                                        </Form.Group>
                                    </div>

                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                            <button type='submit' className='btn1 border-0 mt-2 mb-2'>Register</button>
                                            <p className='text-danger'>{error}</p>
                                            <p className='text-success'>{success}</p>
                                        </div>
                                        <div >
                                            <Button onClick={handleGoogleSignIn} type='button' className='me-5 border-0 bg-black'><ImGoogle2 className='fs-3 text-white'></ImGoogle2>Login with Google</Button>
                                            <Button onClick={handleGithubSignIn} className='me-5 border-0 bg-black'><GoMarkGithub className='fs-3 text-white'></GoMarkGithub>Login with GitHub</Button>

                                        </div>
                                        <hr />


                                    </div>
                                    <Link to="/register" className='text-decoration-none'>Forget Password?</Link>
                                    <p> Already Have an account?  <Link to='/login' className='text-decoration-none'>Login Here</Link></p>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>


            </Container >
        </div >
    );
};

export default Register;