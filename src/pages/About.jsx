import React from 'react'
import homePageModel from '../assets/home-page-model.png';
import reactIcon from '../assets/icons/react-icon.png'
import htmlIcon from '../assets/icons/html-icon.png'
import jsIcon from '../assets/icons/js-icon.png'
import cssIcon from '../assets/icons/css-icon.png'

const About = () => {
  return (
    <>
      <div className='bg-red-200 h-72 w-72 absolute top-0 left-3/4 -z-10'></div>
      <main className='container mx-auto flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center'>
          <div className='blue-glassmorphism h-96 w-96'>
            <img src={homePageModel} alt="collage student holding book" className='' />
          </div>
          <div className='flex flex-col gap-2 w-2/3'>
            <h1 className='font-serif font-bold text-2xl'>UI/UX Designer With a Passion For Front End Development</h1>
            <p>Hello, I'm Edward Freddy, I am a talented, ambitious and hardworking individual, with broad skills and experience in technology and all about design specifically UI/UX Design and Front End Developer.</p>
            <div className='mt-4 flex gap-3'>
              <button type="button" className='h-12 w-48 rounded font-bold text-lg text-white bg-red-600 hover:bg-red-400'>Get in touch</button>
              <button type="button" className='h-12 w-48 rounded font-bold text-lg text-white bg-red-600 hover:bg-red-400'>Projects</button>
            </div>
          </div>
        </div>
        <div className='my-14'>
          <h1 className='font-serif font-bold text-4xl my-5'>My Skills</h1>
          <div className='flex items-center justify-center gap-8 '>
            <div className='blue-glassmorphism h-40 w-40 p-4 flex flex-col items-center justify-center'>
              <img src={reactIcon} alt="" srcset="" className='h-auto w-28' />
              <h1 className='font-serif font-bold'>React</h1>
            </div>
            <div className='blue-glassmorphism h-40 w-40 p-4 flex flex-col items-center justify-center'>
              <img src={htmlIcon} alt="" srcset="" className='h-auto w-28' />
              <h1 className='font-serif font-bold'>HTML5</h1>
            </div>
            <div className='blue-glassmorphism h-40 w-40 p-4 flex flex-col items-center justify-center'>
              <img src={cssIcon} alt="" srcset="" className='h-auto w-28' />
              <h1 className='font-serif font-bold'>CSS3</h1>
            </div>
            <div className='blue-glassmorphism h-40 w-40 p-4 flex flex-col items-center justify-center'>
              <img src={jsIcon} alt="" srcset="" className='h-auto w-28' />
              <h1 className='font-serif font-bold'>Java Script</h1>
            </div>
          </div>
        </div>
      </main>
      <div className='bg-red-200 h-full w-72 absolute bottom-0 left-36 -z-10'></div>
      <div className='bg-red-200 h-72 w-72 absolute -bottom-32 left-36 -z-10'></div>
    </>
  )
}

export default About
