import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20'>
            <img src={assets.logo} className='w-28 sm:w-32 lg:w-40' alt="" />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Manmaya Rama | All Rights Reserved.</p>
            <div className='flex gap-2.5'>
                <a href="https://linkedin.com/in/manmaya-rama-k-a-28a520257">
                    <img src={assets.linkedin_icon} width={35} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/manmayarama">
                    <img src={assets.github_icon} width={35} alt="GitHub Icon" />
                </a>
                <a href="https://www.instagram.com/i_a_m_manu/">
                    <img src={assets.instagram_icon} width={35} alt="Instagram Icon" />
                </a>
            </div>

        </div>
    )
}

export default Footer