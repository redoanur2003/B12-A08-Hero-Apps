import React from 'react';
import down from '../../../assets/icon-downloads.png'
import star from '../../../assets/icon-ratings.png'
import { Link } from 'react-router';

const ShowApps = ({ appsData }) => {
    // console.log(apps)
    const { image, title, id, downloads, ratingAvg } = appsData;
    return (
        <Link to={`/app/${id}`}>
            <div>
                <div className='p-1 md:p-4 w-auto h-auto bg-white rounded-xl shadow-xl'>
                    <img className='w-32 mx-6 sm:mx-0 bg-gray-500 sm:w-auto rounded-4xl' src={image} alt="" />
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
        </Link>
    );
};

export default ShowApps;