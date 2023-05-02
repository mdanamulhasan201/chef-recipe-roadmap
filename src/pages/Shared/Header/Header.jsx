import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='relative'>
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-danger fw-bold fs-2'>Recipe Roadmap</Link></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-6 fw-bold">
                        <NavLink to="/" className='me-2 text-decoration-none text-secondary'>Home</NavLink>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Blog</Link>
                        <Link to="/blog" className='me-2 text-decoration-none text-secondary'>Contact</Link>


                    </Nav>

                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                       
                     <Link to='/login'> <Button variant="danger">Login</Button></Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;