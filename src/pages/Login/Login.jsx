import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import './Login.css'
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import logo from '../../assets/logo.png';



const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

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

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })




    }

    return (
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
                            <img src="" alt="" />
                            <h4>Sign into your account</h4>
                            <Form onSubmit={handleLogin}>
                                <div className='form-row'>
                                    <div className='col-lg-7'>
                                        <input type="email" name='email' className='form-control my-3 p-2' placeholder='anamul@gmail.com' required />
                                    </div>
                                    <div className='col-lg-7'>
                                        <input type="password" name='password' className='form-control my-3 p-2' placeholder='******' required />
                                    </div>
                                </div>

                                <div className='form-row'>
                                    <div className='col-lg-7'>
                                        <button type='submit' className='btn1 border-0 mt-3 mb-4'>Login</button>
                                        <p className='text-danger'>{error}</p>
                                        <p className='text-success'>{success}</p>
                                    </div>

                                    <div >
                                        <Button onClick={handleGoogleSignIn} type='button' className='me-5 border-0 bg-black'><ImGoogle2 className='fs-3 text-white'></ImGoogle2>Login with Google</Button>
                                        <Button className='me-5  border-0 bg-black'><GoMarkGithub className='fs-3 text-white'></GoMarkGithub>Login with Google</Button>

                                    </div>

                                    <hr />
                                </div>
                                <Link to="/register" className='text-decoration-none'>Forget Password?</Link>
                                <p>Don't have an account? <Link to='/register' className='text-decoration-none'>Register here</Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default Login;