import React from 'react';
import down from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
const AllAppsData = ({ allData }) => {
    const { image, title, downloads, ratingAvg } = allData;
    return (
        <div>
            <div className=' p-4 w-auto h-auto bg-white rounded-xl shadow-xl'>
                <img className='bg-gray-500 rounded-4xl' src={image} alt="" />
                <p className='font-medium text-xl'>{title}</p>
                <div className='flex justify-between'>
                    <span className='flex gap-2'>
                        <img className='w-6 h-6' src={down} alt="" />
                        <p>{downloads}M</p>

                    </span>
                    <span className='flex gap-2'>
                        <img className='w-6 h-6' src={star} alt="" />
                        <p>{ratingAvg}M</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AllAppsData;