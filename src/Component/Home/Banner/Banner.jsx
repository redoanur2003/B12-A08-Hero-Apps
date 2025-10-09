import React from 'react';
import gPlay from '../../../assets/Group.png'
import aPlay from '../../../assets/Group (1).png'
import { Link } from 'react-router';
import './Banner.css'
import hero from '../../../assets/hero.png'
const Banner = () => {
    return (
        <div className='mt-20'>
            <div className='md:font-black text-7xl text-center'>
                <h1 className='text-black'>We Build</h1>
                <h1 className='text-Color'>Productive <span className='md: text-black font-black'>Apps</span></h1>
            </div>
            <div className=' text-xs p-2 md:text-center text-gray-500 mt-4'>
                <p>At HERO.IO,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    ?Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex gap-4 justify-center mt-5'>
                <Link to={'https://play.google.com/store/games'} ><button className='flex gap-1 shadow btn bg-white text-black'><img src={gPlay} alt="" /> Google Play</button></Link>
                <Link to={'https://www.apple.com/app-store/'} ><button className='flex gap-1 shadow btn bg-white text-black'> <img src={aPlay} alt="" /> App Store</button></Link>
            </div>

            <div className='md:font-black text-7xl text-center mt-10'>
                <h1 className='md: text-black'>We Build</h1>
                <h1 className='text-Color'>Productive <span className='md: text-black font-black'>Apps</span></h1>
            </div>
            <div className='text-xs p-2 md:text-center text-gray-500 mt-4'>
                <p>At HERO.IO,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    ?Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-4 justify-center mt-5'>
                <Link to={'https://play.google.com/store/games'} ><button className='flex gap-1 shadow btn bg-white text-black'><img src={gPlay} alt="" /> Google Play</button></Link>
                <Link to={'https://www.apple.com/app-store/'} ><button className='flex gap-1 shadow btn bg-white text-black'> <img src={aPlay} alt="" /> App Store</button></Link>
            </div>

            <div className="flex justify-center items-center mt-10">
                <img className="" src={hero} alt="Hero" />
            </div>
            <div>
                <div className='p-20 bgColor'>
                    <h2 className='md:text-3xl text-center text-white'>Trusted by Millions, Built for you</h2>

                    <div className='grid grid-cols-1 md:flex text-center justify-center gap-16 mt-2'>
                        <div className="text-white">
                            <p>Total Downloads</p>
                            <h3 className='font-extrabold text-4xl'>29.6 M</h3>
                            <p>21% more than last month</p>
                        </div>
                        <div className="text-white">
                            <p>Total Reviews</p>
                            <h3 className='font-extrabold text-4xl'>906K</h3>
                            <p>46% more than last month</p>
                        </div>
                        <div className="text-white">
                            <p>Active Apps</p>
                            <h3 className='font-extrabold text-4xl'>132+</h3>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;