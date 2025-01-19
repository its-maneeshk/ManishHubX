import React from 'react'

import homePageModel from '../assets/home-page-model.png';

const Home = () => {
  return (
    <>
      <div className='bg-red-200 h-72 w-72 absolute top-0 left-72 -z-10'></div>
      <div className='bg-red-400 h-16 absolute -right-60 top-80 -z-10 -rotate-90'>
        <h1 className='text-8xl font-semibold opacity-80'>MANISH PATEL</h1>
      </div>
      <h1 className='text-8xl opacity-15 font-semibold absolute left-52'>PATEL</h1>

      <main className='container mx-auto flex justify-between items-center'>
        <div className='text-center md:text-left md:w-1/2'>
          <p className='mb-4 font-serif'>HELLOW THERE, NICE TO MEET YOU 💖, I AM</p>
          <h1 className='font-GreatVibes text-8xl font-bold text-red-500'>Manish Patel</h1>
          <p className='mt-4 font-serif'>Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs.</p>
          <div className='mt-4'>
            <button type="button" className='h-16 w-48 rounded font-bold text-lg text-white bg-red-600 hover:bg-red-400'>Download Resume</button>
          </div>
        </div>

          <img src={homePageModel} alt="collage student holding book" className='w-2/4' />

      </main>
      <div className='bg-red-200 h-72 w-72 absolute -bottom-0 right-48 -z-10'></div>
    </>
  )
}

export default Home
