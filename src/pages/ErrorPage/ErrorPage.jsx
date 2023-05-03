import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <span className='sr-only fs-1'>Error</span>
                                   <h1 className=' error fw-bold'> {status || 404}</h1>


                                </div>

                                <div className="contant_box_404">
                                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                                        {error?.message}
                                    </p>

                                    <Link to='/'><button className='btn btn-danger'>Back to Home</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;