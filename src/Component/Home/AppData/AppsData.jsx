import React from 'react';
import ShowApps from './ShowApps';
import { Search } from 'lucide-react';
import { Link } from 'react-router';

const AppsData = ({ homeApp }) => {
    // console.log(homeApp);
    return (
        <div className=' p-20'>
            <h1 className='font-bold text-center text-5xl'>Trending Apps</h1>
            <p className='font-normal text-2xl text-gray-500 text-center mt-6'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex-1 md:flex justify-between'>
                <p>({homeApp.length})Apps found</p>
                <span className='flex border-2 border-gray-500'>
                    <Search></Search><input type="search" name="" id="" placeholder='search Apps' />
                </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-6'>
                {homeApp.map(appsData =>
                    <ShowApps key={appsData.id} appsData={appsData}></ShowApps>
                )}
            </div>

            <span className='flex justify-center items-center mt-5'>
                <Link to='/app'>
                    <button className='btn btn-primary'>Show all</button>
                </Link>
            </span>

        </div>
    );
};

export default AppsData;