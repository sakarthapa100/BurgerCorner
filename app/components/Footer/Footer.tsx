import React from 'react'
import Link from 'next/link'
import { GiHamburger } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center'>
        {/* 1st part */}
        <div>
          <div className='flex px-13 py-5 justify-start items-center gap-3'>
            <Link href={"/"} className='flex items-center gap-2'>
              <GiHamburger className='text-red-500' size={30} />
              <span className='text-white font-mono font-bold text-2xl sm:text-[20px] mt-2'>BurgerCorner</span>
            </Link> 
             </div>
            <p className='text-white text-opacity-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus quasi porro vel fuga! Placeat doloribus inventore pariatur?</p>
        <p className='mt-[1rem] text-white  '>support@gmail.com</p>
        <p className='text-red-300 text-[19px] font-bold'>+977/ 9877665444</p>
        </div>

        {/* 2ndpart */}
        <div>

          <h1 className='text-[23px] font-semibold mb-[2rem] text-white '>Products</h1>
          <p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
          <p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
          <p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
          <p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
          <p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
        </div>
              {/* 3ndpart */}
              <div>

<h1 className='text-[23px] font-semibold mb-[2rem] text-white '>Quick Link</h1>
<p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Home</p>
<p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>About us</p>
<p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Contact us</p>
<p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Message us</p>
<p className='mt-[0.7rem] text-white opacity-55 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
</div>
{/* 4hndpart */}
<div>
<h1 className='text-[23px] font-semibold mb-[2rem] text-white '>Opening Hours</h1>
<p className='text-white  text-[18px]'>Monday - Friday: <span className='text-yellow-300 '>9:00am - 9:00pm </span>  </p>

<p className='text-white  text-[18px]'>Saturday: <span className='text-yellow-300 '>11:00am - 5:00pm </span>  </p>

{/* socialmedia */}
<div className='flex mt-[2rem] items-center space-x-6 '>
<FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
<FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400'/>
<FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-400'/>   
</div>
</div>
      </div>
      {/* copyright */}

      <p className='text-white text-center opacity-50 mt-[1.4rem]'>Copyright &copy; 2022</p>
    </div>
  )
}

export default Footer
