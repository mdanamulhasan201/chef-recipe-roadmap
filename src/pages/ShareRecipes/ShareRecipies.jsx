import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ShareRecipies = () => {
    return (
        <div className='form my-4 mx-5 mt-5 pt-5'>
            <div className='container'>
                <div className='row bg-light no-gutters'>
                    <div className='col-lg-7 px-5 pt-2'>
                        <div className='text-start '>
                            <p className='text-danger fw-bold mt-5'>JOIN US</p>
                            <h2 className='fs-1 fw-bold'>Let's start sharing <br></br> your awesome <br></br> recipes</h2>
                            <button className='btn btn-danger mt-3'>Join Now <FaArrowRight></FaArrowRight></button>
                        </div>

                    </div>

                    <div className='col-lg-5'>
                        <img src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/img_1.png" className='img-fluid ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareRecipies;