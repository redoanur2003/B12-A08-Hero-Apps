import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className='max-w-max mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;