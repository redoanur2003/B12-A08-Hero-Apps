import React from 'react';
import Banner from './Banner/Banner';
import AppsData from './AppData/AppsData';
import { useLoaderData } from 'react-router';

const Home = () => {
    const homeApp = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AppsData homeApp={homeApp}></AppsData>
        </div>
    );
};

export default Home;