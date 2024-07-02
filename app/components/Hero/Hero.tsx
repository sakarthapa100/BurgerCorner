"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerImg1 from '@/public/images/b1.png'
import BurgerImg2 from '@/public/images/b2.png'


import BurgerImg3 from '@/public/images/b3.png'
import Image from 'next/image';
import { IoIosBicycle } from 'react-icons/io';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Hero = () => {
  return (
    <div className="w-full">
      <Carousel 
        additionalTransfrom={0} 
        arrows={false} 
        autoPlay={true} 
        autoPlaySpeed={4000} 
        centerMode={false} 
        infinite 
        responsive={responsive} 
        itemClass='carousel-item' 
        showDots={true}
      >
        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-500 clip_path'> 
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1rem] mx-auto   '>
      <Image src={BurgerImg1} alt="img" width={550} height={350} className='hidden md:block'/>
<div>
  <h1 className='text-[40px] font-bold text-yellow-400 '>Fast Food Burger </h1>
  <h1 className='text-[90px] leading-[5rem] uppercase font-bold text-white' >Best <br /> Burgers</h1>
  <p className='mt-2 text-white text-opacity-70 text-[18px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti doloremque saepe, iure qui numquam. Placeat aperiam omnis molestias illo illum asperiores.</p>
  <button className='bg-green-500 flex  justify-center items-center rounded-md transaction-all duration-300 hover:bg-red-600 text-white px-3 py-2  sm:px-6 sm:py-2 mt-5 '>
    <span>
    <IoIosBicycle className='text-2xl ' />

    </span>
    <span className='ml-2 text-[1.1rem] sm:text-[1.3rem]  '>
      Order Now
    </span>
  </button>

</div>

        </div>
         </div>
{/* 2nd slide  */}
<div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-500 clip_path'> 
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1rem] mx-auto   '>
      <Image src={BurgerImg2} alt="img" width={550} height={350} className='hidden md:block' />
<div>
  <h1 className='text-[40px] font-bold text-yellow-400 '>Fast Food Burger </h1>
  <h1 className='text-[90px] leading-[5rem] uppercase font-bold text-white' >Best <br /> Burgers</h1>
  <p className='mt-2 text-white text-opacity-70 text-[18px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti doloremque saepe, iure qui numquam. Placeat aperiam omnis molestias illo illum asperiores.</p>
  <button className='bg-green-500 flex  justify-center items-center rounded-md transaction-all duration-300 hover:bg-red-600 text-white px-3 py-2  sm:px-6 sm:py-2 mt-5 '>
    <span>
    <IoIosBicycle className='text-2xl ' />

    </span>
    <span className='ml-2 text-[1.1rem] sm:text-[1.3rem]  '>
      Order Now
    </span>
  </button>

</div>

        </div>
         </div>
{/* 3red slide  */}

<div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-yellow-500 clip_path'> 
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1rem] mx-auto   '>
      <Image src={BurgerImg3} alt="img" width={550} height={350} className='hidden md:block' />
<div>
  <h1 className='text-[40px] font-bold text-yellow-400 '>Fast Food Burger </h1>
  <h1 className='text-[90px] leading-[5rem] uppercase font-bold text-white' >Best <br /> Burgers</h1>
  <p className='mt-2 text-white text-opacity-70 text-[18px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti doloremque saepe, iure qui numquam. Placeat aperiam omnis molestias illo illum asperiores.</p>
  <button className='bg-green-500 flex  justify-center items-center rounded-md transaction-all duration-300 hover:bg-red-600 text-white px-3 py-2  sm:px-6 sm:py-2 mt-5 '>
    <span>
    <IoIosBicycle className='text-2xl ' />

    </span>
    <span className='ml-2 text-[1.1rem] sm:text-[1.3rem]  '>
      Order Now
    </span>
  </button>

</div>

        </div>
         </div>
      </Carousel> 
       </div>
  );
};

export default Hero;
