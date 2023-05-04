import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import logo from '../../assets/logo.png';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';



const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);



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
                setSuccess('User has been successfully login')

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
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Please At least 6 characters')
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


        // update profile
        userUpdate(name, photo)
            .then(() => {
                updateAuthData(name, photo);
                // Navigate to our destination
                navigate(from, { replace: true });
                setLoading(false);
                setIsNotChecked(true);
                event.target.reset();
            })
            .catch((error) => {
                // Navigate to our destination
                navigate(from, { replace: true });
                setLoading(false);
                setIsNotChecked(true);
                event.target.reset();
                console.log(error);
            });


    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
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
                                            <input type="password" name='password' className='form-control my-3 p-2' placeholder='Password' required />
                                        </div>
                                        <div className='col-lg-7'>
                                            <input type="password" name='confirm' className='form-control my-3 p-2' placeholder='Confirm password' required />
                                        </div>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check
                                                onClick={handleAccepted}
                                                type="checkbox"
                                                name='accept'
                                                label={<>Accept <Link to='/'>Terms and Condition</Link></>} />
                                        </Form.Group>
                                    </div>

                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                            <button type='submit'
                                                disabled={!accepted} className='btn btn-danger btn1 border-0 mt-2 mb-2'>Register</button>
                                            <p className='text-danger'>{error}</p>
                                            <p className='text-success'>{success}</p>
                                        </div>
                                        <div >
                                            <Card.Body>
                                                <Card.Link ><Button onClick={handleGoogleSignIn} type='button' className='m-2 border-0 bg-black '><ImGoogle2 className='fs-3 text-white'></ImGoogle2>Login with Google</Button></Card.Link>
                                                <Card.Link > <Button onClick={handleGithubSignIn} className=' m-2 border-0 bg-black'><GoMarkGithub className='fs-3 text-white'></GoMarkGithub>Login with GitHub</Button></Card.Link>
                                            </Card.Body>

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