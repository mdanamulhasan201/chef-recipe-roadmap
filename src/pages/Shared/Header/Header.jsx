import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import logo from '../../../assets/logo.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='relative'>
            <Container>
                <Navbar.Brand className='logo d-flex align-items-center'>
                    <img style={{width: "60px", height: "60px"}} src={logo} alt="" />
                    <Link className='text-decoration-none  text-black fw-bold fs-3'>Recipe <span className='text-danger'>Roadmap</span>
                </Link></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-6 fw-bold">
                        <Link to="/" className='me-2 text-decoration-none text-secondary'>Home</Link>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Blog</Link>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Contact</Link>


                    </Nav>

                    <Nav>
                        {user &&
                            <div className='d-flex align-items-center'>
                                <img className='rounded-circle  me-2' data-toggle="tooltip" data-placement="left" title={user?.displayName} style={{ width: '40px' }} src={user?.photoURL} alt="" />

                            </div>

                        }


                        {user ?
                            <Button onClick={handleLogOut} variant="danger">Logout</Button> :
                            <Link to='/login'> <Button variant="danger">Login</Button></Link>
                        }

                        {/* <Link className='ms-1' to='/register'><Button variant="outline-danger">Register</Button></Link> */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;