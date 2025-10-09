import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../Loader/LoadingSpinner';


const Root = () => {
    const navigation = useNavigation()
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            {navigation?.state === 'loading' ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (<Outlet></Outlet>)}
            <Footer></Footer>
        </div>
    );
};

export default Root;