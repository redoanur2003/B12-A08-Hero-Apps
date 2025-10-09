import { Facebook, Mail, X } from 'lucide-react';
import React from 'react';
import image from '../../assets/logo.png';
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <div className=' w-auto md: bg-black text-white p-3 mt-20'>
            <div className='flex justify-between'>
                <div>
                    <NavLink to='/'>
                        <div className='flex gap-2'>
                            <img className='w-10' src={image} alt="" />
                            <h3 className='text_color mt-1'>HERO.IO</h3>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <div className='flex gap-3'>
                        <X className='bg-white rounded-full text-black p-1'></X>
                        <Mail className='bg-white rounded-full text-black p-1'></Mail>
                        <Facebook className='bg-white rounded-full text-black p-1'></Facebook>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;