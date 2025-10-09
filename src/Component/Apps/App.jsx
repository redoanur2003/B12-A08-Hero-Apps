import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';
import AllAppsData from './AllAppsData';
const App = () => {
    const allApp = useLoaderData();
    const [search, setSearch] = useState('');

    const filteredApps = allApp.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );


    // console.log(allApp)
    return (
        <div className='p-20'>
            <h1 className='font-bold text-center text-5xl'>Our All Applications</h1>
            <p className='font-normal text-2xl text-gray-500 text-center mt-6'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
                <p className='text-gray-700 text-lg'> ({filteredApps.length}) Apps found</p>

                <div className='flex items-center border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3'>
                    <Search className='mx-2 text-gray-600' />
                    <input type='search' placeholder='Search App' value={search} onChange={e => setSearch(e.target.value)}
                        className='w-full p-2 outline-none text-gray-700'></input>
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-6'>
                    {filteredApps.map(allData => (
                        <AllAppsData key={allData.id} allData={allData}></AllAppsData>
                    ))}
                </div>
            ) : (
                <h3 className='text-center text-red-500 text-3xl font-semibold mt-12'>No App Found</h3>
            )}

        </div>
    );
};

export default App;