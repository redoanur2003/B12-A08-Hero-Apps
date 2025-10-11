import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../Storage/storeData';
import ShowInstallApp from './ShowInstallApp';
import { NavLink } from 'react-router';

const Installation = () => {
    const [installed, setInstalled] = useState([]);
    const [sort, setSort] = useState('');
    const data = useLoaderData();
    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredAppId = storedAppData.map(id => parseInt(id))
        const installedApp = data.filter(app => ConvertedStoredAppId.includes(app.id));
        setInstalled(installedApp)
    }, [])

    const handleSort = (type) => {
        // console.log("Sorting")

        if (type === "High") {
            type = 'High to Low'
            setSort(type);
            const sortedByHigh = [...installed].sort((a, b) => b.size - a.size);
            setInstalled(sortedByHigh);
            // console.log(sortedByHigh)
        }
        if (type === "Low") {
            type = 'Low to High'
            setSort(type);
            const sortedByLow = [...installed].sort((a, b) => a.size - b.size);
            setInstalled(sortedByLow);
        }
    }


    // console.log(installed)
    return (
        <div>
            <h1 className='font-bold text-center text-5xl'>Your Installed Apps</h1>
            <p className='font-normal text-2xl text-gray-500 text-center mt-6'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex flex-row justify-between items-center mt-8 gap-4'>
                <p className='text-gray-700 text-lg'> ({installed.length}) Apps found</p>

                <details className="dropdown bg-white">
                    <summary className="btn m-1 bg-white text-black">sort by : {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("High")}>High to Low</a></li>
                        <li><a onClick={() => handleSort("Low")}>Low to High</a></li>
                    </ul>
                </details>
            </div>

            <div>
                <ShowInstallApp setInstalled={setInstalled} data={installed}></ShowInstallApp>
            </div>
        </div>
    );
};

export default Installation;