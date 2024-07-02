import React from 'react'

const NewsLetter = () => {
  return (
    <div className='mt-40 mb-40' >
      <div>
        <h1 className='text-[50px] font-bold text-black text-center leading-10 uppercase'>Subscribe To Our 
      <span className='text-red-600'>  Newsletter  </span>    
          </h1>
        <p className='text-black text-xl text-center mt-[2rem] '>Get E-mail updates about our latest shop and special offers</p>   

       <div className='flex items-center justify-center mt-16'>
        <input type="text" placeholder='Email Address' className='text-black flex items-center justify-center w-[22rem] outline-none placeholder:text-black px-4 py-3 ' />

        <button className='bg-red-600 text-white px-4 py-3 font-semibold hover:bg-green-500 transition-all duration-200   '>Subscribe</button>
       </div>
      </div>

    </div>
  )
}

export default NewsLetter