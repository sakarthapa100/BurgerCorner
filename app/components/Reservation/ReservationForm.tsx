import React from 'react'
import { GrRestaurant } from "react-icons/gr";

const ReservationForm = () => {
  return (
    <div className='bg-green-500 rounded-lg p-8'>
      <GrRestaurant className='w-[5rem] h-[5rem] text-white mx-auto' />
      <h1 className='text-3xl font-bold text-white text-center uppercase mt-4'>Reservation</h1>
      <p className='uppercase text-white text-center text-xl font-semibold mb-6'>Book your table</p>
      
      {/* Inputs */}
      <div className='flex flex-col sm:flex-row items-center w-full sm:space-x-4 space-y-4 sm:space-y-0 ml-11'>
        <select 
          name="people" 
          id="people" 
          className='px-4 py-3 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-2 border-gray-100 w-full sm:w-auto'
        >
          <option value="1" className='text-black'>1 People</option>
          <option value="2" className='text-black'>2 People</option>
          <option value="3" className='text-black'>3 People</option>
          <option value="4" className='text-black'>4 People</option>
          <option value="5" className='text-black'>5 People</option>
        </select>
        <input 
          type="date" 
          className='px-4 py-3 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-2 border-gray-100 w-full sm:w-auto'
        />
        <input 
          type="time" 
          className='px-4 py-3 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-2 border-gray-100 w-full sm:w-auto'
        />
      </div>
      
      <div className='mt-6 w-full text-center'>
        <button className='px-8 py-3 rounded-lg text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white'>
          Book Now
        </button>
      </div>
    </div>
  )
}

export default ReservationForm
