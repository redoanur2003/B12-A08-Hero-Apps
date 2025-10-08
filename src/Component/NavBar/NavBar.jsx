import React, { useState } from 'react';
import image from '../../assets/logo.png';
import { NavLink } from 'react-router';
import './NavBar.css';
import { GithubIcon, Menu, X } from 'lucide-react';

const NavBar = () => {
    const [state, setState] = useState(false);


    return (
        <nav className='flex item-center justify-around shadow-xl p-3 gap-6 m-3'>
            <div>
                <NavLink to='/'>
                    <div className='flex gap-2'>
                        <img className='w-10' src={image} alt="" />
                        <h3 className='text_color mt-1'>HERO.IO</h3>
                    </div>
                </NavLink>
                <div className='w-4 md:hidden' onClick={() => setState(!state)}>
                    {state ? <X></X> : <Menu></Menu>}
                </div>
                <div className='md:hidden'>
                    <ul className={` absolute duration-1000 ${state ? 'flex gap-6' : '-ml-100 flex gap-3'}`} >
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                            "text-gray-700 hover:text-blue-400 text-xl"}> Home</NavLink>

                        </li> <li><NavLink to='/app' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                            "text-gray-700 hover:text-blue-400 text-xl"}> Apps</NavLink></li>

                        <li><NavLink to='/installation' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                            "text-gray-700 hover:text-blue-400 text-xl"}> Installation</NavLink></li>
                    </ul>
                </div>

            </div>
            <ul className='hidden md:flex gap-6 '>
                <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                    "text-gray-700 hover:text-blue-400 text-xl"}> Home</NavLink>

                </li> <li><NavLink to='/app' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                    "text-gray-700 hover:text-blue-400 text-xl"}> Apps</NavLink></li>

                <li><NavLink to='/installation' className={({ isActive }) => isActive ? "text-blue-500 underline font-semibold text-xl" :
                    "text-gray-700 hover:text-blue-400 text-xl"}> Installation</NavLink></li>
            </ul>
            <div className='flex'>
                <button className='btn p-2 btn-primary'> <GithubIcon></GithubIcon>Contribute</button>
            </div>
        </nav>
    );
};

export default NavBar;