import React from 'react';
import down from '../../../assets/icon-downloads.png'
import star from '../../../assets/icon-ratings.png'

const ShowApps = ({ appsData }) => {
    // console.log(apps)
    const { image, title, downloads, ratingAvg } = appsData;
    return (
        <div>
            <div className='p-4 w-auto h-auto bg-white rounded-xl shadow-xl'>
                <img className='bg-gray-500 rounded-4xl' src={image} alt="" />
                <p className='font-medium text-xl'>{title}</p>
                <div className='flex justify-between'>
                    <span>
                        <img src={down} alt="" />
                        <p>{downloads}M</p>

                    </span>
                    <span>
                        <img src={star} alt="" />
                        <p>{ratingAvg}M</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ShowApps;

// // companyName
// :
// "Meta Platforms, Inc."
// description
// :
// "Instagram is a social media platform that lets users capture, edit, and share photos and videos with their followers. It also provides features like Reels, Stories, and Live broadcasting for real-time interaction. Users can explore content from creators around the world, shop within the app, and stay updated with the latest trends."
// downloads
// :
// 3000000000
// id
// :
// 2
// image
// :
// "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
// ratingAvg
// :
// 4.3
// ratings
// :
// Array(5)
// 0
// :
// {name: '1 star', count: 4200000}
// 1
// :
// {name: '2 star', count: 6500000}
// 2
// :
// {name: '3 star', count: 12000000}
// 3
// :
// {name: '4 star', count: 29000000}
// 4
// :
// {name: '5 star', count: 73000000}
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
// reviews
// :
// 125000000
// size
// :
// 160
// title
// :
// "Instagram"