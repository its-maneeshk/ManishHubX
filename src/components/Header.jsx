import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithubSquare, FaTwitter, FaWhatsappSquare } from "react-icons/fa";

const Header = () => {
    return (
        <>
        <header className='container py-4 flex justify-around items-center'>
            <div>
                <h1 className='font-LogoFont text-3xl'>
                    <Link to="/">ManishHubX</Link>
                </h1>
            </div>
            <nav>
                <ul className='flex gap-5 font-bold'>
                    <li className='hover:text-red-500'><Link to="/">portfolio</Link></li>
                    <li className='hover:text-red-500'><Link to="/about">about me</Link></li>
                    <li className='hover:text-red-500'><Link to="/contact">contact me</Link></li>
                </ul>
            </nav>
            <div className='flex gap-4 text-3xl'>
                <Link to="/" className='hover:text-red-500'><FaTwitter /></Link>
                <Link to="/" className='hover:text-red-500'><FaLinkedin /></Link>
                <Link to="/" className='hover:text-red-500'><FaGithubSquare /></Link>
                <Link to="/" className='hover:text-red-500'><FaWhatsappSquare /></Link>
            </div>
        </header>
        <hr className='mb-2' />
        </>
    )
}

export default Header
