import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import down from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import rev from '../../assets/icon-review.png';
import './SingleApp.css';
import Chart from './Chart';
import { addToStoredApp, getStoredApp } from '../Storage/storeData';
import { toast } from 'react-toastify';

const SingleApp = () => {
    const { appId } = useParams();
    const data = useLoaderData();
    const convertId = parseInt(appId);
    const findApp = data.find(app => app.id === convertId);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const storedApps = getStoredApp();
        if (storedApps.includes(convertId)) {
            setIsInstalled(true);
        }
    }, [convertId]);

    const handleClick = (id) => {

        const storedApps = getStoredApp();
        if (storedApps.includes(id)) {
            console.log("what");
            toast('App already Installed🤔');
        } else {
            addToStoredApp(id);
            console.log("ok");

            setIsInstalled(true);
            toast('App Installed Successfully!');
        }
        // localStorage.clear('installed')
    };

    const { image, title, downloads, ratingAvg, id, companyName, reviews, size, description, ratings } = findApp;

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20 p-4 border-b-2 border-gray-300">

                <div className="bg-white shadow-md p-3 rounded-xl">
                    <img className="w-40 sm:w-56 md:w-64 object-cover" src={image} alt={title} />
                </div>

                <div className="flex-1 w-full">
                    <div className="border-b border-gray-300 pb-2 mb-4 text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Apps name: {title}</h3>
                        <p className="text-gray-600 text-lg">Developed by: {companyName}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 text-center md:text-left mb-6">
                        <div>
                            <img className="mx-auto md:mx-0 w-8 h-8" src={down} alt="Downloads" />
                            <p className="text-gray-500 text-sm">Downloads</p>
                            <h3 className="text-lg font-semibold">{downloads}M</h3>
                        </div>

                        <div>
                            <img className="mx-auto md:mx-0 w-8 h-8" src={star} alt="Ratings" />
                            <p className="text-gray-500 text-sm">Average Rating</p>
                            <h3 className="text-lg font-semibold">{ratingAvg}</h3>
                        </div>

                        <div>
                            <img className="mx-auto md:mx-0 w-8 h-8" src={rev} alt="Reviews" />
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                            <h3 className="text-lg font-semibold">{reviews}</h3>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <button onClick={() => handleClick(id)} className="btn bgColor px-6 py-2 font-medium">
                            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="mt-10">
                <Chart ratings={ratings} />
            </div>

            <div className="p-6 md:p-10">
                <h3 className="text-2xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600 text-2xl">{description}</p>
            </div>
        </div>
    );
};

export default SingleApp;
