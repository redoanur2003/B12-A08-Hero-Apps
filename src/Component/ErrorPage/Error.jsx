import React from 'react';
import errorImage from '../../assets/error-404.png'
import './Error.css'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className=' md:ml-96 mt-20'>
                <img className='w-11/12 md:w-auto h-auto' src={errorImage} alt="This page are not found" />
            </div>
            <div className='w-11/12 text-center md:w-auto h-auto'>
                <h2 className='font-black text-2xl'>Oops, page not found!</h2>
                <p className='color'>The page you are looking for is not available.</p>
                <Link to='/'>
                    <button className='btn bg-purple-600'>Go back</button>
                </Link>

            </div>
        </div>
    );
};

export default Error;