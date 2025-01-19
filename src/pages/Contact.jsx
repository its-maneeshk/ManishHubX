import React from 'react'
import { Link } from 'react-router-dom';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <main className='container mx-auto px-36 mt-16 flex justify-center items-center gap-10'>
                <div className='blue-glassmorphism flex px-16 py-10 gap-8 '>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <h1 className='font-serif font-bold text-3xl'>Let's Get In Touch!</h1>
                        <p className='font-serif'>Always available for freelancing if the right
                            project comes along, Feel free to contact me.</p>
                        <ul className='flex flex-col gap-3 mt-4'>
                            <li className='flex items-center gap-2 text-xl font-serif hover:text-red-700'><PiPhoneCallFill />+977 9816264341</li>
                            <li className='flex items-center gap-2 text-xl font-serif hover:text-red-700'><MdEmail /><a href="mailto:maneeshkurmii@gmail.com">maneeshkurmii@gmail.com</a></li>
                            <li className='flex items-center gap-2 text-xl font-serif hover:text-red-700'><IoLocation />Pakaha Mainpur, Nepal</li>
                            <li><Link to="/" className='flex items-center gap-2 text-xl font-serif hover:text-red-500'><FaTwitter />its_maneeshk_</Link></li>
                            <li><Link to="/" className='flex items-center gap-2 text-xl font-serif hover:text-red-500'><FaLinkedin />its_maneeshk_</Link></li>
                            <li><Link to="/" className='flex items-center gap-2 text-xl font-serif hover:text-red-500'><FaGithubSquare />its-maneeshk</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center justify-center p-6 w-auto white-glassmorphism'>
                        <p className='mb-2 italic '>**Don't be shy, come in contact with me, and fill out the contact form below.</p>
                        <form action="/" className='flex flex-col gap-3 p-3 w-full'>
                            <div className='flex gap-3 font-serif'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" id="" placeholder='Name*' className='rounded h-9 p-3' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="mail">Your Email</label>
                                    <input type="email" name="mail" id="" placeholder='Email*' className='rounded h-9 p-3' />
                                </div>
                            </div>
                            <div className='flex flex-col font-serif gap-2'>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="" placeholder='Subject*' className='rounded h-9 p-3' />
                                <label htmlFor="message">Your Message</label>
                                <input type="text" name="message" id="" placeholder='Your Message*' className='rounded h-9 p-3' />
                            </div>
                            <button type="button" className='h-14 w-36 mt-2 bg-red-600 rounded text-white font-sans font-bold hover:bg-red-400'>Send Message</button>
                        </form>
                    </div>
                </div>
                {/* <div className='bg-red-200 h-72 w-72 absolute -bottom-32 left-36 -z-10'></div> */}
            </main>
            <div className='bg-red-200 h-full w-72 absolute bottom-0 left-14 -z-10'></div>
        </>
    )
}

export default Contact
