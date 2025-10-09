import React from 'react';
import down from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import './Installation.css';
import { getStoredApp } from '../Storage/storeData';
import { toast } from 'react-toastify';

const ShowInstallApp = ({ inst }) => {
    const { image, title, downloads, ratingAvg, id, size } = inst;

    const handleUninstall = (id) => {
        const storedAppData = getStoredApp();
        const ConvertedStoredAppId = storedAppData.map(idNum => parseInt(idNum));
        const updatedApps = ConvertedStoredAppId.filter(appId => appId !== id);
        localStorage.setItem('installed', JSON.stringify(updatedApps));
        toast('Uninstall done.Click reload button')
        // console.log(`App ID ${id} uninstalled`);
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-20 p-4'>
                <div className="flex flex-row items-center md:items-start gap-8 md:gap-20 p-4">

                    <div className="bg-white shadow-md p-3 rounded-xl">
                        <img className="w-12 sm:w-24 md:w-32 object-cover" src={image} alt={title} />
                    </div>

                    <div className="flex-1 w-full">
                        <div className="flex-1 pb-2 mb-4 md:text-left">
                            <h3 className="text-2xl font-semibold">Apps name: {title}</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 text-center md:text-left mb-6">
                            <div className='flex'>
                                <img className="mx-auto md:mx-0 w-6 h-6" src={down} alt="Downloads" />
                                <h3 className="text-lg font-semibold">{downloads}M</h3>
                            </div>

                            <div className='flex'>
                                <img className="mx-auto md:mx-0 w-6 h-6" src={star} alt="Ratings" />
                                <h3 className="text-lg font-semibold">{ratingAvg}</h3>
                            </div>

                            <div>
                                <h4 className='text-gray-400 text-xl'>{size}MB</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-end">
                    <button onClick={() => handleUninstall(id)} className="btn bgColor px-6 py-2 font-medium">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowInstallApp;
