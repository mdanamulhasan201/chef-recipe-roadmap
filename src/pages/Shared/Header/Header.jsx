import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaRegUserCircle } from "react-icons/fa";

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
                <Navbar.Brand><Link className='text-decoration-none text-danger fw-bold fs-2'>Recipe Roadmap</Link></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-6 fw-bold">
                        <Link to="/" className='me-2 text-decoration-none text-secondary'>Home</Link>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Blog</Link>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Contact</Link>


                    </Nav>

                    <Nav>
                        {user &&

                            <FaRegUserCircle className='fs-3'>
                            </FaRegUserCircle>

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