import React from 'react';
import './Footer.css'
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <img style={{ width: "100px" }} src={logo} alt="" />
                        <p className='text-secondary'>Tincidunt neque pretium lectus donec risus. <br></br> Mauris mi tempor nunc orc leo consequat vitae <br></br> erat gravida lobortis nec et sagittis.</p>
                        <button className='btn btn-danger '>Subscribe</button>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase fw-bold fs-4"> Categories</h5>







                        <hr />
                        <div className='Hover'>
                            <ul className="list-unstyled">
                                <li><Link to='/' className='text-decoration-none text-secondary'>Breakfast Recipes</Link></li>
                                <li><Link to='/' className='text-decoration-none text-secondary'>Lunch Recipes</Link></li>
                                <li><Link to='/' className='text-decoration-none text-secondary'>Dinner Recipes</Link></li>
                                <li><Link to='/' className='text-decoration-none text-secondary'>Appetizer & Snack</Link></li>
                                <li><Link to='/' className='text-decoration-none text-secondary'>Kitchen Tips</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase fw-bold fs-4">Contact <span className='text-danger'>Info</span></h5>
                        <hr></hr>
                        <ul className="list-unstyled">
                            <p className='text-secondary'>Address: Bangladesh, Dhaka 1220</p>
                            <p className='text-secondary'>Email example@info.com</p>
                            <p className='text-secondary'>Call:(+880)-213-666-0027</p>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3"> Copyright © 2023 Recipe roadmap, All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;