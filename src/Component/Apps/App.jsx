import React from 'react';
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';
import AllAppsData from './AllAppsData';
const App = () => {
    const allApp = useLoaderData();

    // console.log(allApp)
    return (
        <div className='p-20'>
            <h1 className='font-bold text-center text-5xl'>Our All Applications</h1>
            <p className='font-normal text-2xl text-gray-500 text-center mt-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex-1 md:flex justify-between'>
                <p>({allApp.length})Apps found</p>
                <span className='flex border-2 border-gray-500'>
                    <Search></Search><input type="search" name="" id="" placeholder='search Apps' />
                </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-6'>
                {allApp.map(allData =>
                    <AllAppsData key={allData.id} allData={allData}></AllAppsData>
                )}
            </div>

        </div>
    );
};

export default App;