import React from 'react';

const Blog = () => {
    return (
        <div className='container mb-5 pb-5'>
            <h2 className='text-center mt-3 fw-bold'>Ques<span className='text-danger'>tions</span></h2>
            <div className='bg-light p-3  mt-5 pt-5'>
                <h3 className='text-center'>1. Tell us the differences between uncontrolled and controlled components</h3>
                <p className='p-3 fs-5'><span className='fw-bold fs-4'>Controlled components:</span> React is responsible for setting and managing the value of controlled components. They also have a tool that makes changes according to what the user does. A controlled component's value can be changed by its parent component because it is always given as a prop. <br />

                    <span className='fw-bold fs-4'>Uncontrolled components: </span> <span className=' fs-5'>Components that are uncontrolled take care of their own information inside themselves. They don't use React to control their condition or situation. Instead, they control and handle their own state using the DOM API. This means that if a component is not controlled, its state won't affect the state of its parent component.</span>
                </p>

                <h3 className='text-center'>2. How to validate React props using PropTypes</h3>
                <p className='p-3 fs-5'>
                    React PropTypes is a built-in library that provides a way to validate the properties that are passed to React components. PropTypes can help to catch errors in the early stages of development and can also serve as documentation for the expected type of each prop.

                    To use PropTypes, we need to import the library using import PropTypes from 'prop-types';. Then, we can add PropTypes to ours component by defining a propTypes object inside the component. The propTypes object should have a property for each prop that you want to validate, with the key being the prop name and the value being the validation function.
                </p>


                <h3 className='text-center'>3. Tell us the difference between nodejs and express js</h3>
                <p className='p-3 fs-5'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on the Google V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications. Node.js is commonly used to build server-side applications such as web servers, APIs, and microservices. It has a large and active community, with a vast ecosystem of modules and tools that make it easier to develop and deploy applications. <br /> <br />


                    Express.js is a tool used to create websites and other digital applications. It provides many useful things to make building websites easier. It works with Node.js. This thing called Express is made using Node.js and it helps people to make websites without having to use complicated codes. <br /> <br />
                    While Node.js provides the core functionality for building server-side applications, Express.js adds to it by providing additional features such as routing, middleware, templating engines, and more. It allows developers to quickly build web applications using a set of pre-built tools and components, which can save time and effort.
                </p>



                <h3 className='text-center'>4. What is a custom hook, and why will you create a custom hook?</h3>
                <span className='p-3 fs-5'>
                    In React, a custom hook is a special type of code that starts with the word "use" and is written in JavaScript. This helps you take out and use ideas that can be used in different parts in a quicker and better way. A custom hook makes it easy to reuse complex code in different parts of a program. This makes the code easier to read and maintain. <br /> <br />
                    <ol>
                        <li>
                            Reusability: Custom hooks allow you to extract reusable logic, making it easier to share and reuse functionality between components.
                        </li>
                        <li>
                            Abstraction: Custom hooks abstract away complex logic and provide an easy-to-use interface that can be used by other developers.
                        </li>
                        <li>
                            Separation of concerns: Custom hooks can help separate business logic from presentation logic, making code easier to understand and maintain.
                        </li>
                        <li>
                            Testing: Custom hooks can be easily tested in isolation, making it easier to write comprehensive tests for your application.
                        </li>
                    </ol>
                </span>

            </div>
        </div>
    );
};

export default Blog;