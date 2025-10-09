import React, { useEffect, useState } from 'react';
import ShowApps from './ShowApps';
import { Search } from 'lucide-react';
import { Link } from 'react-router';
import LoadingSpinner from '../../Loader/LoadingSpinner';


const AppsData = ({ homeApp }) => {
    // console.log(homeApp);
    const [search, setSearch] = useState('');
    const [filteredApps, setFilteredApps] = useState(homeApp);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const delay = setTimeout(() => {
            const result = homeApp.filter(appdata =>
                appdata.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredApps(result);
            setLoading(false);
        }, 400);

        return () => clearTimeout(delay);
    }, [search, homeApp]);

    return (
        <div className='p-1 md:p-20'>
            <h1 className='font-bold text-center text-5xl'>Trending Apps</h1>
            <p className='font-normal text-2xl text-gray-500 text-center mt-6'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
                <p className='text-gray-700 text-lg'> ({filteredApps.length}) Apps found</p>

                <div className='flex items-center border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3'>
                    <Search className='mx-2 text-gray-600' />
                    <input type='search' placeholder='Search App' value={search} onChange={e => setSearch(e.target.value)}
                        className='w-full p-2 outline-none text-gray-700'></input>
                </div>
            </div>

            {loading ? (
                <div className='flex justify-center mt-16'>
                    <LoadingSpinner></LoadingSpinner>
                </div>
            ) : filteredApps.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-6'>
                    {filteredApps.map(appsData => (
                        <ShowApps key={appsData.id} appsData={appsData}></ShowApps>
                    ))}
                </div>
            ) : (
                <h3 className='text-center text-red-500 text-3xl font-semibold mt-12'>No App Found</h3>
            )}


            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-6'>
                {homeApp.map(appsData =>
                    <ShowApps key={appsData.id} appsData={appsData}></ShowApps>
                )}
            </div> */}

            <span className='flex justify-center items-center mt-5'>
                <Link to='/app'>
                    <button className='btn btn-primary'>Show all</button>
                </Link>
            </span>

        </div>
    );
};

export default AppsData;