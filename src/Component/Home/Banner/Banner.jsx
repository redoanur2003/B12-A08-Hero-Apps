import React from 'react';
import gPlay from '../../../assets/Group.png'
import aPlay from '../../../assets/Group (1).png'
import { Link } from 'react-router';
import './Banner.css'
// import hero from '../../../assets/hero.png'
const Banner = () => {
    return (
        <div className='mt-20'>
            <div className='font-black text-7xl text-center'>
                <h1 className='text-black'>We Build</h1>
                <h1 className='text-Color'>Productive <span className='text-black font-black'>Apps</span></h1>
            </div>
            <div className='text-center text-gray-500 mt-4'>
                <p>At HERO.IO,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    ?Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex gap-4 justify-center mt-5'>
                <Link to={'https://play.google.com/store/games'} ><button className='flex gap-1 shadow btn bg-white text-black'><img src={gPlay} alt="" /> Google Play</button></Link>
                <Link to={'https://www.apple.com/app-store/'} ><button className='flex gap-1 shadow btn bg-white text-black'> <img src={aPlay} alt="" /> App Store</button></Link>
            </div>

            <div className='font-black text-7xl text-center mt-10'>
                <h1 className='text-black'>We Build</h1>
                <h1 className='text-Color'>Productive <span className='text-black font-black'>Apps</span></h1>
            </div>
            <div className='text-center text-gray-500 mt-4'>
                <p>At HERO.IO,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    ?Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-4 justify-center mt-5'>
                <Link to={'https://play.google.com/store/games'} ><button className='flex gap-1 shadow btn bg-white text-black'><img src={gPlay} alt="" /> Google Play</button></Link>
                <Link to={'https://www.apple.com/app-store/'} ><button className='flex gap-1 shadow btn bg-white text-black'> <img src={aPlay} alt="" /> App Store</button></Link>
            </div>
            {/* <img src={hero} alt="" /> */}
        </div>
    );
};

export default Banner;