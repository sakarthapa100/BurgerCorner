import React from 'react'
import { BiPhone } from "react-icons/bi";
import ReservationForm from './ReservationForm';

const Reservation = () => {
  return (
    <div className='pt-20 bg-center bg-cover relative mt-[2rem] mb-[3rem] pb-[5rem] bg-[url("/images/bg-black.jpg")]'>
      {/* overlay */}
      <div className='absolute w-full h-full bg-[#000000] top-0 left-0 opacity-60'></div>
      
      <div className='relative w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
        {/* text content */}
        <div className=''>
          <h1 className='text-[30px] md:text-[40px] font-bold lg:text-[50px] text-white leading-[3rem] md:leading-[4rem]'>
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className='text-white mt-4 mb-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex mt-3 items-center space-x-4'>
            <div className='w-[3rem] bg-red-500 rounded-full flex items-center justify-center text-white'>
              <BiPhone className='w-[1.7rem] h-[1.7rem] text-white' />
            </div>
            <div className='flex text-white flex-col'>
              <h1 className='text-[25px]'>Quick order 24/7</h1>
              <h1 className='text-yellow-300 font-bold text-[25px]'>+0123 456 789</h1>
            </div>
          </div>
        </div>
        {/* reservation form */}
        <div>
          {/* Reservation form content goes here */}
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}

export default Reservation
