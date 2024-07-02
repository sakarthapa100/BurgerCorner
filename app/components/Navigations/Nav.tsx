import React from 'react'
import { GiHamburger } from "react-icons/gi";
import Link from 'next/link'
import { IoIosBicycle } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className='h-[12vh] bg-white'>
      <div className='sm:w-[90%] w-[95%] flex justify-between '>
      {/* logo */}
        <div className='flex px-16 py-7 justify-start items-center  gap-3'>
          <Link href={"/"} className='flex items-center gap-3'>
            <GiHamburger className='text-red-500' size={30} />
            <span className='text-black font-mono font-bold text-2xl sm:text-[20px]  mt-2'>BurgerCorner</span>
          </Link>
        </div>
<ul className='hidden lg:flex items-center space-x-10 text-black'>
  <li className='hover:text-red-500 text-[1.2rem] font-medium '><Link href={"/home"}>Home</Link> </li>
  <li className='hover:text-red-500 text-[1.2rem] font-medium '><Link href={"/shop"}>Shop</Link> </li>
  <li className='hover:text-red-500 text-[1.2rem] font-medium '><Link href={"/contact"}>Contact us</Link> </li>
  <li className='hover:text-red-500 text-[1.2rem] font-medium '><Link href={"/about"}>About us</Link> </li>
  <li className='hover:text-red-500 text-[1.2rem] font-medium '><Link href={"/home"}>Blog</Link> </li>
</ul>

{/* button */}
<div className='items-center justify-center flex gap-7  '>
  <button className='bg-blue-800 flex  justify-center items-center rounded-md transaction-all duration-300 hover:bg-red-600 text-white px-3 py-2  sm:px-6 sm:py-2  '>
    <span>
    <IoIosBicycle className='text-2xl ' />

    </span>
    <span className='ml-2 text-[1.1rem] sm:text-[1.3rem]  '>
      Order Now
    </span>
  </button>
<button className='bg-red-600 flex  justify-center items-center rounded-md transaction-all duration-300 hover:bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-3'>
<FaShoppingBag className='text-[1.8rem] ' />

</button>

<HiBars3BottomRight className='lg:hidden h-[2rem] w-[2rem]  text-black' />


</div>
      </div>
    </div>
  )
}

export default Nav
