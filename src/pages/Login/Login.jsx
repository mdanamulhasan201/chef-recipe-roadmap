import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import './Login.css'
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import logo from '../../assets/logo.png';




const Login = () => {


    // const { user, updateProfileData, profileUpdate } = useContext(AuthContext);

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    // sign in with google

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {

        setSuccess('')
        setError('')

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                // toast.success("Logout Successfully!");
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // git hub login

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                navigate(from, { replace: true })
                setSuccess('User has been successfully login', loggedInUser)

            })
            .catch(error => {
                setError(error.message)
            })
    }



    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location ', location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })

    }


    return (
        <Container>


            <div className='form my-4 mx-5 mb-5 pb-5 mt-5'>
                <div className='container'>
                    <div className='row bg bg-light no-gutters'>
                        <div className='col-lg-5'>
                            <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid ' alt="" />
                        </div>

                        <div className='col-lg-7 px-5 pt-2'>
                            <div className='logo text-center'>
                                <img src={logo} alt="" />
                                <p className='fw-bold'>Recipe <span className='text-danger'>Roadmap</span></p>
                            </div>
                            <img src="" alt="" />
                            <h4 className='fw-bold'>Login your account</h4>
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
                                        <button  type='submit' className='btn1 border-0 mt-3 mb-4'>Login</button>
                                       

                                        <p className='text-danger'>{error}</p>
                                        <p className='text-success'>{success}</p>
                                    </div>

                                    <div >
                                        <Button onClick={handleGoogleSignIn} type='button' className='me-5 border-0 bg-black '><ImGoogle2 className='fs-3 text-white'></ImGoogle2>Login with Google</Button>

                                        <Button onClick={handleGithubSignIn} className='me-5  border-0 bg-black'><GoMarkGithub className='fs-3 text-white'></GoMarkGithub>Login with GitHub</Button>

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